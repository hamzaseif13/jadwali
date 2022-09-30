import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
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
          <div className="ml-4 md:ml-0 flex items-center hover:text-gray-300">
            <Logo color="currentColor"/>
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
            <Link to="/aboutus">
              <span className="">About us</span>
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
