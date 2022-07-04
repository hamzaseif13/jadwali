import React, { useContext, useState } from "react";

import SearchBox from "./SearchBox";
import CourseWrapper from "./CourseWrapper";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import Loading from "../../layout/Loading";

import { fetchSchedules } from "../../../context/jadwaliContext/JadwaliActions";

function AddCourses() {
  const {
    registeredCourses,
    minNumberOfDays,
    startTime,
    endTime,
    days,
    loading,
    dispatch,
  } = useContext(JadwaliContext);

  const generate = async () => {
    if(registeredCourses.length===0)return
    dispatch({ type: "SET_LOADING", payload: true });
    const results = await fetchSchedules(
      registeredCourses.map((c) => c.lineNumber),
      minNumberOfDays,
      startTime,
      endTime,
      days
    );
    dispatch({ type: "SET_GEN", payload: results });
    dispatch({ type: "SET_LOADING", payload: false });
    dispatch({ type: "SET_ACTIVE_TAB", payload: 3 });
  };
  if (loading) return <Loading color="#343A40" />;
  return (
    <div className="mt-2 ">
      <SearchBox />
      <div className="flex flex-col-reverse sm:flex-col ">
        <CourseWrapper />
        <div className="sm:my-2 sm:mt-1 mt-2 text-white flex flex-row justify-start ml-3 sm:justify-center">
          <button 
            className="mr-2 border bg-green-700 p-2 rounded hover:bg-green-800"
            onClick={generate}>
            Generate
          </button>
          <button
            className="bg-red-600  border p-2 rounded hover:bg-red-800"
            onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: 2 })}>
            filter
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default AddCourses;
