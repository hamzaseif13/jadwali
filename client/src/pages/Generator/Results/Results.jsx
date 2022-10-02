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
    showAll,
    pinnedSections,
  } = useContext(JadwaliContext);
  var schedules = [];
  const getSchedulesWithPinnedSections = (schs) => {
    const pinnedIds = pinnedSections.map((section) => section.id);
    return schs.filter((schedule) =>
      pinnedIds.every((id) =>
        schedule.map((section) => section.id).includes(id)
      )
    );
  };
  const availableSchedules = generatedSchedules.filter((schedule) => {
    let t = true;
    schedule.forEach((section) => {
      if (section.registered >= section.capacity) t = false;
    });
    return t;
  });
  if (pinnedSections.length > 0) {
    if (showAll) {
      schedules = getSchedulesWithPinnedSections(generatedSchedules);
    } else {
      
      schedules = getSchedulesWithPinnedSections(availableSchedules);
    }
  } else {
    if (showAll) {
      schedules = generatedSchedules;
    } else {
      schedules = availableSchedules;
    }
  }
  if (schedules.length === 0)
    return (
      <>
        <Controls
          showAll={showAll}
          prev={() => {}}
          next={() => {}}
          total={0}
          activeSchedule={-1}
          isFavorite={() => {}}
        />
        <NoResults text="There are no Results with the selected time and days" />
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

  const isFavorite = (sschedule) => {
    const schIds = sschedule
      .map((section) => section.id)
      .sort()
      .join();
    return favoriteSchedules.some(
      (sch) =>
        sch
          .map((section) => section.id)
          .sort()
          .join() === schIds
    );
  };
  const toggleFavorite = () => {
    if (isFavorite(schedule)) {
      const filterdSchedules =favoriteSchedules.filter(
        (sch) =>
          sch
            .map((section) => section.id)
            .sort()
            .join() !==
          schedules[activeSchedule]
            .map((section) => section.id)
            .sort()
            .join()
      )
      dispatch({
        type: "SET_FAVORITE_SCHEDULES",
        payload:filterdSchedules
        
      });
      localStorage.setItem(
        "favoriteSchedules",
        JSON.stringify(filterdSchedules)
      );
      let flag = false
      const filterdFavorite = favoriteCourses.filter((course) => {
        if(!flag){
            if( schedules[activeSchedule].some(sec=>sec.line_number === course.line_number)){
              flag=true
              return false
            }
        }
        return true
      })
      dispatch({
        type: "SET_FAVORITE_COURSES",
        payload: [...filterdFavorite],
      });
      localStorage.setItem(
        "favoriteCourses",
        JSON.stringify([...filterdFavorite])
      );

    } else {

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
    }
  };
  return (
    <div className="text-white  sm:ml-10 md:ml-26  sm:mr-10 md:mr-26 ">
      <Controls
        prev={prev}
        next={next}
        total={schedules.length}
        activeSchedule={activeSchedule}
        toggleFavorite={toggleFavorite}
        schedule={schedule}
        isFavorite={isFavorite}
      />
      <Table schedule={schedule} />
    </div>
  );
}

export default Results;
