import React from "react";
import gif from "../assests/searchAnif.gif";
import schedule from "../assests/sch2.png";
import { ArrowCircleDownIcon } from "@heroicons/react/solid";
function Home() {
  return (
    <div className=" bg-[#091227]  ">

      <div className="text-center md:text-left  relative mx-2 flex py-8 mt-2 md:mt-0 justify-center items-center flex-col md:flex-row md:mx-16">
        <div className="md:mr-6">
          <h1 className="text-white text-2xl md:text-4xl mb-1 ">
            Setting your Schedule has never been easier
          </h1>
          <p className="text-slate-400 ">
            Jadwali is a tool to generate schedules for your university, choose
            your courses and prefered days and times and Jadwali will do the
            rest, it will also filter schedules with closes sections.
          </p>
        </div>
        <img
          src={schedule}
          className=" rounded-lg md:w-[35%] w-[80%] mt-4 md:mt-0"
          alt="schedule"
        />
        <a
          href="#search"
          className="absolute text-white left-1/2 -translate-x-1/2 bottom-2">
         <ArrowCircleDownIcon className="w-10"color="#ffffff"/>
        </a>
      </div>

      <div
        id="search"
        className=" text-white flex flex-col-reverse items-center  justify-center  bg-slate-800 py-8 md:flex-row">
        <img
          src={gif}
          alt="loading"
          className="rounded-lg md:w-5/12 w-[80%] "
        />
        <div className="text-center lg:text-left md:ml-6 mx-2">
          <h1 className="text-2xl md:text-4xl mb-1 ">
          It's as simple as it can be.
          </h1>
          <p className="mb-2">
            add your courses by line number, course name, symbol or department
            name
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
