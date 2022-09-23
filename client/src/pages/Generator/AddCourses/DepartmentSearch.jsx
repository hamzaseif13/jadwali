import React,{useContext} from "react";

import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
function DepartmentSearch() {
  const {departments,selectedDepartment,dispatch}=useContext(JadwaliContext)
  const setDepartment=(event)=>{
    dispatch({type:"SET_DEPARTMENT",payload:event.target.value})
  }
  return (
    <div className="flex flex-col  justify-center items-center mb-2">
      <label
        htmlFor="large"
        className="block mb-2 text-base font-medium  text-gray-400 text-center">
        Department
      </label>
      <select onChange={setDepartment} value={selectedDepartment} 
        id="large"
        className="w-[95%] mt-1 mx-1 text-lg shadow-lg outline-none max-w-[600px] text-blue-500 rounded  bg-mylight p-2 m-auto ">
        <option defaultValue>All</option>
        {departments.map((department,index)=>(
          <option key={index} >{department}</option>
        ))}
      </select>
    </div>
  );
}

export default DepartmentSearch;
