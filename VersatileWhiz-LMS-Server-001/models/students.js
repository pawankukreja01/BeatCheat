const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    subjects: [{
      type: String,
    }],
    board: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now 
    }
  });
  
const Students = mongoose.model('Students', Student);

module.exports = Students;

