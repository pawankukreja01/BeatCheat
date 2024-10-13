import React, { useState } from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import UserTable from "./UserTable";
// Table Componant
import { Link } from "react-router-dom";
import Datatables from "../components/Datatables/Table";
import TableCell from "../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";
import ManageExam from "../components/Teacher/ManageExam";
import { useAuth } from "../AuthContext";
function ManageExams() {
  const {user} = useAuth();
  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
        <h2 className="lg:text-2xl text-1xl font-semibold text-gray-600 mb-3" >
          {user?.type == 'Teacher' ? 'Check Exam.' :
          'Manage Exam.' }
        </h2>
          {/* <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md"> */}
           < ManageExam />
          {/* </div> */}
        </div>
      </main>
    </>
  );
}

export default ManageExams;
