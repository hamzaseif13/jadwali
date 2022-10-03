
import gif from "../assests/searchAnif4.gif";
import filter from "../assests/filter.png";
import schedule from "../assests/sch2.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import Container from "./Home/Container";
import jadwali from '../assests/jadwali.mp4';
function Home() {
  document.title="Jadwali | Home";
  return (
    <div className=" bg-slate-900 pb-20 sm:mx-10 lg:mx-20 ">
      <section className=" ">
        <div className="gap-8 items-center py-2 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">          
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-white">
              Setting your Schedule has never been easier.
            </h2>
            <p className="mb-2 font-light  md:text-lg text-gray-400">
              
              Jadwali is a tool to generate schedules for your university,
              choose your courses and prefered days and times and Jadwali will
              do the rest, it will also filter schedules with closed sections.
            </p>
            <Link to="/generate">
              <button className="inline-flex items-center mb-8 bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-900">
                Get started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
            </Link>
          </div>
          

            <video className="w-full border border-slate-800 shadow-lg rounded" controls muted autoPlay>
              <source src={jadwali} type="video/mp4"/>
            </video>
          </div>
        
      </section>

      <div 
        id="search"
        className="   py-6 bg-slate-800 fully-bleed  ">
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

      
    </div>
  );
}

export default Home;