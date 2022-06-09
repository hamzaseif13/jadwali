import React,{useContext} from "react";

import JadwaliContext from "../../../context/JadwaliContext";

function Result({result,clearInput}) {
   
 const {dispatch,registeredCourses}= useContext(JadwaliContext)
 const addCourse = (res) => {
    dispatch({ type: 'SET_REG', payload: [...registeredCourses,res] })
    clearInput()
}
  return (
    <h1
      onClick={() => addCourse(result)}
      className=" p-1 border-x-0 border-t-0 hover:cursor-pointer pb-2 hover:bg-mydark text-sm"
    >
      {result.name}
    </h1>
  );
}

export default Result;
