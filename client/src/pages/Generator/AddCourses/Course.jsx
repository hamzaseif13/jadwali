import React, { useContext } from "react";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import { TrashIcon } from "@heroicons/react/solid";
function Course({ course }) {
  const { dispatch, registeredCourses } = useContext(JadwaliContext);
  const removeCourse = () => {
    const newRegisteredCourses = registeredCourses.filter(
      (crs) => crs !== course
    );
    dispatch({ type: "SET_REG", payload: newRegisteredCourses });
    dispatch({ type: "SET_GEN", payload: [] });
    dispatch({ type: "SET_ACTIVE_SCHEDULE", payload:0 });
    localStorage.setItem("registeredCourses", JSON.stringify(newRegisteredCourses));
  };
  return (
    <div className="shadow-lg text-white mx-2 w-[95%] sm:w-[380px] p-2 my-1 rounded bg-gray-800">
      <h1 className="capitalize">{course.name.toLowerCase()}</h1>
      <div className="flex justify-between mt-1">
        <h2 className="">{course.symbol.toUpperCase()}</h2>
        <h2 className="">{course.creditHours} credit hours</h2>
        <TrashIcon  className="w-6 text-red-600 hover:text-red-800 cursor-pointer " onClick={removeCourse}/>
      </div>
    </div>
  );
}

export default Course;
