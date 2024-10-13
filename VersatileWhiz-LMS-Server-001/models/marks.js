const mongoose = require('mongoose');

const QuizMarksSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz', 
    required: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  totalmarks: {
    type: Number,
    required: true,
  },
  board: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  marks: [{
    questionNumber: {
      type: Number,
      required: true,
    },
    obtainedMarks: {
      type: Number,
      required: true,
    },
  }],
});

const QuizMarks = mongoose.model('QuizMarks', QuizMarksSchema);

module.exports = QuizMarks;
