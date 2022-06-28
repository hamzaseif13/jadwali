import React, { useContext, useState } from "react";
import TabLayout from "../TabLayout";
import ChooseSchool from "./ChooseSchool";
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
    dispatch({ type: "SET_LOADING", payload: true });
    const schedules = await fetchSchedules(
      registeredCourses.map((c) => c.lineNumber),
      minNumberOfDays,
      startTime,
      endTime,
      days
    );
    console.log(schedules);
    dispatch({ type: "SET_GEN", payload: schedules });
    dispatch({ type: "SET_LOADING", payload: false });
    dispatch({ type: "SET_ACTIVE_TAB", payload: 3 });
  };
  if (loading) return <Loading color="#343A40" />;
  return (
    <TabLayout>
      <div className="lg:flex mt-5 ">
        <div className="lg:mr-20">
          <ChooseSchool />
          <SearchBox />
          <div className="mt-3 mb-3">
            <button
              className="mr-2 border p-2 rounded hover:bg-blue-500 hover:text-mydark"
              onClick={generate}>
              Generate
            </button>
            <button
              className="bg-blue-500 text-mylight border p-2 rounded hover:bg-mydark hover:text-white"
              onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: 2 })}>
              filter
            </button>
          </div>
        </div>
        <CourseWrapper />
      </div>
    </TabLayout>
  );
}

export default AddCourses;
