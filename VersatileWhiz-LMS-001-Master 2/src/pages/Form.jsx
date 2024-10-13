import React from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPhone } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
        <h2 className="lg:text-2xl text-1xl font-semibold text-gray-600 mb-3" >Settings.</h2>
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <form>
              {/* Form Default */}
              {/* <div>
                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                  Default Input
                </label>
                <input
                  id="defaultInput"
                  type="text"
                  name="defaultInput"
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Default Input"
                />
              </div> */}

              {/* Form Large */}
              <div className="mt-6 gap-5">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Stake Amount :
                </label>
               <div className="flex justify-between">
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="lg:w-[80%] w-full lg:text-lg text-[14px] placeholder-gray-500 px-4 rounded-lg border border-gray-200 md:py-2 py-3 focus:outline-none focus:border-[#0692C3]-400 mt-1"
                  placeholder="0.000001"
                  />
                <button className="bg-[#0692C3] text-gray-100 pt-0 pb-0 pr-5 pl-5 lg:text-sm text-[14px] rounded-lg shadow-lg text-sm">
                &nbsp; &nbsp; Save &nbsp; &nbsp;
                </button>
                  </div>
              </div>
              <div className="mt-6 gap-5">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Gas Amount :
                </label>
               <div className="flex justify-between">
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="lg:w-[80%] w-full lg:text-lg text-[14px] placeholder-gray-500 px-4 rounded-lg border border-gray-200 md:py-2 py-3 focus:outline-none focus:border-[#0692C3]-400 mt-1"
                  placeholder="2100"
                  />
                <button className="bg-[#0692C3] text-gray-100 pt-0 pb-0 pr-5 pl-5 lg:text-sm text-[14px] rounded-lg shadow-lg text-sm">
                &nbsp; &nbsp; Save &nbsp; &nbsp;
                </button>
                  </div>
              </div>
              <div className="mt-6 gap-5">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                Admin Wallet EVM :
                </label>
               <div className="flex justify-between">
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="lg:w-[80%] w-full lg:text-lg text-[14px] placeholder-gray-500 px-4 rounded-lg border border-gray-200 md:py-2 py-3 focus:outline-none focus:border-[#0692C3]-400 mt-1"
                  placeholder="0x0767b8C4491dDb74711365c0f858b2925377A27c"
                  />
                <button className="bg-[#0692C3] text-gray-100 pt-0 pb-0 pr-5 pl-5 lg:text-sm text-[14px] rounded-lg shadow-lg text-sm">
                  &nbsp; &nbsp; Save &nbsp; &nbsp;
                </button>
                  </div>
              </div>
              <div className="mt-6 gap-5">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                 Admin Wallet Bitcoin:
                </label>
               <div className="flex justify-between">
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="lg:w-[80%] w-full lg:text-lg text-[14px] placeholder-gray-500 px-4 rounded-lg border border-gray-200 md:py-2 py-3 focus:outline-none focus:border-[#0692C3]-400 mt-1"
                  placeholder="1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
                  />
                <button className="bg-[#0692C3] text-gray-100 pt-0 pb-0 pr-5 pl-5 lg:text-sm text-[14px] rounded-lg shadow-lg text-sm">
                  &nbsp; &nbsp; Save &nbsp; &nbsp;
                </button>
                  </div>
              </div>
              <div className="mt-6 gap-5">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                Admin Wallet Monero:
                </label>
               <div className="flex justify-between">
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="lg:w-[80%] w-full lg:text-lg text-[14px] placeholder-gray-500 px-4 rounded-lg border border-gray-200 md:py-2 py-3 focus:outline-none focus:border-[#0692C3]-400 mt-1"
                  placeholder="888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H"
                  />
                <button className="bg-[#0692C3] text-gray-100 pt-0 pb-0 pr-5 pl-5 lg:text-sm text-[14px] rounded-lg shadow-lg text-sm">
                  &nbsp; &nbsp; Save &nbsp; &nbsp;
                </button>
                  </div>
              </div>
              <div className="mt-6 gap-5">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                Admin Wallet Solana:
                </label>
               <div className="flex justify-between">
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  // onChange={(e) => setEmail(e.target.value)}
                  className="lg:w-[80%] w-full lg:text-lg text-[14px] placeholder-gray-500 px-4 rounded-lg border border-gray-200 md:py-2 py-3 focus:outline-none focus:border-[#0692C3]-400 mt-1"
                  placeholder="DpudMof2ci8GSuu2kZwLdCcovXQcuVSpp3ouvMukBjrS"
                  />
                <button className="bg-[#0692C3] text-gray-100 pt-0 pb-0 pr-5 pl-5 lg:text-sm text-[14px] rounded-lg shadow-lg text-sm">
                &nbsp; &nbsp; Save &nbsp; &nbsp;
                </button>
                  </div>
              </div>

              {/* With Icon */}
              {/* <div className="mt-6 relative">
                <label
                  htmlFor="inputWithIcon"
                  className="text-sm text-gray-600"
                >
                  Input with Icon
                </label>

                <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <input
                  id="inputWithIcon"
                  type="text"
                  name="inputWithIcon"
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Input With Icon"
                />
              </div> */}

              <div className="mt-6 flex flex-row gap-4">
                {/* <button className="bg-[#0692C3] text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Primary Button
                </button> */}

                {/* <button className="text-[#0692C3] border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Secondary Button
                </button>

                <button className="text-[#0692C3] border border-emerald-300 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Outlined Button
                </button>

                <button className="bg-[#0692C3] border-[#0692C3] text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center">
                  <div>
                    <FontAwesomeIcon icon={faFloppyDisk} />
                  </div>
                  <span>Primary Icon Button</span>
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Form;
