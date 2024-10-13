const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
    next();
});


// controllers
const Teacher = require('./controllers/teacher');
const Student = require('./controllers/student');
const Admin = require('./controllers/admin');
const Quiz = require('./controllers/quiz');
const Std = require('./controllers/std');
const Tec = require('./controllers/tec');


//Admin Routes
app.post('/api/admin_register', Admin.register);
app.post('/api/admin_login', Admin.login);
app.post('/api/admin_get_data', Admin.getData);
app.post('/api/teacher_assign-subjects', Teacher.AssignSubject);
app.post('/api/teacher_assign-board', Teacher.AssignBoard);
app.post('/api/teacher_register', Teacher.register);
app.post('/api/teacher_update', Teacher.Update);
app.post('/api/teacher_delete', Teacher.Delete);
app.post('/api/admin_get_unvarified_exam', Admin.unvarifiedQuiz);
app.post('/api/admin_get_varified_exam', Admin.varifiedQuiz);
app.post('/api/admin_results_exam', Std.admin_results_list);
app.post('/api/admin_live_exam', Quiz.liveQuiz);
app.post('/api/admin_delete_quiz', Admin.dalateQuiz);

// Students Routes
app.post('/api/student_register', Student.register);
app.post('/api/student_update', Student.Update);
app.post('/api/student_delete', Student.Delete);
app.post('/api/get_exam_quiz', Quiz.getQuiz);

// Teacher Routes
app.post('/api/teacher_login', Teacher.login);
app.post('/api/teacher_create_exam', Quiz.create);
app.post('/api/teacher_asign_exam_marks', Quiz.QuizMarks);
app.post('/api/teacher_uncheck_exam', Tec.uncheck_exam);
app.post('/api/teacher_active_exam', Tec.active_exam);
app.post('/api/total_students', Tec.total_student);
app.post('/api/uncheck_exam_subject_wise', Tec.uncheck_exam_subject_wise);
app.post('/api/active_exam_subject_wise', Tec.active_exam_subject_wise);

// Student Routes
app.post('/api/student_login', Student.login);
app.post('/api/std_subjects', Std.subjects);
app.post('/api/std_exam', Std.exam);
app.post('/api/std_attempt_exam', Std.attempt_exam);
app.post('/api/std_results_exam', Std.std_results);



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
