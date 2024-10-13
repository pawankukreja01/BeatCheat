import React,{useState} from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import Datatables from "../components/Datatables/Table";
import TableCell from "../components/Datatables/TableCell";
import { Link } from "react-router-dom";
function Blank() {
  const [loading] = useState(false);
  const [sidebarToggle] = useOutletContext();

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
      key: "message",
      label: "Message",
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

  const data = [
    {
      id: 1,
      name: "Indah Sari Devi",
      email: "mamahdedeh34@gmail.com",
      message: " I need a bit more context to create a message that suits your needs. Could you provide details such as the purpose of the message and the intended recipient?",
      roles: [{ name: "View More" }],
    }
  ];
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
        <div className="p-10 bg-white mt-6 mx-2 rounded-xl">
            <div className="flex justify-between items-center mb-4 mx-2" >
              <h1 className="text-2xl font-bold text-gray-700">Massages</h1>
              {/* <button className="bg-[#329ec2bf] text-white rounded-xl px-4 py-1">View All</button> */}
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
      
                  <TableCell dataLabel="Country" showLabel={true}>
                    <p className="font-normal text-sm text-gray-500 ">{row.message.substring(0,48)+'........'}</p>
                  </TableCell>
             
                  <TableCell dataLabel="Status" showLabel={true}>
                    <span className=" space-x-1 ">
                    <Link to={'/message'}>
                        <span className="cursor-pointer rounded-full py-1 px-3 text-xs font-semibold bg-[#0692C3]-200 text-[#0692C3]-900" >
                        View More
                        </span>
                    </Link>
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
      </main>
    </>
  );
}

export default Blank;
