const Teacher = require('../models/teachers');
const Exam = require('../models/livequiz');
const Attempt_Exam = require('../models/students_answer');
const Result = require('../models/marks');

class StdController {
    
    async subjects(req, res) {
      const { board } = req.body;
        try {
          const teachers = await Teacher.find({ board: { $in: board } });
            if (teachers) {
              res.status(200).json({ teachers });
            } else {
              res.status(404).json({ success: false, message: 'Teacher not found' });
            }
          } catch (error) {
            res.status(500).json({ success: false, message: error.message });
          }
    }

    async exam(req, res) {
      const { board, studentId } = req.body;

      try {
        const quiz = await Exam.find({ board: board });
        const teachers = [];
      
        for (const data of quiz) {
          const quizDetails = await Exam.findById(data._id);
          const submited = quizDetails.submittedStudents.includes(studentId);
          const checked = quizDetails.varifiedExam.includes(studentId);
      
          // console.log({ quiz: quizDetails, submited: submited, checked: checked });
      
          if (!checked) {
            teachers.push(data);
          } else {
            // console.log('exam is checked');
          }
        }
      
        if (teachers.length > 0) {
          res.status(200).json({ teachers });
        } else {
          res.status(404).json({ success: false, message: 'Exam not found' });
        }
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      
    }


    async attempt_exam(req, res) {
      try {
        const { quizId, studentId, answers, board , subject} = req.body;
    
        // Find the quiz by its ID
        const quiz = await Exam.findById(quizId);
    
        if (!quiz) {
          return res.status(404).json({ message: 'Quiz not found' });
        }
    
        const studentAnswers = new Attempt_Exam({
          studentId,
          quizId,
          answers,
          board ,
          subject
        });
        
        await studentAnswers.save();
        quiz.submittedStudents.push(studentId);
        await quiz.save();
    
        res.status(200).json({ message: 'Exam submitted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    }

    async std_results(req, res) {
      const { studentId } = req.body;
      try {
          const results = await Result.find({ studentId }); 
          
          if (results && results.length > 0) {
              res.status(200).json({ success: true, results });
          } else {
              res.status(404).json({ success: false, message: 'Result not found' });
          }
      } catch (error) {
          res.status(500).json({ success: false, message: error.message });
      }
    }

    async admin_results_list(req, res) {
      try {
          const results = await Result.find(); 
          
          if (results && results.length > 0) {
              res.status(200).json({ success: true, results });
          } else {
              res.status(404).json({ success: false, message: 'Result not found' });
          }
      } catch (error) {
          res.status(500).json({ success: false, message: error.message });
      }
    }

}

module.exports = new StdController();
