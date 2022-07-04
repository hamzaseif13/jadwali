import React, { useContext, useState } from "react";
import Day from "./Day";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import NoResults from "../../layout/NoResults";
function Results() {
  const { generatedSchedules, dispatch,activeSchedule } = useContext(JadwaliContext);
  
  if(generatedSchedules.length===0) return <NoResults />
  const schedule = generatedSchedules[activeSchedule]||[];
  //if (generatedSchedules.length === 0) return <NoResults />;
  const filterDay=(day)=>{
    return schedule.filter((section) => section.days.includes(day));
  }
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
  return (
    
    <div className="text-white  sm:ml-10 md:ml-26  sm:mr-10 md:mr-26 ">
      <div className="flex mt-3">
        <div className="flex justify-center items-center mt-2 border w-fit rounded border-mylight">
          <div className="inline  py-1 px-2 ">Schedule</div>
          <div className="pl-2 py-1 border border-mylight font-normal text-blue-500  transition ease-in-out  m-0  bg-mylight w-20 ">
            {" "}
            {activeSchedule + 1}
          </div>

          <div className="inline  py-1 px-2 r">
            of {generatedSchedules.length}
          </div>
          <button
            onClick={prev}
            className=" inline p-1 text-blue-500 border-mylight border px-2 border-t-0 border-b-0"
          >
            <span>&#10094;</span>
          </button>
          <button
            onClick={next}
            className=" inline text-blue-500 p-1 border-mylight border px-2 border-t-0 border-b-0 border-l-0 border-r-0"
          >
            <span>&#10095;</span>
          </button>
        </div>
      </div>
      <div className="flex " id="table">
        <div className=" text-white bg-mylight  border-2 border-x-0 rounded-l-lg border-mydark  text-center pt-2 px-1 mt-5 ">
          <h1 className="mb">time</h1>
          <div className=" text-sm">
            <h1 className="h-6 ">8:30</h1>
            <h1 className="h-6 ">9:00</h1>
            <h1 className="h-6 ">9:30</h1>
            <h1 className="h-6 ">10:00</h1>
            <h1 className="h-6 ">10:30</h1>
            <h1 className="h-6 ">11:00</h1>
            <h1 className="h-6 ">11:30</h1>
            <h1 className="h-6 ">12:00</h1>
            <h1 className="h-6 ">12:30</h1>
            <h1 className="h-6 ">13:00</h1>
            <h1 className="h-6 ">13:30</h1>
            <h1 className="h-6 ">14:00</h1>
            <h1 className="h-6 ">14:30</h1>
            <h1 className="h-6 ">15:00</h1>
            <h1 className="h-6 ">15:30</h1>
            <h1 className="h-6 ">16:00</h1>
            <h1 className="h-6 ">16:30</h1>
            <h1 className="h-6 ">17:00</h1>
            <h1 className="h-6 ">17:30</h1>
            <h1 className="h-6 ">18:00</h1>
            <h1 className="h-6 ">18:30</h1>
          </div>
        </div>
        <Day sections={filterDay("Sun")} name="Sun"/>
        <Day sections={filterDay("Mon")} name="Mon"/>
        <Day sections={filterDay("Tue")} name="Tue"/>
        <Day sections={filterDay("Wed")} name="Wen"/>
        <Day sections={filterDay("Thu")} lastOne={true}name="Thu"/>
      </div>
    </div>
  );
}

export default Results;
