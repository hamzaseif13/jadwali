import React from "react";
import TabLayout from "../TabLayout";
import DaysFilter from "./DaysFilter";
import MinimumFilter from "./MinimumFilter";
import TimeRange from "./TimeRange";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import { useContext } from "react";
import Loading from "../../layout/Loading";
import {fetchSchedules} from '../../../context/jadwaliContext/JadwaliActions'
function Options() {
  const {
    registeredCourses,
    minNumberOfDays,
    startTime,
    endTime,
    days,loading,
    dispatch,
  } = useContext(JadwaliContext);
  const courses = [];
  registeredCourses.forEach((course) => {
    courses.push(course.lineNumber);
  });
  const generate = async () => {
    dispatch({type:"SET_LOADING",payload:true})
    const schedules = await fetchSchedules(registeredCourses.map(c=>c.lineNumber),minNumberOfDays, startTime, endTime, days);
    dispatch({ type: "SET_GEN", payload: schedules });
    dispatch({type:"SET_LOADING",payload:false})
    dispatch({type:"SET_ACTIVE_TAB",payload:3})
  };
  if(loading)return <Loading />;
  return (
    <TabLayout>
      <div className="mt-3">
        <DaysFilter />
        <MinimumFilter />
        <TimeRange />
        <div className="mt-5 ml-2">
          <button className="mr-2 border p-2 rounded hover:bg-blue-500 hover:text-mydark" onClick={()=>dispatch({type:"SET_ACTIVE_TAB",payload:1})}>
            Add more
          </button>
          <button onClick={generate}className="bg-blue-500 text-mylight border p-2 rounded hover:bg-mydark hover:text-white">
            Generate
          </button>
        </div>
      </div>
    </TabLayout>
  );
}

export default Options;
