import React, { useContext } from "react";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import Table from "./Table";
import Controls from "./Controls";
import NoResults from "../../../components/layout/NoResults";
function Results() {
  const {
    generatedSchedules,
    dispatch,
    activeSchedule,
    favoriteSchedules,
    registeredCourses,
    favoriteCourses,
    availableSchedules,
    showAll,pinnedSections
  } = useContext(JadwaliContext);
  var schedules=[]
  const getSchedulesWithPinnedSections= (schs)=>{
    const pinnedIds= pinnedSections.map(section=>section.id)
     return schs.filter((schedule) => pinnedIds.every(id=>schedule.map(section=>section.id).includes(id)))
  }
  if (pinnedSections.length > 0){
    if(showAll){
      schedules = getSchedulesWithPinnedSections(generatedSchedules)
    }
    else{
      schedules= getSchedulesWithPinnedSections(availableSchedules)
    }
  }
  else {
    if(showAll){
      schedules = generatedSchedules
    }
    else{
      schedules=availableSchedules
    }
  }
  if (schedules.length === 0)
    return (
      <>
      <Controls
        showAll={showAll}
        prev={()=>{}}
        next={()=>{}}
        total={0}
        activeSchedule={-1}
      />
        <NoResults text="There are no Results with the selected time and days"/>
      </>
    );
  const schedule = schedules[activeSchedule] || [];
  const prev = () => {
    if (activeSchedule > 0) {
      dispatch({ type: "SET_ACTIVE_SCHEDULE", payload: activeSchedule - 1 });
    }
  };
  const next = () => {
    if (activeSchedule < schedules.length - 1) {
      dispatch({ type: "SET_ACTIVE_SCHEDULE", payload: activeSchedule + 1 });
    }
  };

  const addLocalStorage = () => {
    dispatch({
      type: "SET_FAVORITE_SCHEDULES",
      payload: [...favoriteSchedules, schedules[activeSchedule]],
    });
    localStorage.setItem(
      "favoriteSchedules",
      JSON.stringify([...favoriteSchedules, schedules[activeSchedule]])
    );
    dispatch({
      type: "SET_FAVORITE_COURSES",
      payload: [...favoriteCourses, ...registeredCourses],
    });
    localStorage.setItem(
      "favoriteCourses",
      JSON.stringify([...favoriteCourses, ...registeredCourses])
    );
  };
  return (
    <div className="text-white  sm:ml-10 md:ml-26  sm:mr-10 md:mr-26 ">
      <Controls
        prev={prev}
        next={next}
        total={schedules.length}
        activeSchedule={activeSchedule}
        addLocalStorage={addLocalStorage}
        schedule={schedule}
      />
      <Table schedule={schedule} />
    </div>
  );
}

export default Results;
