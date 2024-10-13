import React, { useState } from "react";
import StatisticWidget from "../components/Widget/Statistic.jsx";
import AchievementWidget from "../components/Widget/Achievment.jsx";
import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import ScrolledCard from "../components/Widget/ScrolledCard.jsx";
import { useOutletContext } from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NoteIcon from '@mui/icons-material/Note';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
// Table Componant
import { Link } from "react-router-dom";
import Datatables from "../components/Datatables/Table";
import TableCell from "../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";
//students
import Results from "../components/Student/Results.jsx";
import Exam from "../components/Student/Exam.jsx";

//teacher
import StudentList from "../components/Teacher/Std_ls.jsx";

//Admin
import TeachersList from "../components/Admin/Admin-tec-ls.jsx";
import StudentsList from "../components/Admin/Admin-std-ls.jsx";

import { useAuth } from "../AuthContext.js";


function Dashboard() {
  const {user} = useAuth();
  let arr = [{ lable: "Total Teachers", num: "25" , icon: CastForEducationIcon }, { lable: "Total Students", num: "150" ,icon: GroupsIcon}, { lable: "Listed Exam", num: "6" ,icon: NoteIcon}, { lable: "New Join", num: "15" , icon: GroupAddIcon }]
  
  let teachers = [{ lable: "Active Subject", num: "Computer" , icon: SchoolIcon }]
  let students = [{ lable: "Total Students", num: "50" ,icon: GroupsIcon } , {lable: "Active Exam", num: "2" ,icon: NoteIcon} ,  {lable: "Uncheck Exam", num: "1" ,icon: HistoryEduIcon}]

  const [loading] = useState(false);

  // Active Data
  const dataHeader = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "username",
      label: "Phone",
    },
    {
      key: "country",
      label: "Country",
    },
    {
      key: "address",
      label: "Address",
    },
    {
      key: "Status",
      label: "Role",
    },
    // {
    //   key: "action",
    //   label: "Aksi",
    // },
  ];

  const handleDelete = () => { };
  const data = [
    {
      id: 1,
      name: "Indah Sari Devi",
      email: "mamahdedeh34@gmail.com",
      username: "0323315465",
      country: "United State",
      address: "St.22 Florida",
      // roles: [{ name: "Admin" }, { name: "Active" }],
      roles: [{ name: "Active" }],
    },
    {
      id: 2,
      name: "Mahindra Putra",
      email: "maheend@gmail.com",
      username: "0323315465",
      country: "Italy",
      address: "Rt.52 Rome",
      roles: [{ name: "Active" }],
    },
    {
      id: 3,
      name: "Ujang Ilman",
      email: "ujangil03@gmail.com",
      username: "0323315465",
      country: "Canada",
      address: "St.22 Florida",
      roles: [{ name: "Active" }],
    },

    {
      id: 4,
      name: "Hadi Pradhana",
      email: "hapra09@gmail.com",
      username: "0323315465",
      country: "Russia",
      address: "St.22 SantPeter Bug",
      roles: [{ name: "Active" }],
    },
    {
      id: 1,
      name: "Indah Sari Devi",
      email: "mamahdedeh34@gmail.com",
      username: "0323315465",
      country: "Poland",
      address: "Rt.52 Rome",
      roles: [{ name: "Admin" }],
    },
    {
      id: 2,
      name: "Mahindra Putra",
      email: "maheend@gmail.com",
      username: "0323315465",
      country: "Canada",
      address: "St.22 SantPeter Bug",
      roles: [{ name: "Active" }],
    },
    {
      id: 3,
      name: "Ujang Ilman",
      email: "ujangil03@gmail.com",
      username: "0323315465",
      country: "Canada",
      address: "Rt.52 Rome",
      roles: [{ name: "Active" }],
    },

    {
      id: 4,
      name: "Hadi Pradhana",
      email: "hapra09@gmail.com",
      username: "0323315465",
      country: "Poland",
      address: "Rt.52 Rome",
      roles: [{ name: "Active" }],
    },
    {
      id: 4,
      name: "Hadi Pradhana",
      email: "hapra09@gmail.com",
      username: "0323315465",
      country: "Poland",
      address: "Rt.52 Rome",
      roles: [{ name: "Active" }],
    },
  ];

  // Recent Data
  const dataHeaderRecent = [
    {
      key: "name",
      label: "Transaction Id",
    },
    {
      key: "email",
      label: "Date",
    },
    {
      key: "username",
      label: "Name",
    },
    {
      key: "amount",
      label: "Amount",
    },
    {
      key: "Amount",
      label: "Status",
    },
    // {
    //   key: "action",
    //   label: "Aksi",
    // },
  ];

  const dataRecent = [
    {
      id: 1,
      name: "#TRX-5454545454",
      email: "Dec 18, 2023",
      amount: "+$2,560,00",
      username: "Olivia Ron",
      country: "United State",
      address: "St.22 Florida",
      // roles: [{ name: "Admin" }, { name: "Active" }],
      roles: [{ name: "Active" }],
    },
    {
      id: 2,
      name: "#TRX-5454545454",
      email: "Dec 18, 2023",
      amount: "+$2,560,00",
      username: "Olivia Ron",
      country: "Italy",
      address: "Rt.52 Rome",
      roles: [{ name: "Active" }],
    },
    {
      id: 3,
      name: "#TRX-5454545454",
      email: "Dec 18, 2023",
      amount: "+$2,560,00",
      username: "Olivia Ron",
      country: "Canada",
      address: "St.22 Florida",
      roles: [{ name: "Active" }],
    },

    {
      id: 4,
      name: "#TRX-5454545454",
      email: "Dec 18, 2023",
      amount: "+$2,560,00",
      username: "Olivia Ron",
      country: "Russia",
      address: "St.22 SantPeter Bug",
      roles: [{ name: "Active" }],
    },
    {
      id: 1,
      name: "#TRX-5454545454",
      email: "Dec 18, 2023",
      amount: "+$2,560,00",
      username: "Olivia Ron",
      country: "Poland",
      address: "Rt.52 Rome",
      roles: [{ name: "Admin" }],
    },
    {
      id: 2,
      name: "#TRX-5454545454",
      email: "Dec 18, 2023",
      amount: "+$2,560,00",
      username: "Olivia Ron",
      country: "Canada",
      address: "St.22 SantPeter Bug",
      roles: [{ name: "Active" }],
    },
    {
      id: 3,
      name: "#TRX-5454545454",
      email: "Dec 18, 2023",
      amount: "+$2,560,00",
      username: "Olivia Ron",
      country: "Canada",
      address: "Rt.52 Rome",
      roles: [{ name: "Active" }],
    },

    {
      id: 4,
      name: "#TRX-5454545454",
      email: "Dec 18, 2023",
      amount: "+$2,560,00",
      username: "Olivia Ron",
      country: "Poland",
      address: "Rt.52 Rome",
      roles: [{ name: "Active" }],
    },
    {
      id: 4,
      name: "#TRX-5454545454",
      email: "Dec 18, 2023",
      amount: "+$2,560,00",
      username: "Olivia Ron",
      country: "Poland",
      address: "Rt.52 Rome",
      roles: [{ name: "Active" }],
    },
  ];



  const avatar =
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  const dataOS = [
    {
      title: "Kredit Konsumer",
      date: "12/Mei/2023",
      os: "23,938",
      gs: "20,900",
      percentage: 200.01,
      color: "cardInfo",
    },
    {
      title: "Kredit Ritel",
      date: "12/Mei/2023",
      os: "3,938",
      gs: "2,900",
      percentage: 190.01,
      color: "cardWarning",
    },
    {
      title: "Kredit KPR & KKB",
      date: "12/Mei/2023",
      os: "190,938",
      gs: "192,900",
      percentage: 99.01,
      color: "cardDanger",
    },
    {
      title: "Kredit UMKM",
      date: "12/Mei/2023",
      os: "2,938",
      gs: "2,900",
      percentage: 100.01,
      color: "cardSuccess",
    },
    {
      title: "Kredit Komersial",
      date: "12/Mei/2023",
      os: "23,938",
      gs: "20,900",
      percentage: 200.01,
      color: "cardLime",
    },
    {
      title: "Kredit BPR & LKM",
      date: "12/Mei/2023",
      os: "3,938",
      gs: "10,900",
      percentage: 210.01,
      color: "cardDanger",
    },
  ];

  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <main className="h-full">
        {/* Welcome Header */}
        <DashboardHeader
          toggle={sidebarToggle}
          avatar={avatar}
          user={{ name: "Hoki Teguh Oktian" }}
        />

        {/* Laba */}
        {/* <div className="px-2 mx-auto mainCard">
          <div className="w-full overflow-hidden text-slate-700 md:grid gap-4 grid md:grid-cols-6">
            <StatisticWidget className="col-span-4 col-start-1 bg-white" />
            <AchievementWidget />
          </div>
        </div> */}

        {/* OS Kredit */}
        <div className="px-2 mx-auto mainCard">
          {/* <h1 className="text-slate-500 pb-3 text-base md:text-lg">
            Pencapaian OS Kredit
          </h1> */}

          {/* <div className="flex flex-row gap-x-4 overflow-hidden overflow-x-auto justify-between no-scrollbar">
            {dataOS?.map((data, index) => (
              <ScrolledCard key={index} data={data} />
            ))}
          </div> */}


          {user?.type == 'Admin'  ?
          <div className="flex responsive" >
            {
              arr.map((val, ind) => {
                return (
                  <div className="w-[100%] lg:w-[25%] p-2">
                    <div className="rounded-xl bg-white p-6 shadow-2xl">
                      <div className="flex gap-3 items-center mb-3">
                        <div className="bg-[#ADD8E6BF] p-1 rounded-md flex justify-center items-start">
                          <val.icon style={{ color: "#329ec2bf" }} />
                        </div>
                        <h2 className="font-bold ">{val.lable}</h2>
                      </div>
                      <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">{val.num}</h2>
                        <div>
                          <ChevronRightIcon style={{ color: "#329ec2bf" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          : user?.type == 'Student' ?
          <div className="flex responsive" >
          {
            teachers.map((val, ind) => {
              return (
                <div className="w-[100%] lg:w-[25%] p-2">
                  <div className="rounded-xl bg-white p-6 shadow-2xl">
                    <div className="flex gap-3 items-center mb-3">
                      <div className="bg-[#ADD8E6BF] p-1 rounded-md flex justify-center items-start">
                        <val.icon style={{ color: "#329ec2bf" }} />
                      </div>
                      <h2 className="font-bold ">{val.lable}</h2>
                    </div>
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold">{val.num}</h2>
                      <div>
                        <ChevronRightIcon style={{ color: "#329ec2bf" }} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
          : user?.type == 'Teacher' ? 
          <div className="flex responsive" >
          {
            students.map((val, ind) => {
              return (
                <div className="w-[100%] lg:w-[25%] p-2">
                  <div className="rounded-xl bg-white p-6 shadow-2xl">
                    <div className="flex gap-3 items-center mb-3">
                      <div className="bg-[#ADD8E6BF] p-1 rounded-md flex justify-center items-start">
                        <val.icon style={{ color: "#329ec2bf" }} />
                      </div>
                      <h2 className="font-bold ">{val.lable}</h2>
                    </div>
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold">{val.num}</h2>
                      <div>
                        <ChevronRightIcon style={{ color: "#329ec2bf" }} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
          : ""}





          {/* Active User Table  */}
          
          {/* Recent User Table  */}
          { user?.type == 'Student'  ?
          <>
          <Exam />
          <Results />
          </>
          : user?.type == 'Teacher' ?
          <>
          <Exam />
          {/* <StudentList /> */}
          </>
          :
         <>
         <TeachersList />
         <StudentsList />
         {/* <div className="p-10 bg-white mt-6 mx-2 rounded-xl">
            <div className="flex justify-between items-center mb-4 mx-2" >
              <h1 className="text-2xl font-bold">Active User</h1>
              <button className="bg-[#329ec2bf] text-white rounded-xl px-4 py-1">View All</button>
            </div>
            <Datatables loading={loading} dataHeader={dataHeader}>
              {data?.map((row, index) => (
                <tr
                  key={index}
                  className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
                >
                  <TableCell dataLabel="Name" showLabel={true}>
                    <span className="font-medium text-sm text-gray-900">
                      {row.name}
                    </span>
                  </TableCell>
                  <TableCell dataLabel="Email" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500">{row.email}</p>
                  </TableCell>
                  <TableCell dataLabel="Phone" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500">{row.username}</p>
                  </TableCell>
                  <TableCell dataLabel="Country" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500">{row.country}</p>
                  </TableCell>
                  <TableCell dataLabel="Address" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500">{row.address}</p>
                  </TableCell>
                  <TableCell dataLabel="Status" showLabel={true}>
                    <span className=" space-x-1">
                      {row.roles?.map((role, index) => (
                        <span
                          key={index}
                          className="rounded-full py-1 px-3 text-xs font-semibold bg-emerald-200 text-green-900"
                        >
                          {role.name}
                        </span>
                      ))}
                    </span>
                  </TableCell>
                   <TableCell>
                    <Link
                      to={`/auth/master/user/${row.id}/edit`}
                      className={`text-sky-700 inline-flex py-2 px-2 rounded  text-sm`}
                    >
                      <FontAwesomeIcon icon={faPencil} />
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(row.id);
                      }}
                      to={`/auth/master/user/${row.id}/edit`}
                      className={`text-red-700 inline-flex py-2 px-2 rounded  text-sm`}
                    >
                      <FontAwesomeIcon icon={faRemove} />
                    </Link>
                  </TableCell> 
                </tr>
              ))}
            </Datatables>
          </div> */}
         {/* <div className="p-10 bg-white mt-6 mx-2 rounded-xl">
            <div className="flex justify-between items-center mb-4 mx-2" >
              <h1 className="text-2xl font-bold">Recent Activity</h1>
              <button className="bg-[#329ec2bf] text-white rounded-xl px-4 py-1">View All</button>
            </div>
            <Datatables loading={loading} dataHeader={dataHeaderRecent}>
              {dataRecent?.map((row, index) => (
                <tr
                  key={index}
                  className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
                >
                  <TableCell dataLabel="Id" showLabel={true}>
                    <span className="font-medium text-sm text-gray-900">
                      {row.name}
                    </span>
                  </TableCell>
                  <TableCell dataLabel="Date" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500">{row.email}</p>
                  </TableCell>
                  <TableCell dataLabel="Name" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500">{row.username}</p>
                  </TableCell>
                  <TableCell dataLabel="Amount" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500">{row.amount}</p>
                  </TableCell>
                  <TableCell dataLabel="Status" showLabel={true}>
                    <span className=" space-x-1">
                      {row.roles?.map((role, index) => (
                        <span
                          key={index}
                          className="rounded-full py-1 px-3 text-xs font-semibold bg-emerald-200 text-green-900"
                        >
                          {role.name}
                        </span>
                      ))}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Link
                      to={`/auth/master/user/${row.id}/edit`}
                      className={`text-sky-700 inline-flex py-2 px-2 rounded  text-sm`}
                    >
                      <FontAwesomeIcon icon={faPencil} />
                    </Link>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(row.id);
                      }}
                      to={`/auth/master/user/${row.id}/edit`}
                      className={`text-red-700 inline-flex py-2 px-2 rounded  text-sm`}
                    >
                      <FontAwesomeIcon icon={faRemove} />
                    </Link>
                  </TableCell> 
                </tr>
              ))}
            </Datatables>
          </div> */}
          <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div>
         </>
          }

         
        </div>
      </main>
    </>
  );
}

export default Dashboard;
