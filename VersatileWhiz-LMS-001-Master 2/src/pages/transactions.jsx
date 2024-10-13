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

function Transactions() {
  const [sidebarToggle] = useOutletContext();

  const [loading] = useState(false);

   // Active Data
   const dataHeader = [
    {
      key: "name",
      label: "Trx Hash",
    },
    {
      key: "email",
      label: "Timestamp",
    },
    {
      key: "username",
      label: "Block",
    },
    {
      key: "country",
      label: "From",
    },
    {
      key: "address",
      label: "To",
    },
    {
      key: "Status",
      label: "Value",
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
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    }, {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    }, {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    }, {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    }, {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    }, {
      id: 1,
      name: "0x9b9e...4e2ace",
      email: "11/23/2023, 4:29:48 PM",
      username: "1249737",
      country: "0x0767...77a27c",
      address: "0xe579...da17a3",
      roles: [{ name: "0.12121" }],
    },
    
  ];
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
        <h2 className="lg:text-2xl text-1xl font-semibold text-gray-600 mb-3" >Transactions.</h2>
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            {/* <UserTable
              loading={loading}
              dataHeader={dataHeader}
              data={data}
              handleDelete={handleDelete}
            /> */}
                      {/* Active User Table  */}
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
                      {row.roles?.map((role, index) => (
                        <span
                          key={index}
                          className="rounded-full py-1 px-3 text-xs font-semibold"
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

export default Transactions;
