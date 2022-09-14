import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className=" h-[10vh] bg-[#091227]  flex items-center justify-between   min-h-[50px]">
      <Link to="/">
        <h1 className="text-white text-3xl md:text-4xl ml-3 md:ml-40  ">Jadwali</h1>
      </Link>
      <div className="flex space-x-2 md:mr-40 items-center text mr-3">
        <Link to="/generate">
          <h1 className="text-white bg-green-700 p-2 rounded hover:bg-green-800">Generate Now !</h1>
        </Link>
      </div>
      {/* <ul className="flex mr-1 text-xl lg:text-3xl md:mr-30 sm:mr-10 lg:mr-52 ">
            <li className="mr-5">home</li>
            <li className="mr-5">facebook</li>
            <li>contact</li>
        </ul> */}
    </div>
  );
}

export default Navbar;
