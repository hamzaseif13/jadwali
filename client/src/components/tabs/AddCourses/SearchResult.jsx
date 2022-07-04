import React, { useContext } from "react";

import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";

function SearchResult({ result, clearInput }) {
  const { dispatch, registeredCourses, colors } = useContext(JadwaliContext);
  const addCourse = () => {
    if (!registeredCourses.find((course) => course.lineNumber === result.lineNumber))
      dispatch({
        type: "SET_REG",
        payload: [
          ...registeredCourses,
          { ...result, color: colors[registeredCourses.length] },
        ],
      });
    clearInput();
  };
  return (
    <h1
      onClick={addCourse}
      className="text-white p-1 border-x-0 border-t-0  hover:cursor-pointer pb-2 hover:border-x text-base hover:bg-mydark ">
      {result.name}({result.symbol})
    </h1>
  );
}

export default SearchResult;
