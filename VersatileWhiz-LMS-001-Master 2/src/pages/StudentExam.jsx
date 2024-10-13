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
import Exam from "../components/Student/Exam";
function StudentExam() {
  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <Exam />
      </main>
    </>
  );
}

export default StudentExam;
