import React from "react";
import ReactDOM from "react-dom";
import { ClipboardCopyIcon } from "@heroicons/react/solid";
function Modal({ course, section ,close,isOpen}) {
 
  const handleCopy = () => {
    navigator.clipboard.writeText(course.lineNumber);
  };
  const emptySeats = section.capacity - section.registered;
  const perc = emptySeats / section.capacity;
  const color = perc < 0.2 ? "red" : perc < 0.5 ? "orange" : "green";
  
  return ReactDOM.createPortal(
    <>
      <div  onClick={close}  className={`${isOpen?"":"hidden"} fixed top-0 bottom-0 right-0 left-0 z-40 bg-overlay `} >
        <div onClick={(e) => e.stopPropagation()}
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
            <span onClick={close}className="text-red-500 absolute top-2 text-xl hover:cursor-pointer right-2">
              &#10006;
            </span>
            <h2>
              Symbol : <span className="ml-2 text-white">{course.symbol.toUpperCase()}</span>
            </h2>
            <h2>
              Section : <span className="ml-2 text-white">{section.number}</span>
            </h2>
            <h2>
              Instructor :{" "}
              <span className="ml-2 text-white">{section.instructor}</span>
            </h2>
            <h2>
              Hall : <span className="ml-2 text-white">{section.hall.toUpperCase()}</span>
            </h2>
            <h2>
              Empty Seats :{" "}
              <span className={`ml-2 text-${color}-400 text-lg`}>
                {emptySeats}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
