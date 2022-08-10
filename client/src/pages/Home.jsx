import React from "react";
import gif from "../assests/searchAnif.gif";
import { Link } from "react-router-dom";
import schedule from "../assests/sch2.png";
import { ArrowCircleDownIcon } from "@heroicons/react/solid";
import Container from "../components/home/Container";
import filter from "../assests/filter.png";
function Home() {
  return (
    <div className=" bg-slate-900  ">
      <section className="bg-gray-900 ">
        <div class="gap-8 items-center py-2 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full  block" src={schedule} alt="dashboard" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-white">
              Setting your Schedule has never been easier.
            </h2>
            <p className="mb-2 font-light  md:text-lg text-gray-400">
              {" "}
              Jadwali is a tool to generate schedules for your university,
              choose your courses and prefered days and times and Jadwali will
              do the rest, it will also filter schedules with closed sections.
            </p>
            <Link to="/generate">
              <button className="inline-flex items-center bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-900">
                Get started
                <svg
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div
        id="search"
        className="flex justify-center flex-col lg:flex-row py-6 bg-slate-800 space-x-10 ">
        <Container
          gif={gif}
          id="search"
          title="It's as simple as it can be."
          paragraph=" add your courses by course number, course name, symbol or
              department name"
        />
        <Container
          gif={filter}
          id="search"
          title="Choose your options that meets your needs"
          paragraph=" add your courses by course number, course name, symbol or
              department name"
        />
      </div>

      <div className=" h-[30vh]">1</div>
    </div>
  );
}

export default Home;
