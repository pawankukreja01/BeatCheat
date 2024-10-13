import { faLeaf, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import initMenus from "../../data/menus.js";
import stuMenus from "../../data/studentmenus.js";
import teaMenus from "../../data/teachermenus.js";
import "./sidebar.css";
import SidebarLogo from "./SidebarLogo.jsx";
import SidebarSearch from "./SidebarSearch.jsx";
import MenuList from "./MenuList.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext.js";
function Sidebar({ ...props }) {
  const { logout , user } = useAuth()
  const navigate = useNavigate();
  const menu = user?.type == 'Student' ? stuMenus : 
  user?.type == 'Teacher' ? teaMenus :
  user?.type == 'Admin' ? initMenus : stuMenus

  const [menus, setMenus] = useState(menu);
  const [scButton, setScButton] = useState(false);
  const search = useRef("");

  const handleChange = (e) => {
    if (e.target.value) {
      setScButton(true);
      setMenus(
        menus.filter((el) => {
          return el.label.toLowerCase().includes(e.target.value.toLowerCase());
        })
      );
    } else {
      setScButton(false);
      setMenus(menu);
    }
  };

  const clearSearch = () => {
    search.current.value = "";
    setMenus(menu);
    setScButton(false);
  };

  const logingout = () => {
    logout()
    navigate("/auth/login");
  };

  return (
    <>
      <aside
        id="sidebar"
        className={`sidebarWrapper md:translate-x-0 -translate-x-full md:z-0 z-50 no-scrollbar ${props.className}`}
      >
        {/* Sidebar wrapper */}
        <div className="md:w-64 border-r-2 border-gray-100 h-full flex-col flex flex-shrink-0">
          {/* Logo */}

          <SidebarLogo toggle={props.toggle} icon={faLeaf} text="Laravel" />  

          {/* Search Menu */}
          {/* <SidebarSearch
            clearSearch={clearSearch}
            handleChange={handleChange}
            scButton={scButton}
            search={search}
          /> */}

          {/* Menu */}
          <MenuList menus={menus} toggle={props.toggle} />

          {/* Profile */}
          <div className="pt-2 border-t border-gray-300">
            <div className="py-2 px-4">
              {/* Logout Button */}
              <button
                className="py-2 px-4 border  bg-white w-full rounded-full text-red-700 hover:shadow-xl  justify-end text-sm"
                onClick={() => logingout()}
              >
                <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon> Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      {props.className === "mobile" && (
        <div
          id="overlaySidebar"
          onClick={props.toggle}
          className="hidden absolute w-full h-screen bg-black z-10 inset-0 opacity-60"
        >
          <div></div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
