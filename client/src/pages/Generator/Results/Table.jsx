import React from "react";
import Day from "./Day";
import { HeartIcon, TrashIcon } from "@heroicons/react/solid";
function Table({
  activeSchedule,
  total,
  prev,
  next,
  schedule,
  addLocalStorage,
  favorite = false,
  removeFavorite,
}) {
  const filterDay = (day) => {
    return schedule.filter((section) => section.days.includes(day));
  };
  return (
    <div className="text-white  sm:ml-10 md:ml-26  sm:mr-10 md:mr-26 ">
      <div className="flex mt-3 justify-center">
        <div className="flex justify-center items-center mt-2 border w-fit rounded border-mylight">
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

      <div className="flex justify-center mt-3 " id="table">
        <div className=" text-white bg-mylight  border-2 border-x-0 rounded-l-lg border-mydark  text-center pt-2 px-1  ">
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
        <Day sections={filterDay("sun")} name="Sun" />
        <Day sections={filterDay("mon")} name="Mon" />
        <Day sections={filterDay("tue")} name="Tue" />
        <Day sections={filterDay("wed")} name="Wen" />
        <Day sections={filterDay("thu")} lastOne={true} name="Thu" />
      </div>
    </div>
  );
}

export default Table;
