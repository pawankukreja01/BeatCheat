import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faUser , faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext";
import logo from '../../../image/logo.png'
import './style.css'
function RegisterStudentIndex() {
  const {user} = useAuth();
   
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginType, setloginType] = useState("");
  const handleSubmit = () => {
    setError(false);
    console.log(email);
    console.log(name);
    console.log(password);
    console.log(confirmPassword);
    setLoading(true);
    navigate("/");
  };
  const registerImage =
    "https://edp.raincode.my.id/static/media/login.cc0578413db10119a7ff.png";

  useEffect(()=>{
    if(user?.type !== 'Admin'){
      navigate('/auth/login')
    }
  })

  useEffect(()=>{
  },[loginType])
  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex w-full flex-col md:flex-row">
          {/* Image */}
          <div className="md:bg-[#0692C3] md:min-h-screen flex flex-wrap md:w-1/2">
            <div className="items-center text-center flex flex-col relative justify-center mx-auto">
            <img style={{filter:'brightness(0.5)'}} src={logo} className="md:w-50 w-40" alt=".." />
              <img
                src={registerImage}
                alt="Logo"
                className="md:w-72 w-48 mx-auto"
              />
              <div className="md:block hidden text-slate-100">
                <h1 className="font-semibold text-2xl pb-2">
                  Register Student
                </h1>
                <span className="text-sm">
                Online Board Examination System
                </span>
              </div>
            </div>
          </div>
          {/* Register Section */}
          <div className="flex flex-col md:flex-1 items-center justify-center">
            <div className="loginWrapper flex flex-col w-full lg:px-36 md:px-8 px-8 md:py-8">
              {/* Login Header Text */}
              <div className="hidden md:block font-medium self-center text-xl sm:text-3xl text-gray-800">
              Register Student
              </div>

              {/* Sparator */}
              <div className="hidden md:block relative mt-10 h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                  <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                  Online Board Examination System
                  </span>
                </div>
              </div>

              <div className="md:hidden block my-4">
                <h1 className="text-2xl font-semibold">Register</h1>
              </div>

              {/* Register Form */}
              <div className="md:mt-10 mt-4">
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  {loginType == "Excel" ? 
                  <>
                  <label htmlFor="file" className="custom-file-upload">
                  <div className="icon">
                      <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                          fill=""
                        />{" "}
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <span>Click to upload Excel file</span>
                  </div>
                  <input 
                    id="file" 
                    type="file" 
                    accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                  />
                </label>
    
                  </>
                  :
                  <>
                  <div className="flex flex-col mb-3">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>

                      <input
                        id="email"
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400"
                        placeholder="E-Mail Address"
                      />
                    </div>
                    {error?.email && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {error.email[0]}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col mb-3">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <FontAwesomeIcon icon={faUser} />
                      </div>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400"
                        placeholder="Name"
                      />
                    </div>
                    {error?.name && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {error.email[0]}
                      </span>
                    )}
                  </div>
              
                  
                  <div className="flex flex-col mb-3">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <FontAwesomeIcon icon={faLock} />
                      </div>

                      <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400"
                        placeholder="Password"
                      />
                    </div>
                    {error?.password && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {error.password[0]}
                      </span>
                    )}
                  </div>

              
                  <div className="flex flex-col mb-6">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <FontAwesomeIcon icon={faLock} />
                      </div>

                      <input
                        id="confirm_password"
                        type="password"
                        name="confirm_password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400"
                        placeholder="Confirm Password"
                      />
                    </div>
                    {error?.confirm_password && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {error.confirm_password[0]}
                      </span>
                    )}
                  </div>
                  </>
                  }
                  {/* Forgot Password Link */}
                  <div className="flex items-center mb-6 -mt-2 md:-mt-4">
                    {/* <div className="flex ml-auto">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="inline-flex font-semibold text-xs sm:text-sm text-[#0692C3] hover:text-emerald-700"
                      >
                        password?
                      </Link>
                    </div> */}
                  </div>
                  <div className="w-full">
                  <div className="radio-input">
                    <label onClick={() => setloginType('Indevisual')}>
                      <input
                        defaultValue="value-1"
                        name="value-radio"
                        id="value-1"
                        type="radio"
                        defaultChecked=""
                      />
                      <span>Indevisual</span>
                    </label>
                    <label onClick={() => setloginType('Excel')}>
                      <input
                        defaultValue="value-2"
                        name="value-radio"
                        id="value-2"
                        type="radio"
                      />
                      <span>From Excel</span>
                    </label>
                   
                    <span className="selection" />
                  </div>
                  </div>
                  {/* Button Register */}
                  {loginType == "Excel" ?
                     <div className="flex w-full">
                     <button
                       disabled={loading}
                       type="submit"
                       className="flex items-center justify-center focus:outline-none text-white text-sm bg-[#0692C3] hover:bg-emerald-700 rounded-lg md:rounded md:py-2 py-3 w-full transition duration-150 ease-in"
                     >
                       <span className="mr-2 md:uppercase">
                         {loading ? "Processing...." : "Uplode"}
                       </span>
                     </button>
                   </div>
                  :
                  <div className="flex w-full">
                    <button
                      disabled={loading}
                      type="submit"
                      className="flex items-center justify-center focus:outline-none text-white text-sm bg-[#0692C3] hover:bg-emerald-700 rounded-lg md:rounded md:py-2 py-3 w-full transition duration-150 ease-in"
                    >
                      <span className="mr-2 md:uppercase">
                        {loading ? "Processing...." : "Register"}
                      </span>
                    </button>
                  </div>
                  }
                </form>
              </div>

              {/* Sparator */}
              <div className="relative mt-6 h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                  <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                    OR
                  </span>
                </div>
              </div>

              {/* Social Button */}
              <div className="flex justify-between w-full mt-6">
                <button
                  disabled={loading}
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-slate-500 text-sm bg-slate-200 rounded-lg md:rounded md:py-2 px-3 py-3 w-full transition duration-150 ease-in"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                  <span className="mr-2 flex-1">Login with Google</span>
                </button>
              </div>
              <div className="flex justify-between w-full mt-2">
                <button
                  disabled={loading}
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-slate-500 text-sm bg-slate-200 rounded-lg md:rounded md:py-2 px-3 py-3 w-full transition duration-150 ease-in"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  <span className="mr-2 flex-1">Login with Facebook</span>
                </button>
              </div>
              {/* End Social Button */}

              {/* Register Link */}
              <div className="flex justify-center items-center my-6 md:mb-0">
                <Link
                  to="/"
                  className="inline-flex items-center font-bold text-[#0692C3] hover:text-emerald-700 text-xs text-center"
                >
                  {/* <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                    </svg>
                  </span> */}
                  <span className="ml-2">Back On Dashboard</span>
                </Link>
              </div>
              {/* End Register Link */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterStudentIndex;
