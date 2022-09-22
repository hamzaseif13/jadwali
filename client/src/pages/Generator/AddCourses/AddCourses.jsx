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
    dispatch,
  } = useContext(JadwaliContext);
  const [date, setDate] = useState("no-date");

  useEffect(() => {
    const fetchDate = async () => {
      const date = await fetch("http://localhost:5050/api/v1/last_updated");
      const dateJson = await date.json();
      setDate(dateJson.date);
    };
    fetchDate();
  }, []);
  
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
    dispatch({ type: "SET_ACTIVE_TAB", payload: 3 });
    dispatch({ type: "SET_ACTIVE_SCHEDULE", payload: 0 });
  };
  if (loading) return <Loading color="#343A40" />;
  /**
   * text-sm font-medium text-center sm:ml-10 md:ml-40
 mt- text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700
 sm:mr-10 md:mr-40
 
   */
  return (
    <div className="mt-2 ">
      <div
        className=" ml-4   p-2 rounded text-gray-400 sm:ml-10 md:ml-40
sm:mr-10 md:mr-40 bg-[#142652]  shadow-xl text-center my-3">
        <h1>
          Last updated :
          <span className="text-gray-300">
              {date}
          </span>
        </h1>
      </div>
      <DepartmentSearch />
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
