import { useContext } from "react";
import JadwaliContext from "../context/jadwaliContext/JadwaliContext";

const fetchSchedules = async (
  courses,
  minNumberOfDays,
  startTime,
  endTime,
  days,
  pinnedSections
) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      options: {
        courses,
        minNumberOfDays,
        startTime,
        endTime,
        days,
        pinnedSections,
      },
    }),
  });

  const results = await res.json();

  return results;
};

function useGenerate() {
  const {
    dispatch,
    registeredCourses,  
    minNumberOfDays,
    startTime,
    endTime,
    days,
    pinnedSections,
  } = useContext(JadwaliContext);
  const generate = async (newpinned) => {
    console.log(newpinned)
    if (registeredCourses.length === 0) return;
    dispatch({ type: "SET_LOADING", payload: true });
    const results = await fetchSchedules(
      registeredCourses.map((c) => c.lineNumber),
      minNumberOfDays,
      startTime,
      endTime,
      days,
      newpinned
    );
    dispatch({ type: "SET_GEN", payload: results });
    dispatch({ type: "SET_LOADING", payload: false });
    dispatch({ type: "SET_ACTIVE_SCHEDULE", payload: 0 });
    dispatch({ type: "SET_ACTIVE_TAB", payload: 3 });
  };
  return { generate };
}

export default useGenerate;
