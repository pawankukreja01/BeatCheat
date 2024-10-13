import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
// Table Componant
import { Link } from "react-router-dom";
import Datatables from "../Datatables/Table";
import TableCell from "../Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../AuthContext";
import CourseDropdown from "../Dropdown";


function ManageExam() {
  const {course, setCourse , user } = useAuth();
  const [sidebarToggle] = useOutletContext();

  const [loading] = useState(false);

  // Active Data
  const dataHeader = [
    {
      key: "name",
      label: "Subject",
    },
    {
      key: "email",
      label: "Marks",
    },
    {
      key: "username",
      label: "Start Date",
    },
    {
      key: "country",
      label: "End Date",
    },
    {
      key: "address",
      label: "Status",
    },
    {
      key: "Status",
      label: user?.type == 'Teacher' ? "Check":"Manage",
    },
    // {
    //   key: "action",
    //   label: "Aksi",
    // },
  ];

  const data = [
    {
      id: 1,
      name: "Computer",
      email: "20",
      username: "2 Dec 2023",
      country: "5 Dec 2023",
      address: "Active",
      // roles: [{ name: "Admin" }, { name: "Active" }],
      roles: "Active",
    },
    {
        id: 1,
        name: "Computer",
        email: "20",
        username: "1 Dec 2023",
        country: "2 Dec 2023",
        address: "Finished",
        roles: "End" ,
      },
  ];
  return (
    <>
    <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            {/* <UserTable
              loading={loading}
              dataHeader={dataHeader}
              data={data}
              handleDelete={handleDelete}
            /> */}
              {course == null ? 
          <>
           <CourseDropdown />
           <label className="block text-gray-700 text-sm font-bold mb-2 py-3 text-gray-500" htmlFor="question">
               Select Course List to Check.
            </label>
          </>
          : 
          <>
            <CourseDropdown />
            <div className="bg-white mt-6 mx-2 rounded-xl">
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
                      <p className="font-normal text-sm text-gray-500">{row.address} </p>
                    </TableCell>
                    <TableCell dataLabel="Status" showLabel={true}>
                      {user?.type == 'Teacher' ? 
                      <span className="Float space-x-1">
                      <Link to={'/tch_ex-ch'}>
                      <span
                        className={`rounded-full py-1 px-3 text-xs font-semibold bg-orange-200 text-red-900 cursor-pointer`}
                      >
                        Check
                      </span>
                      </Link>
                      </span>
                      : 
                      <span className="Float space-x-1">
                      <span
                        className={`rounded-full py-1 px-3 text-xs font-semibold bg-emerald-200 text-green-900 cursor-pointer`}
                      >
                        Active
                      </span>
                      <span
                        className={`rounded-full py-1 px-3 text-xs font-semibold bg-orange-200 text-red-900 cursor-pointer`}
                      >
                        Finished
                      </span>
                      <span
                        className={`rounded-full py-1 px-3 text-xs font-semibold bg-yellow-200 text-brown-900 cursor-pointer`}
                      >
                        Reactive
                      </span>
                      <span
                        className={`rounded-full py-1 px-3 text-xs font-semibold bg-red-400 text-black-300 cursor-pointer`}
                      >
                        Delete
                      </span>
                      </span>
                      }
                    </TableCell>
          
                  </tr>
                ))}
              </Datatables>
            </div>
          </>
          }
          </div>
    </>
  );
}

export default ManageExam;
