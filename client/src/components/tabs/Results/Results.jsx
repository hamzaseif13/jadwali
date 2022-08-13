import React, { useContext, useState } from "react";
import Day from "./Day";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import NoResults from "../../layout/NoResults";
import Table from "./Table";

function Results({favorite}) {
  const { generatedSchedules, dispatch, activeSchedule,favoriteSchedules, registeredCourses, favoriteCourses } =
    useContext(JadwaliContext);
  if (generatedSchedules.length === 0) return <NoResults />;
  const schedule = generatedSchedules[activeSchedule] || [];
  //if (generatedSchedules.length === 0) return <NoResults />;
  const prev = () => {
    if (activeSchedule > 0) {
      dispatch({ type: "SET_ACTIVE_SCHEDULE", payload: activeSchedule - 1 });
    }
  };
  const next = () => {
    if (activeSchedule < generatedSchedules.length - 1) {
      dispatch({ type: "SET_ACTIVE_SCHEDULE", payload: activeSchedule + 1 });
    }
  };

  const addLocalStorage = ()=>{
    dispatch({ type: "SET_FAVORITE_SCHEDULES", payload: [...favoriteSchedules,generatedSchedules[activeSchedule]] });
    localStorage.setItem("favoriteSchedules",JSON.stringify([...favoriteSchedules,generatedSchedules[activeSchedule]]))
    dispatch({ type: "SET_FAVORITE_COURSES", payload: [...favoriteCourses,...registeredCourses] });
    localStorage.setItem("favoriteCourses",JSON.stringify([...favoriteCourses,...registeredCourses]))
    
  }
  return (
    <Table prev={prev} next={next} schedule={schedule} total={generatedSchedules.length} activeSchedule={activeSchedule} addLocalStorage={addLocalStorage}/>
  );
}

export default Results;
