import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/auth/Login";
import Blank from "./pages/Blank";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import RegisterIndex from "./pages/auth/Register";
import Transactions from "./pages/transactions";
import Message from "./pages/message";
// Students
import StudentExam from "./pages/StudentExam";
import StudentsResult from "./pages/StudentResults";
import ExamQuiz from "./pages/ExamQuiz";
// Teachers
import TeacherStdLs from "./pages/TeachersStd_ls";
import CreateExam from "./pages/TeachersCreate_exam";
import CheckExam from "./pages/CheckExam";
// Admin
import ManageTeachers from "./pages/ManageTeachers";
import StdList from "./pages/StudentList";
import TecList from "./pages/TeachersList";

import ManageExams from "./pages/ManageExam";
import { AuthProvider } from "./AuthContext";
import RegisterStudentIndex from "./pages/auth/RegisterStudent";

function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/transactions" element={<Transactions />}></Route>
        <Route path="/blank" element={<Blank />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/message" element={<Message />}></Route>
        {/* Student */}
        <Route path="/std_exam" element={<StudentExam />}></Route>
        <Route path="/std_result" element={<StudentsResult />}></Route>
        <Route path="/exam_quiz" element={<ExamQuiz />}></Route>
        {/* Teacher */}
        <Route path="/tch_std-ls" element={<TeacherStdLs />}></Route>
        <Route path="/tch_create-ex" element={<CreateExam />}></Route>
        <Route path="/tch_ex-ch" element={<CheckExam />}></Route>
        <Route path="/tch_ex-ls" element={<ManageExams />}></Route>
        {/* Admin */}
        <Route path="/admin-tec" element={<ManageTeachers />}></Route>
        <Route path="/admin-std" element={<StdList />}></Route>
        <Route path="/admin-teschers-list" element={<TecList />}></Route>
      </Route>
      <Route path="/auth" element={<GuestLayout />}>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<RegisterIndex />}></Route>
        <Route path="/auth/registerstudent" element={<RegisterStudentIndex />}></Route>
      </Route>
    </Routes>
    </AuthProvider>
  );
}

export default App;
