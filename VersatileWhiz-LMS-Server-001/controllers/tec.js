const Teacher = require('../models/teachers');
const Exam = require('../models/livequiz');
const Result = require('../models/marks');
const Student = require('../models/students');
const StudentAnswers = require('../models/students_answer');
class TecController {
    
    async uncheck_exam(req, res) {
      try {
        const { teacherId, boards } = req.body;
    
        // Find the teacher by ID to get associated boards
        const teacher = await Teacher.findById(teacherId);
    
        if (!teacher) {
          return res.status(404).json({ message: 'Teacher not found' });
        }
    
        // Filter student answers for specified boards that are unchecked
        const uncheckedExams = await StudentAnswers.find({
          board: { $in: boards },
          check: false,
        });
    
        res.status(200).json({ uncheckedExams });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    }

    async active_exam(req, res) {
      try {
        const { teacherId, boards } = req.body;
    
        // Find the teacher by ID to get associated boards
        const teacher = await Teacher.findById(teacherId);
    
        if (!teacher) {
          return res.status(404).json({ message: 'Teacher not found' });
        }
    
        // Filter student answers for specified boards that are unchecked
        const activeExams = await Exam.find({
          board: { $in: boards },
        });
    
        res.status(200).json({ activeExams });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    }

    async total_student(req, res) {
      try {
        const { teacherId, boards } = req.body;
    
        // Find the teacher by ID to get associated boards
        const teacher = await Teacher.findById(teacherId);
    
        if (!teacher) {
          return res.status(404).json({ message: 'Teacher not found' });
        }
    
        // Filter student answers for specified boards that are unchecked
        const students = await Student.find({
          board: { $in: boards },
        });
    
        res.status(200).json({ students });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    }

    async active_exam_subject_wise(req, res) {
      try {
        const { teacherId, boards  , subject} = req.body;
    
        console.log(teacherId, boards  , subject)
        // Find the teacher by ID to get associated boards
        const teacher = await Teacher.findById(teacherId);
    
        if (!teacher) {
          return res.status(404).json({ message: 'Teacher not found' });
        }
    
        // Filter student answers for specified boards that are unchecked
        const activeExams = await Exam.find({
          board:  boards.toString(),
          subject: subject
        });
    
        res.status(200).json({ activeExams });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    }

    async uncheck_exam_subject_wise(req, res) {
      try {
        const { teacherId, boards , subject} = req.body;
    
        // Find the teacher by ID to get associated boards
        const teacher = await Teacher.findById(teacherId);
    
        if (!teacher) {
          return res.status(404).json({ message: 'Teacher not found' });
        }
    
        // Filter student answers for specified boards that are unchecked
        const activeExams = await StudentAnswers.find({
          board:  boards.toString(),
          subject: subject
        });
    
        res.status(200).json({ activeExams });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    }

}

module.exports = new TecController();
