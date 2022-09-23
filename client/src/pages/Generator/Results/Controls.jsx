import React, { useContext } from "react";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import { HeartIcon, TrashIcon } from "@heroicons/react/solid";
function Controls({
  activeSchedule,
  total,
  prev,
  next,
  schedule,
  addLocalStorage,
  favorite = false,
  removeFavorite,

}) {
  const { dispatch, showAll } = useContext(JadwaliContext);

  const setShow = () => {
    dispatch({ type: "SET_ACTIVE_SCHEDULE", payload: 0 });
    dispatch({ type: "SET_SHOW_ALL", payload: !showAll });
  };
  return (
    <div className="flex flex-col justify-center items-center mt-3 flex-wrap text-white">
      <div className="flex justify-center mt-2">
        <div className="flex justify-center items-center  border w-fit rounded border-mylight">
          <div className="inline  py-1 px-2 ">Schedule</div>
          <div className="pl-2 py-1 border border-mylight font-normal text-blue-500  transition ease-in-out  m-0  bg-mylight w-20 ">
            {" "}
            {activeSchedule + 1}
          </div>

          <div className="inline  py-1 px-2 r">of {total}</div>
          <button
            onClick={prev}
            className=" inline p-1 text-blue-500 border-mylight border px-2 border-t-0 border-b-0">
            <span>&#10094;</span>
          </button>
          <button
            onClick={next}
            className="  text-blue-500 p-1 border-mylight  px-2 ">
            <span>&#10095;</span>
          </button>

          {favorite ? (
            <button className="border border-t-0 border-b-0  border-mylight border-r-0 ">
              <TrashIcon
                className="w-8 hover:text-red-500"
                color="gray"
                onClick={() => {
                  removeFavorite(schedule);
                }}
              />
            </button>
          ) : (
            <button className="border border-t-0 border-b-0  border-mylight border-r-0 ">
              <HeartIcon
                className="w-8 hover:text-red-500"
                color="gray"
                onClick={addLocalStorage}
              />
            </button>
          )}
        </div>
      </div>
      {!favorite && (
        <div className="mt-2">
          <label
            for="default-toggle"
            class="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              onClick={setShow}
              id="default-toggle"
              className="sr-only peer"
              checked={!showAll}
              readOnly
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Show available sections only
            </span>
          </label>
        </div>
      )}
    </div>
  );
}

export default Controls;
