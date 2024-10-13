
const Quiz  = require('../models/quiz');
const LiveQuiz  = require('../models/livequiz');
const QuizMarks  = require('../models/marks');
const StudentAnswers = require('../models/students_answer');
class QuizController {
    
  async create(req, res) {
    try {
        const { subject, board, questions } = req.body;

        const newQuiz = new Quiz({ subject, board, questions });
    
        await newQuiz.save();
    
        res.status(200).json({ message: 'Quiz created successfully', quiz: newQuiz });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
  }

  async liveQuiz(req, res) {
    try {
        const { subject, board, questions , endExamDate ,totalmarks} = req.body;
    
        const existingQuiz = await LiveQuiz.findOne({ subject, board });
    
        if (existingQuiz) {
          return res.status(200).json({ message: 'Quiz already exists', quiz: existingQuiz });
        }
    
        // Create a new quiz instance
        const newQuiz = new LiveQuiz({ subject, board, questions, endExamDate , totalmarks});
    
        // Save the quiz to the database
        await newQuiz.save();
    
        res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
  }

  async QuizMarks(req, res) {
    try {
        const { quizId, studentId, marks , totalmarks , board , subject} = req.body;

        let quizMarks = await QuizMarks.findOne({ quizId, studentId });
        const quiz = await LiveQuiz.findById(quizId);
        const result =  quiz.varifiedExam.indexOf(studentId);
        
        const index = quiz.submittedStudents.indexOf(studentId);
      
        if (!quizMarks) {
          quizMarks = new QuizMarks({ quizId, studentId ,totalmarks , board , subject});
        }
    
        if (index !== -1) {
          quiz.submittedStudents.splice(index, 1);
          quiz.varifiedExam.push(studentId);
        }
        await quiz.save();

        
        marks[0].forEach(({ questionNumber, obtainedMarks }) => {
          const existingQuestionMark = quizMarks.marks.find(mark => mark.questionNumber === questionNumber);
    
          if (existingQuestionMark) {
            existingQuestionMark.obtainedMarks = obtainedMarks;
          } else {
            quizMarks.marks.push({ questionNumber, obtainedMarks });
          }
        });

        const updatedData = await StudentAnswers.findOneAndUpdate(
          { studentId, check: false }, 
          { $set: { check: true } }, 
          { new: true } 
        );

        if (!updatedData) {
          return res.status(404).json({ message: 'Data not found or already checked' });
        }else{
          await quizMarks.save();
          res.status(200).json({ message: 'Quiz marks assigned student and question-wise successfully', quizMarks });
        }

        
    
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
  }

  async getQuiz(req, res) {
    try {
      const { id } = req.body;
  
      const quiz = await LiveQuiz.findById(id);
      if (!quiz) {
        return res.status(404).json({ message: 'quiz not found' });
      }
  
      res.status(200).json({ quiz });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

}

module.exports = new QuizController();
