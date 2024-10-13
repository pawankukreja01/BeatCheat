import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
// Table Componant
import { Link } from "react-router-dom";
import Datatables from "../Datatables/Table";
import TableCell from "../Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";

function Exam() {
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
      label: "Submission",
    },
    {
      key: "Status",
      label: "Status",
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
      name: "Computer",
      email: "20",
      username: "2 Dec 2023",
      country: "5 Dec 2023",
      address: "Panding",
      // roles: [{ name: "Admin" }, { name: "Active" }],
      roles: "Active",
    },
    {
        id: 1,
        name: "Computer",
        email: "20",
        username: "1 Dec 2023",
        country: "2 Dec 2023",
        address: "Submitted",
        roles: "End" ,
      },
  ];
  return (
    <>
  <div className="mainCard">
          <h2 className="lg:text-2xl text-1xl font-semibold text-gray-600 mb-3" >Exams.</h2>
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            {/* <UserTable
              loading={loading}
              dataHeader={dataHeader}
              data={data}
              handleDelete={handleDelete}
            /> */}
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
                      <p className="font-normal text-sm text-gray-500">{row.address} {row.roles === 'Active' ? <Link to={'/exam_quiz'}><a style={{fontSize:'12px', color:'#0980A9', cursor:'pointer'}}>&nbsp; Access Exam</a></Link> : ""}</p>
                    </TableCell>
                    <TableCell dataLabel="Status" showLabel={true}>
                      <span className=" space-x-1">
                      <span
                        className={`rounded-full py-1 px-3 text-xs font-semibold ${
                          row.roles === 'Active' ? 'bg-emerald-200 text-green-900' : 
                          row.roles === 'End' ? 'bg-orange-200 text-red-900' : 
                          '' 
                        }`}
                      >
                        {row.roles}
                      </span>
                      </span>
                    </TableCell>
                    {/* <TableCell>
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
                  </TableCell> */}
                  </tr>
                ))}
              </Datatables>
            </div>
          </div>
        </div>
    </>
  );
}

export default Exam;
