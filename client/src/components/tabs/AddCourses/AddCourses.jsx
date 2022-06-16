import React, { useContext } from "react";
import TabLayout from "../TabLayout";
import ChooseSchool from "./ChooseSchool";
import SearchBox from "./SearchBox";
import CourseWrapper from "./CourseWrapper";
import JadwaliContext from "../../../context/JadwaliContext";

function AddCourses() {
  const {
    registeredCourses,
    minNumberOfDays,
    startTime,
    endTime,
    days,
    dispatch,
  } = useContext(JadwaliContext);
  let courses = [];
  registeredCourses.forEach((course) => {
    courses.push(course.lineNumber);
  });

  const generate = async () => {
    const res = await fetch("http://192.168.1.13:5000/api/v1/generate", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        options: { courses, minNumberOfDays, startTime, endTime, days },
      }),
    });
    const sch=await res.json()
    dispatch({type:"SET_GEN",payload: sch});
    console.log(sch)
  };
  return (
    <TabLayout>
      <div className="lg:flex mt-5 ">
        <div className="lg:mr-20">
          <ChooseSchool />
          <SearchBox />
        </div>
        <button onClick={generate}>Generate</button>
        <CourseWrapper />
      </div>
    </TabLayout>
  );
}

export default AddCourses;
