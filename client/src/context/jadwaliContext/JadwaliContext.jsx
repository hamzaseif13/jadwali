import {  createContext, useReducer } from "react";
import JadwaliReducer from "./JadwaliReducer";
import { departmentData } from "./departmentsData";
const JadwaliContext = createContext();

export const JadwaliProvider = ({ children }) => {
  const initialState = {
    minNumberOfDays: 5,
    startTime: 8.5,
    endTime: 18.5,
    generatedSchedules: [],
    registeredCourses: [],
    intensiveSections:[],
    availableSchedules:[],
    pinnedSections:[],
    colors: [
      "border-red-500",
      "border-blue-500",
      "border-green-500",
      "border-yellow-500",
      "border-cyan-500",
      "border-white-500",
      "border-orange-500",
    ],
    days: "sun mon tue wed thu u",
    loading: false,
    activeTab: 1,
    activeSchedule:0,
    favoriteSchedules:JSON.parse(localStorage.getItem("favoriteSchedules"))||[],
    favoriteCourses:JSON.parse(localStorage.getItem("favoriteCourses"))||[],
    selectedDepartment:"All",
    departments:departmentData,
    showAll:true
  };

  const [state, dispatch] = useReducer(JadwaliReducer, initialState);
  return (
    <JadwaliContext.Provider value={{ ...state, dispatch }}>
      {children}
    </JadwaliContext.Provider>
  );
};

export default JadwaliContext;
