const mongoose = require('mongoose');

const Teacher = new mongoose.Schema({
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
  board: [{
    type: String,
  }],
  password: {
    type: String,
    required: true,
  }
});

const Teachers = mongoose.model('Teachers', Teacher);

module.exports = Teachers;

