const Admin = require('../models/admin');
const Student = require('../models/students');
const Teachers = require('../models/teachers');
const LiveExam = require('../models/livequiz');
const Exam = require('../models/quiz');
const Result = require('../models/marks');
class AdminController {
  async register(req, res) {
    try {
      const { email, name , password } = req.body;

      const emailRegex = /^([a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail)\.com|[^\s@]+@[^\s@]+\.[^\s@]+)$/;

      if (!emailRegex.test(email)) {
        return res.status(401).json({ message: 'Email is not valid' });
      }

      const existingUser = await Admin.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists. Please use a different email.' });
      }

      const newAdmin = new Admin({ email, name, password });

      await newAdmin.save();

      res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      
      const existingUser = await Admin.findOne({ email });

      if (!existingUser) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      
      const passwordMatch = password === existingUser.password ? true : false;
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      res.status(200).json({ message: 'Login successful', user: existingUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async getData(req, res) {
    try {
      const currentMonth = new Date().getMonth() + 1;
      const newJoining = await Student.find({
        $expr: { $eq: [{ $month: '$createdAt' }, currentMonth] }
      })
      const liveExam = await LiveExam.find();
      const student = await Student.find();
      const teacher = await Teachers.find();
      const result = await Result.find();
      
      let data = [ {exam : liveExam} ,{student: student} ,{teacher: teacher} , {newJoining:newJoining}, {result:result}]

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async unvarifiedQuiz(req , res){
    try {
      const quizzesGrouped = await Exam.aggregate([
        {
          $sort: { subject: 1, board: 1 },
        },
        {
          $group: {
            _id: { subject: '$subject', board: '$board' },
            quizzes: { $push: '$$ROOT' },
          },
        },
        {
          $project: {
            _id: 0,
            subject: '$_id.subject',
            board: '$_id.board',
            quizzes: 1,
          },
        },
      ]);
  
  
  
      res.json(quizzesGrouped);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async varifiedQuiz(req , res){
    try {
      const quizzesGrouped = await LiveExam.aggregate([
        {
          $sort: { subject: 1, board: 1 },
        },
        {
          $group: {
            _id: { subject: '$subject', board: '$board' },
            quizzes: { $push: '$$ROOT' },
          },
        },
        {
          $project: {
            _id: 0,
            subject: '$_id.subject',
            board: '$_id.board',
            quizzes: 1,
          },
        },
      ]);
  
  
  
      res.json(quizzesGrouped);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async dalateQuiz(req , res){
    const { quizId } = req.body;
    try {
      const deletedQuiz = await Exam.findByIdAndDelete(quizId);
  
      if (!deletedQuiz) {
        deletedQuiz = await LiveExam.findByIdAndDelete(quizId);
      }else{
        return res.status(404).json({ message: 'Quiz not found' });
      }
  
      res.json({ message: 'Quiz deleted successfully', deletedQuiz });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AdminController();
