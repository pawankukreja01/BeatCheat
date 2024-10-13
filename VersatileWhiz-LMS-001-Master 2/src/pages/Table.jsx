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

function Table() {
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
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <h2 className="lg:text-2xl text-1xl font-semibold text-gray-600 mb-3" >Manage User.</h2>
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

export default Table;
