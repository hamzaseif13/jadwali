import React from 'react'

function Navbar() {
  return (
    <div className=" h-[8vh] bg-mylight flex items-center justify-between  min-h-[50px]">
        <h1 className="text-white text-3xl ml-3 md:ml-26 sm:ml-10 lg:ml-60 ">Logo</h1>
        
        {/* <ul className="flex mr-1 text-xl lg:text-3xl md:mr-30 sm:mr-10 lg:mr-52 ">
            <li className="mr-5">home</li>
            <li className="mr-5">facebook</li>
            <li>contact</li>
        </ul> */}
    </div>
  )
}

export default Navbar