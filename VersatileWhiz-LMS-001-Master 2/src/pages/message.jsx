import React,{useState} from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import Datatables from "../components/Datatables/Table";
import TableCell from "../components/Datatables/TableCell";

function Message() {
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
      message: " I need a bit more context to create a message that suits your needs. Could you provide details such as the purpose of the message and the intended recipient?   I hope this message finds you well. I wanted to take a moment to share my thoughts on the latest app update. First off, I must say I'm thoroughly impressed with the sleek new interface and the improved navigation flow. The feature set has clearly been thought out with the user experience in mind, and the new custom notification settings are a game-changer for me. However, I did encounter a few hiccups while using the new budgeting tool - it seems to lag when switching between categories. Also, I noticed that the expense tracker doesn't always sync with my bank transactions in real-time, which can be a bit confusing.",
      roles: [{ name: "View More" }],
    }
  ];
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
        <div className="bg-gray-100 min-h-screen  p-4">
      <div className=" rounded-lg overflow-hidden shadow-lg my-2 bg-white">
        <div className="relative">
          <img className="w-full h-48 object-cover object-center" src="https://imgs.search.brave.com/sTnDKMz5al49bRhh_9UzRDezeDsdNZ2nYSBsNJW6Bao/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NC8xNS8wNC8wMi93/YXRlci0xMzMwMjUy/XzY0MC5qcGc" alt="profile background" />
          <div className="absolute left-0 bottom-0 w-full pr-3 pb-1 flex justify-end">
            <img className="h-24 w-24 rounded-full border-4 border-white -mt-12" src='https://imgs.search.brave.com/mR-qTglzpGl8uw83n_ErbMNuZKXcqnfulrRGN17nsn0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc' alt="profile" />
          </div>
        </div>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">Indah Sari Devi</h1>
          <p className="text-gray-600">mamahdedeh34@gmail.com</p>
          {/* Other user details */}
        </div>
        <div className="border-t-2 border-gray-100">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Messages</h2>
            <div className="space-y-2">
              {data.map((message, index) => (
                <div key={index} className="border rounded-lg p-3 shadow-sm">
                  {message.message}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </main>
    </>
  );
}

export default Message;
