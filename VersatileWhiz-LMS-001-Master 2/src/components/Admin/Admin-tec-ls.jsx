import React, { useState } from "react";

import { useOutletContext } from "react-router-dom";
import './style.css'
// Table Componant
import { Link } from "react-router-dom";
import Datatables from "../Datatables/Table";
import TableCell from "../Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";

function TeachersList() {
  const [sidebarToggle] = useOutletContext();

  const [loading] = useState(false);

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
      label: "Subject",
    },
    {
      key: "Status",
      label: "",
    },
    // {
    //   key: "action",
    //   label: "Aksi",
    // },
  ];

  const handleDelete = () => { };
  const data = [   {
    id: 1,
    name: "Rizwan Ahmed",
    email: "rizwan9090@gmail.com",
    username: "03*********",
    country: "United State",
    address: "Computer",
    // roles: [{ name: "Admin" }, { name: "Active" }],
    roles: [{ name: "Active" }],
  },]
  return (
    <>
    <div className="mainCard">
        <h2 className="lg:text-2xl text-1xl font-semibold text-gray-600 mb-3" >Teachers List.</h2>
        <div className="bg-white mt-6 mx-2 rounded-xl">
            <Datatables loading={loading} dataHeader={dataHeader}>
              {data?.map((row, index) => (
                <tr
                  key={index}
                  className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
                >
                  <TableCell dataLabel="Trx Hash" showLabel={true}>
                    <span className="font-medium text-sm text-gray-900">
                      {row.name}
                    </span>
                  </TableCell>
                  <TableCell dataLabel="Timestamp" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500">{row.email}</p>
                  </TableCell>
                  <TableCell dataLabel="Block" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500">{row.username}</p>
                  </TableCell>
                  <TableCell dataLabel="From" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500">{row.country}</p>
                  </TableCell>
                  <TableCell dataLabel="To" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500">{row.address}</p>
                  </TableCell>
                  <TableCell dataLabel="Value" showLabel={true}>
                    <span className="space-x-1">
                      {/* {row.roles?.map((role, index) => (
                        <span
                          key={index}
                          className="rounded-full py-1 px-3 text-xs font-semibold"
                        >
                          {role.name}
                        </span>
                      ))} */}



                    </span>
                  </TableCell>
                </tr>
              ))}
            </Datatables>
          </div>
        </div>
    </>
  );
}

export default TeachersList;
