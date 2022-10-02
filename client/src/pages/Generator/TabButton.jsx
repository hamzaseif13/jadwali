import React from "react";
import { useContext } from "react";
import JadwaliContext from "../../context/jadwaliContext/JadwaliContext";
function TabButton({ name, order }) {
  const { activeTab, dispatch, generatedSchedules,favoriteSchedules,showAll, availableSchedules} =
    useContext(JadwaliContext);
  const handleClick = () => {
    dispatch({ type: "SET_ACTIVE_TAB", payload: order });
  };
  return (
    <li className="mr-2 relative" onClick={handleClick}>
      {order === 3 && (
        <h1 className="absolute text-white bg-red-500 rounded  top-2 left-16">
          {showAll?generatedSchedules.length:availableSchedules.length}
        </h1>
      )}
      {order === 4 && (
        <h1 className="absolute text-white bg-red-500 rounded  top-2 left-20">
          {favoriteSchedules.length}
        </h1>
      )}
      <h1
        href="#"
        className={`relative z-10 inline-block p-4 hover:cursor-pointer rounded-t-lg border-b-2${
          activeTab === order
            ? " text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
            : "  border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        }`}>
        {name}
      </h1>
    </li>
  );
}

export default TabButton;

