import React from "react";
import { Link } from "react-router-dom";
import { Sch } from "@heroicons/react/solid";
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const toggleHidden = () => {
    setOpen(!open);
  };

  return (
    <nav
      className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          sm:px-10 lg:px-20
          text-lg text-white bg-gray-900 border-b border-gray-600 
        ">
      <div id="logo">
        <Link to="/">
          <div className="ml-4 md:ml-0 flex items-center hover:text-gray-500">
            <span className="text-4xl mr-2">Jadwali</span>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              color="white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 20H6C3.79086 20 2 18.2091 2 16V7C2 4.79086 3.79086 3 6 3H17C19.2091 3 21 4.79086 21 7V10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 2V4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 8H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 15.6429L17 17.1429"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="17"
                cy="17"
                r="5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>

      <svg
        onClick={toggleHidden}
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block mr-2 md:mr-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className={`${
          open ? "" : "hidden"
        } w-full md:flex md:items-center md:w-auto ml-2 md:ml-0 `}
        id="menu">
        <ul
          className="
              pt-4
              text-base text-gray-400
              md:flex
              md:justify-between 
              md:pt-0">
          <li className="block py-2 md:py-0 md:px-4 hover:text-gray-50">
            <Link to="/">
              <span className="">Home</span>
            </Link>
          </li>
          <li className="block py-2 md:py-0 md:px-4 hover:text-gray-50">
            <Link to="/feedback">
              <span className="">Contact us</span>
            </Link>
          </li>
          <li className="block py-2 md:py-0 md:px-4 hover:text-gray-50">
            <Link to="/generate">
              <span className="text-gray-300">Generate</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
