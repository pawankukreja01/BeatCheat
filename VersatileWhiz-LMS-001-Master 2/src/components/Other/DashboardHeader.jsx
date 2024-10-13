import {
  faBars,
  faBell,
  faCog,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useEffect , useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import SidebarSearch from "../Sidebar/SidebarSearch";
import { useAuth } from "../../AuthContext";
function DashboardHeader({ avatar, toggle }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user){
     navigate('/auth/login')
    }
   })
  return (
    <div className="px-3 sm:px-8 pt-9 pb-4 flex flex-wrap w-full justify-between items-center">
      <div className="flex flex-row gap-3">
        {/* <p className="flex-shrink-0 rounded-full block md:hidden border border-emerald-400 p-[3px] shadow-lg">
          <img
            className="rounded-full md:h-14 md:w-14 h-10 w-10 border cursor-pointer"
            src={avatar}
            alt="Avatar"
          />
        </p> */}
        <div id="nameSection">
          <p className="text-sm font-semibold text-gray-500">Welcome {user?.type},</p>
          <h1 className="font-semibold lg:text-1xl text-2xl lg:mt-0 mt-2  text-gray-700">
            {/* {user?.name} */}
            Dashboard
          </h1>
        </div>
      </div>
      <div className="avaterSection flex items-center gap-2 sm:gap-6 text-slate-400">
        <div className="hidden md:flex flex-row gap-4 text-xl">
        <SidebarSearch />
          {/* <Link to="/">
            <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
          </Link> */}
          <Link className="mt-6" to="/">
            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          </Link>
          {/* <Link to="/">
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
          </Link> */}
        </div>
        {/* <p className="rounded-full hidden md:block border border-emerald-400 p-[3px] shadow-lg">
          <img
            className="rounded-full md:h-14 md:w-14 h-10 w-10 border cursor-pointer"
            src={avatar}
            alt="Avatar"
          />
        </p> */}

        <p className="cursor-pointer md:hidden text-2xl" onClick={toggle}>
          <FontAwesomeIcon icon={faBars} />
        </p>
      </div>
    </div>
  );
}

export default DashboardHeader;
