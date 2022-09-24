import React,{useContext} from "react";
import ReactDOM from "react-dom";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import { ClipboardCopyIcon, SaveIcon } from "@heroicons/react/solid";

function Modal({ course, section }) {
  const { dispatch, pinnedSections } = useContext(JadwaliContext);
  
  const pinSection = ()=>{
    if (pinnedSections.includes(section.id)) {
      dispatch({type:"SET_PINNED_SECTIONS",payload:pinnedSections.filter((id)=>id!==section.id)})
      
    }
    else{
      dispatch({type:"SET_PINNED_SECTIONS",payload:[...pinnedSections,section.id]})

    }
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(course.lineNumber);
  };
  const emptySeats = section.capacity - section.registered;
  const perc = emptySeats / section.capacity;
  const color = perc < 0.2 ? "red" : perc < 0.5 ? "orange" : "green";
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 z-40 bg-overlay " />
      <div onClick={(e)=>e.stopPropagation()}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2  
      text-white z-40    w-[90%] md:w-[40%] lg:w-[30%] bg-gray-700 p-5 rounded shadow-lg">
        <h1 className=" text-blue-300 text-center mb-4 text-xl">
          {course.name.toUpperCase()}
        </h1>
        <div className="text-blue-400">
          <div className="flex ">
            <h2>
              line number :{" "}
              <span className="ml-2 mr-2 text-white">{course.lineNumber}</span>
            </h2>
            <div
              onClick={handleCopy}
              className="text-red-500 hover:cursor-pointer flex hover:text-red-700">
              <h1>Copy </h1>
              <ClipboardCopyIcon className="w-5" />
            </div>
          </div>
          <span className="text-red-500 absolute top-2 text-xl hover:cursor-pointer right-2">
            &#10006;
          </span>
          <h2>
            section : <span className="ml-2 text-white">{section.number}</span>
          </h2>
          <h2>
            instructor :{" "}
            <span className="ml-2 text-white">{section.instructor}</span>
          </h2>
          <h2>
            hall : <span className="ml-2 text-white">{section.hall}</span>
          </h2>
          <h2>
            Empty Seats :{" "}
            <span className={`ml-2 text-${color}-400 text-lg`}>
              {emptySeats}
            </span>
          </h2>
          <div className='absolute bottom-0 right-0'>
            <SaveIcon className="w-10 "  color={ `${pinnedSections.includes(section.id)?"green":'gray'}`} onClick={pinSection}/>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("table")
  );
}

export default Modal;
