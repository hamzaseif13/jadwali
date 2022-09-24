import React, { useContext } from "react";
import ReactDOM from "react-dom";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import { ClipboardCopyIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
function Modal({ course, section, close, isOpen }) {
  const { dispatch, pinnedSections } = useContext(JadwaliContext);

  const pinSection = () => {
    if (pinnedSections.includes(section)) {
      dispatch({
        type: "SET_PINNED_SECTIONS",
        payload: pinnedSections.filter((sec) => sec !== section),
      });
      toast.success("UnPinned section successfully", { autoClose: 2000 });
      close();
    } else {
      
      dispatch({
        type: "SET_PINNED_SECTIONS",
        payload: [...pinnedSections, section],
      });
      toast.success("Pinned section successfully", { autoClose: 2000 });
      close();
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(course.lineNumber);
    toast.success("Copied to clipboard", { autoClose: 2000 });
  };
  const emptySeats = section.capacity - section.registered;
  const perc = emptySeats / section.capacity;
  const color = perc < 0.2 ? "red" : perc < 0.5 ? "orange" : "green";

  return ReactDOM.createPortal(
    <>
      <div
        onClick={close}
        className={`${
          isOpen ? "" : "hidden"
        } fixed top-0 bottom-0 right-0 left-0 z-40 bg-overlay `}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2  
        text-white z-40    w-[90%] md:w-[40%] lg:w-[30%] bg-gray-700 p-5 rounded shadow-lg">
          <h1 className=" text-blue-300 text-center mb-4 text-xl">
            {course.name.toUpperCase()}
          </h1>
          <div className="text-blue-400">
            <div className="flex ">
              <h2>
                line number :{" "}
                <span className="ml-2 mr-2 text-white">
                  {course.lineNumber}
                </span>
              </h2>
              <div
                onClick={handleCopy}
                className="text-red-500 hover:cursor-pointer flex hover:text-red-700">
                <h1>Copy </h1>
                <ClipboardCopyIcon className="w-5" />
              </div>
            </div>
            <span
              onClick={close}
              className="text-red-500 absolute top-2 text-xl hover:cursor-pointer right-2">
              &#10006;
            </span>
            <h2>
              Symbol :{" "}
              <span className="ml-2 text-white">
                {course.symbol.toUpperCase()}
              </span>
            </h2>
            <h2>
              Section :{" "}
              <span className="ml-2 text-white">{section.number}</span>
            </h2>
            <h2>
              Instructor :{" "}
              <span className="ml-2 text-white">{section.instructor}</span>
            </h2>
            <h2>
              Hall :{" "}
              <span className="ml-2 text-white">
                {section.hall.toUpperCase()}
              </span>
            </h2>
            <div className="flex justify-between">
              <h2>
                Empty Seats :{" "}
                <span className={`ml-2 text-${color}-400 text-lg`}>
                  {emptySeats}
                </span>
              </h2>
              <div
                onClick={pinSection}
                className={`${
                  pinnedSections.some((sec) => sec.id === section.id)
                    ? "text-red-600 hover:text-red-700 "
                    : "hover:text-gray-500"
                }   cursor-pointer`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479c-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
