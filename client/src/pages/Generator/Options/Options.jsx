import React from "react";
import DaysFilter from "./DaysFilter";
import MinimumFilter from "./MinimumFilter";
import TimeRange from "./TimeRange";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import { useContext } from "react";
import Loading from "../../../components/layout/Loading";
import {fetchSchedules} from '../../../context/jadwaliContext/JadwaliActions'
function Options() {
  const {
    registeredCourses,
    minNumberOfDays,
    startTime,
    endTime,
    days,loading,
    dispatch,
  } = useContext(JadwaliContext);
  const courses = [];
  registeredCourses.forEach((course) => {
    courses.push(course.lineNumber);
  });
  const generate = async () => {
    dispatch({type:"SET_LOADING",payload:true})
    const schedules = await fetchSchedules(registeredCourses.map(c=>c.lineNumber),minNumberOfDays, startTime, endTime, days);
    dispatch({ type: "SET_GEN", payload: schedules });
    dispatch({type:"SET_LOADING",payload:false})
    dispatch({type:"SET_ACTIVE_TAB",payload:3})
  };
  if(loading)return <Loading />;
  return (
    
      <div className="mt-3   text-white ">
        <DaysFilter />
        <MinimumFilter />
        <TimeRange />
        <div className="mt-5 ml-2 flex justify-center items-center">
          <button className="mr-2 border p-2 rounded bg-gray-500 hover:bg-gray-600 " onClick={()=>dispatch({type:"SET_ACTIVE_TAB",payload:1})}>
            Add more
          </button>
          <button 
            className="mr-2 border bg-green-700 p-2 rounded hover:bg-green-800"
            onClick={generate}>
            Generate
          </button>
        </div>
      </div>
  
  );
}

export default Options;
