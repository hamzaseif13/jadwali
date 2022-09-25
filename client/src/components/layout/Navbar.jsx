import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  function Logo({ color }) {
    return (
      <svg width="247.448" height="50.073" viewBox="0 -2.554 247.448 50.073">
        <text
          style={{ whiteSpace: "pre" }}
          y="38.352"
          fill={color}
          fontFamily="Arial, sans-serif"
          fontSize="42.5"
        >
          JADWALI
        </text>
        <rect
          width="3"
          height="34.583"
          x="-188.47"
          y="6.241"
          fill={color}
          opacity="0.6"
          paintOrder="stroke markers"
          rx="1.5"
          ry="1.5"
          transform="scale(-1 1)"
        ></rect>
        <g fill={color} data-fill-palette-color="accent">
          <path
            d="M55 70.1c9.1 0 16.5-7.3 16.5-16.3S64.1 37.5 55 37.5s-16.5 7.3-16.5 16.3S45.9 70.1 55 70.1zm-1.6-26.9c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6v8c0 .6.4 1 1 1h5.8c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6h-8.1c-1.1 0-1.9-.9-1.9-1.9V43.2zm-6-41.3c-.7 0-1.2.6-1.2 1.3v14.3c0 .7.6 1.3 1.2 1.3.7 0 1.2-.6 1.2-1.3V3.3c0-.8-.5-1.4-1.2-1.4zm-35.2 0c-.7 0-1.2.6-1.2 1.3v14.3c0 .7.6 1.3 1.2 1.3.7 0 1.2-.6 1.2-1.3V3.3c0-.8-.5-1.4-1.2-1.4z"
            data-fill-palette-color="accent"
            transform="matrix(.73314 0 0 .73314 195.029 -3.947)"
          ></path>
          <path
            d="M35.5 53.8c0-10.6 8.8-19.3 19.5-19.3.9 0 1.9.1 2.8.2.7.1 1.3-.4 1.3-1.2V12.3c0-1.2-.9-2.2-2-2.2h-5c-.5 0-.9.4-.9 1v6.3c0 2.1-1.4 4-3.3 4.2-2.2.2-4.1-1.6-4.1-4V11c0-.5-.4-1-.9-1H16.8c-.5 0-.9.4-.9 1v6.3c0 2.1-1.4 4-3.3 4.2-2.2.2-4.1-1.6-4.1-4V11c0-.5-.4-1-.9-1h-5c-1.1 0-2 1-2 2.2V63c0 1.2.9 2.2 2 2.2h34.6c.9 0 1.5-1 1-1.7-1.7-2.9-2.7-6.2-2.7-9.7zm9.2-26c0-.3.2-.6.5-.6H52c.3 0 .5.2.5.6v5.1c0 .3-.2.6-.5.6h-6.8c-.3 0-.5-.2-.5-.6v-5.1zM14.9 57.3c0 .3-.2.6-.5.6H7.6c-.3 0-.5-.2-.5-.6v-5.1c0-.3.2-.6.5-.6h6.8c.3 0 .5.2.5.6v5.1zm0-12.2c0 .3-.2.6-.5.6H7.6c-.3 0-.5-.3-.5-.6V40c0-.3.2-.6.5-.6h6.8c.3 0 .5.2.5.6v5.1zm0-12.2c0 .3-.2.6-.5.6H7.6c-.3 0-.5-.2-.5-.6v-5.1c0-.3.2-.6.5-.6h6.8c.3 0 .5.2.5.6v5.1zm18.8 24.4c0 .3-.2.6-.5.6h-6.8c-.3 0-.5-.2-.5-.6v-5.1c0-.3.2-.6.5-.6h6.8c.3 0 .5.2.5.6v5.1zm0-12.2c0 .3-.2.6-.5.6h-6.8c-.3 0-.5-.3-.5-.6V40c0-.3.2-.6.5-.6h6.8c.3 0 .5.2.5.6v5.1zm0-12.2c0 .3-.2.6-.5.6h-6.8c-.3 0-.5-.2-.5-.6v-5.1c0-.3.2-.6.5-.6h6.8c.3 0 .5.2.5.6v5.1z"
            data-fill-palette-color="accent"
            transform="matrix(.73314 0 0 .73314 195.029 -3.947)"
          ></path>
        </g>
      </svg>
    );
  }

  return (
    <nav className=" px-2 sm:px-4 py-2.5 bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <span className="">
            <Logo color="white" />
          </span>
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
          className={`${open ? "" : "hidden"
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
