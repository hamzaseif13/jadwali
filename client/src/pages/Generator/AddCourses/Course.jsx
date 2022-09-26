import React, { useContext } from "react";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import Modal from "./Modal/Modal";
function Course({ course }) {
  const { dispatch, registeredCourses, pinnedSections } = useContext(JadwaliContext);
  const [modalOpen, setModalOpen] = React.useState(false);
  const removeCourse = () => {
    const newRegisteredCourses = registeredCourses.filter(
      (crs) => crs !== course
    );
    dispatch({ type: "SET_REG", payload: newRegisteredCourses });
    dispatch({ type: "SET_GEN", payload: [] });
    dispatch({ type: "SET_ACTIVE_SCHEDULE", payload:0 });
    dispatch({ type: "SET_PINNED_SECTIONS", payload:pinnedSections.filter(sect=>sect.lineNumber!==course.lineNumber) });
    localStorage.setItem("registeredCourses", JSON.stringify(newRegisteredCourses));
  };
  
  return (
    <div className="shadow-lg   text-white mx-2 w-[95%] sm:w-[380px] p-2 my-1 rounded bg-gray-800">
      <div className="flex justify-between items-start"> 
      <h1 className="capitalize text-lg">{course.name}</h1>
      <button onClick={removeCourse} className=' top-1 right-2 text-2xl text-red-600'>&#10006;</button>
      </div>
      {modalOpen&&<Modal modalOpen={modalOpen} close={()=>setModalOpen(false)} course={course}/>}
      <div className="flex justify-between mt-3 items-center">
        <h2 className="">{course.symbol.toUpperCase()}</h2>
        <h2 className="">{course.creditHours} credit hours</h2>
        <button onClick={()=>setModalOpen(true)} className="bg-green-700 hover:bg-green-800 p-2 rounded">See details</button>
      </div>
    </div>
  );
}

export default Course;
