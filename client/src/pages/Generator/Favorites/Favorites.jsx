import React, {  } from "react";
import Table from "../Results/Table";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import Controls from "../Results/Controls";
function Favorites() {
  const [activeSchedule, setActiveSchedule] = React.useState(0);
  const { favoriteSchedules, dispatch, favoriteCourses} = React.useContext(JadwaliContext);

  if (favoriteSchedules.length < 1) {
    return (
      <h1 className="text-white text-center mt-10">
        There is no Favories Schedules :(
      </h1>
    );
  }
  const schedule = favoriteSchedules[activeSchedule];
  const prev = () => {
    if (activeSchedule > 0) {
      setActiveSchedule(activeSchedule - 1);
    }
  };
  const next = () => {
    if (activeSchedule < favoriteSchedules.length - 1) {
      setActiveSchedule(activeSchedule + 1);
    }
  };
  const removeFavorite = (schedule) => {
    const newFavoriteSchedules = favoriteSchedules.filter(
      (sch) => sch !== schedule
    );
    localStorage.setItem(
      "favoriteSchedules",
      JSON.stringify(newFavoriteSchedules)
    );
    const lineNumbers =[]
    for(let schedule of newFavoriteSchedules){
        for (let section of schedule) {
            lineNumbers.push(section.lineNumber)
        }
    }
    setActiveSchedule(0);
    dispatch({ type: "SET_FAVORITE_SCHEDULES", payload: newFavoriteSchedules });
    const newFavoriteCourses = favoriteCourses.filter(
      (course) => lineNumbers.includes(course.lineNumber)
    )
    localStorage.setItem('favoriteCourses',JSON.stringify(newFavoriteCourses))
    dispatch({ type: "SET_FAVORITE_COURSES", payload: newFavoriteCourses });
  };
  return (
    <div className=''>
    <Controls removeFavorite={removeFavorite}
      favorite={true}
      prev={prev}
      next={next}
      schedule={schedule}
      total={favoriteSchedules.length}
      activeSchedule={activeSchedule} />
    <Table
      schedule={schedule}
    />
    </div>
  );
}

export default Favorites;
