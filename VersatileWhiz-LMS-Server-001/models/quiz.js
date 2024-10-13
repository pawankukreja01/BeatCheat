const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  board: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      options: [String],
      correctAnswer: {
        type: String,
        // required: true,
      },
    },
  ],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
