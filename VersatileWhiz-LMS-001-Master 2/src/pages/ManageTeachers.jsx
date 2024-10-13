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

function ManageTeachers() {
  const [sidebarToggle] = useOutletContext();

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
      label: "Subject",
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
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <h2 className="lg:text-2xl text-1xl font-semibold text-gray-600 mb-3" >Manage Teachers.</h2>
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
                      <p className="font-normal text-sm text-gray-500">{row.address}</p>
                    </TableCell>
                    <TableCell dataLabel="Status" showLabel={true}>
                      <span className="float space-x-1">
                      <span
                            className="rounded-full py-1 px-3 text-xs font-semibold bg-emerald-200 text-green-900 cursor-pointer"
                          >
                            Active
                          </span>
                          <span
                            className="rounded-full py-1 px-3 text-xs font-semibold bg-orange-400 text-red-900 cursor-pointer"
                          >
                            Block
                          </span>
                          <span
                            className="rounded-full py-1 px-3 text-xs font-semibold bg-red-400 text-black-900 cursor-pointer"
                          >
                            Delete 
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
      </main>
    </>
  );
}

export default ManageTeachers;
