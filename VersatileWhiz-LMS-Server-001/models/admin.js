const mongoose = require('mongoose');

const Admin = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  });
  
const Admins = mongoose.model('Admins', Admin);

module.exports = Admins;

