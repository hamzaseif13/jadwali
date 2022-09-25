import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className=" px-2 sm:px-4 py-2.5 bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <div className="flex">
            
            <span className="self-center   text-4xl  whitespace-nowrap text-white">
              Jadwali
            </span>
          </div>
        </Link>
        <div className="flex md:order-2 md:hidden">
          <button
            data-collapse-toggle="navbar-sticky"
            onClick={handleOpen}
            type="button"
            className="inline-flex items-center p-2 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            open ? "" : "hidden"
          }  w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link to="/feedback">
              <li className="text-gray-400 hover:text-gray-300">Contact us</li>
            </Link>
            <Link to="/how-to-use">
              <li className="text-gray-400 hover:text-gray-300">How to use</li>
            </Link>
            <Link to="/generate">
              <li className="text-white  hover:text-green-500">Generate</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
