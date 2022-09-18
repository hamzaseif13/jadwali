import React from 'react'

function ChooseSchool() {
  return (
    <div className="max-w-sm lg:w-[20rem]">
         <h1 className="text-lg mr-10">Choose Your school</h1>
        <select className={' min-w-full block px-3 py-1.5 text-base font-normal text-blue-500   border-solid border-gray-300  rounded transition ease-in-out  m-0   focus:border-white focus:outline-none bg-mylight'} >
          <option value >JUST</option>
          <option value="1">JU</option>
          <option value="2">YU</option>
        </select>
    </div>
  )
}

export default ChooseSchool