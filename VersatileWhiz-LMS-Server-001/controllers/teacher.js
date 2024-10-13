const Teacher = require('../models/teachers');

class TeacherController {
  async register(req, res) {
    try {
      const { email, name, subjects , password , board } = req.body;

      const emailRegex = /^([a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail)\.com|[^\s@]+@[^\s@]+\.[^\s@]+)$/;

      if (!emailRegex.test(email)) {
        return res.status(401).json({ message: 'Email is not valid' });
      }

      const existingUser = await Teacher.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists. Please use a different email.' });
      }

      const newTeacher = new Teacher({ email, name, subjects, password , board });

      await newTeacher.save();

      res.status(201).json({ message: 'Teacher registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      
      const existingUser = await Teacher.findOne({ email });

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
  
      const existingUser = await Teacher.findById(id);
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
      const { id } = req.body;
  
      const existingUser = await Teacher.findById(id);
      if (!existingUser) {
        return res.status(404).json({ message: 'Teacher not found' });
      }
  
      await Teacher.deleteOne({ _id: id });

      res.status(200).json({ message: 'Teacher deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async AssignSubject(req, res) {
    try {
      const { id , subjects } = req.body;

      const existingUser = await Teacher.findById(id);
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (!subjects || !Array.isArray(subjects) || subjects.length === 0) {
        return res.status(400).json({ message: 'Please provide valid subjects to assign' });
      }

      existingUser.subjects = subjects;
  
      await existingUser.save();
  
      res.status(200).json({ message: 'Subjects assigned successfully', user: existingUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async AssignBoard(req, res) {
    try {
      const { id , board } = req.body;

      const existingUser = await Teacher.findById(id);
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (!board || !Array.isArray(board) || board.length === 0) {
        return res.status(400).json({ message: 'Please provide valid board to assign' });
      }

      existingUser.board = board;
  
      await existingUser.save();
  
      res.status(200).json({ message: 'Board assigned successfully', user: existingUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

}

module.exports = new TeacherController();
