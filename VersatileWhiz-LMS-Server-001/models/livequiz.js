const mongoose = require('mongoose');

const livequizSchema = new mongoose.Schema({
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
  totalmarks: {
    type: Number,
    required: true,
  },
  endExamDate: {
    type: Date,
    required: true,
  },
  submittedStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
  varifiedExam: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
});

const LiveQuiz = mongoose.model('Live_Quiz', livequizSchema);

module.exports = LiveQuiz;
