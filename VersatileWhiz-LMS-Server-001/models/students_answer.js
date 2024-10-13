const mongoose = require('mongoose');

const studentAnswersSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student', 
    required: true,
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Live_Quiz',
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
  check: {
    type: Boolean,
    default: false,
  },
  answers: [
    {
      questionIndex: {
        type: Number,
        required: true,
      },
      selectedOption: {
        type: String,
        required: true,
      },
    },
  ],
});

const StudentAnswers = mongoose.model('Student_Answers', studentAnswersSchema);

module.exports = StudentAnswers;
