import React,{useContext} from "react";

import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";

function Result({result,clearInput}) {
   
 const {dispatch,registeredCourses,colors}= useContext(JadwaliContext)
 const addCourse = (res) => {
    if(!registeredCourses.filter((course)=>course.lineNumber===res.lineNumber).length>0)
    dispatch({ type: 'SET_REG', payload: [...registeredCourses,{...res,color:colors[registeredCourses.length]}] })
    clearInput()
}
  return (
    <h1
      onClick={() => addCourse(result)}
      className=" p-1 border-x-0 border-t-0 hover:cursor-pointer pb-2 hover:border-x hover:bg-mydark text-sm"
    >
      {result.name}
    </h1>
  );
}

export default Result;
