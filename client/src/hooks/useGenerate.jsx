import { useContext } from "react";
import JadwaliContext from "../context/jadwaliContext/JadwaliContext";
import { fetchSchedules } from "../context/jadwaliContext/JadwaliActions";

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
