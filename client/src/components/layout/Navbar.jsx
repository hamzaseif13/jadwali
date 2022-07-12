import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className=" h-[10vh] bg-slate-900 flex items-center justify-between   min-h-[50px]">
        <h1 className="text-white text-4xl ml-3 md:ml-26 sm:ml-10  ">Jadwali</h1>

        <Link to="/generate"><h1 className="text-white">Generate</h1></Link>
        <Link to="/#lol"><h1 className="text-white">Home</h1></Link>

        {/* <ul className="flex mr-1 text-xl lg:text-3xl md:mr-30 sm:mr-10 lg:mr-52 ">
            <li className="mr-5">home</li>
            <li className="mr-5">facebook</li>
            <li>contact</li>
        </ul> */}
        
    </div>
  )
}

export default Navbar