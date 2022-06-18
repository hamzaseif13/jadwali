import React, { useContext } from "react";
import TabLayout from "../TabLayout";
import ChooseSchool from "./ChooseSchool";
import SearchBox from "./SearchBox";
import CourseWrapper from "./CourseWrapper";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import Loading from "../../layout/Loading";

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
    if (registeredCourses.length === 0) {
      dispatch({ type: "SET_GEN", payload: [] });
      return;
    }
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await fetch("http://192.168.1.13:5000/api/v1/generate", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          options: {
            courses: registeredCourses.map((course) => course.lineNumber),
            minNumberOfDays,
            startTime,
            endTime,
            days,
          },
        }),
      });
      const schedules = await res.json();
      dispatch({ type: "SET_GEN", payload: schedules });
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_ACTIVE_TAB", payload: 3 });
      console.log(schedules);
    } catch (error) {
      console.log(error);
    }
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
              onClick={generate}
            >
              Generate
            </button>
            <button
              className="bg-blue-500 text-mylight border p-2 rounded hover:bg-mydark hover:text-white"
              onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: 2 })}
            >
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
