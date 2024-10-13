const Student = require('../models/students');

class StudentController {
  async register(req, res) {
    try {
      const { email, name, subjects , password , board } = req.body;

      const emailRegex = /^([a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail)\.com|[^\s@]+@[^\s@]+\.[^\s@]+)$/;

      if (!emailRegex.test(email)) {
        return res.status(401).json({ message: 'Email is not valid' });
      }

      const existingUser = await Student.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists. Please use a different email.' });
      }

      const newStudent = new Student({ email, name, subjects, password , board });

      await newStudent.save();

      res.status(201).json({ message: 'Student registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      
      const existingUser = await Student.findOne({ email });

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

  async Update(req, res) {
    try {
      const { id, name, subjects, password , board } = req.body;
  
      const existingUser = await Student.findById(id);
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      existingUser.name = name || existingUser.name;
      existingUser.subjects = subjects || existingUser.subjects;
      existingUser.password = password || existingUser.password;
      existingUser.board = board || existingUser.board;
  
      await existingUser.save();
  
      res.status(200).json({ message: 'User updated successfully', user: existingUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async Delete(req, res) {
    try {
      const { studentId } = req.body;
  
      const existingUser = await Student.findById(studentId);
      if (!existingUser) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      await Student.deleteOne({ _id: studentId });

      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
}

module.exports = new StudentController();
