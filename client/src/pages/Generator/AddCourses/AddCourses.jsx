import React, { useContext, useState, useEffect } from "react";

import SearchBox from "./SearchBox";
import CourseWrapper from "./CourseWrapper";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import Loading from "../../../components/layout/Loading";
import DepartmentSearch from "./DepartmentSearch";
import { fetchSchedules } from "../../../context/jadwaliContext/JadwaliActions";

function AddCourses() {
  const {
    registeredCourses,
    minNumberOfDays,
    startTime,
    endTime,
    days,
    loading,
    dispatch,colors
  } = useContext(JadwaliContext);
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const localCourses= JSON.parse(localStorage.getItem("registeredCourses"))||[]
    localCourses.forEach((course,index)=>{course.color=colors[index]})
    dispatch({
      type: "SET_REG",
      payload:localCourses || [],
    });
    dispatch({type:"SET_PINNED_SECTIONS",payload:JSON.parse(localStorage.getItem("pinnedSections"))||[]})
    const fetchDate = async () => {
      const date = await fetch("/api/v1/last_updated");
      const dateJson = await date.json();
      let seconds = Math.floor(dateJson.milliseconds / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);
      setDate({ seconds, minutes, hours, days });
    };
    fetchDate();
  }, []
  );
  const generate = async () => {
    if (registeredCourses.length === 0) return;
    dispatch({ type: "SET_LOADING", payload: true });
    const results = await fetchSchedules(
      registeredCourses.map((c) => c.lineNumber),
      minNumberOfDays,
      startTime,
      endTime,
      days
    );

    const availableSchedules = results.filter((schedule) => {
      let t = true;
      schedule.forEach((section) => {
        if (section.registered >= section.capacity) t = false;
      });
      return t;
    });
    dispatch({ type: "SET_GEN_AVAL", payload: availableSchedules });
    dispatch({ type: "SET_GEN", payload: results });
    dispatch({ type: "SET_LOADING", payload: false });
    dispatch({ type: "SET_ACTIVE_SCHEDULE", payload: 0 });
    dispatch({ type: "SET_ACTIVE_TAB", payload: 3 });
  };
  if (loading) return <Loading color="#343A40" />;
  /**
   * text-sm font-medium text-center sm:ml-10 md:ml-40
 mt- text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700
 sm:mr-10 md:mr-40
 
   */
  return (
    <div className="mt-2 " id="addCourseTab">
      <div
        className="  mx-2  p-2 rounded text-gray-400  bg-[#142652]  shadow-xl text-center my-3">
        <h1>
          Last updated :
          <span className="text-[#ca9f28] ">
            {" "}
            <span className="text-gray-300">{date.days}</span> Days{" "}
            <span className="text-gray-300">{date.hours % 24}</span> Hours{" "}
            <span className="text-gray-300">{date.minutes % 60}</span> Minutes{" "}
            ago
          </span>
        </h1>
      </div>
      <DepartmentSearch />
      <SearchBox />
      <div className="flex flex-col-reverse sm:flex-col ">
        <CourseWrapper />
        <div className="sm:my-2 sm:mt-1 mt-2 text-white flex flex-row justify-start ml-3 sm:justify-center">
          <button
            className="mr-2 shadow-lg bg-green-800 p-2 rounded hover:bg-green-900"
            onClick={generate}>
            Generate
          </button>
          <button
            className="bg-red-600 shadow-lg  p-2 rounded hover:bg-red-800"
            onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: 2 })}>
            filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCourses;
