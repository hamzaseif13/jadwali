import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import JadwaliContext from "../../../../context/jadwaliContext/JadwaliContext";
import usePinSection from "../../../../hooks/usePinSection";

function Modal({ close, modalOpen, course }) {
  const [sections, setSections] = React.useState([]);
  const { pinnedSections } = React.useContext(JadwaliContext);

  const {pinSection} = usePinSection(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(course.lineNumber);
    toast.success("Copied to clipboard", { autoClose: 2000 });
  };
  const isPinned = (section) => {
    return pinnedSections.some((sec) => sec.id === section.id);
  };
  const doubleToStringTime = (time) => {
    const str = time.toString().split(".");
    let hours = str[0];
    let minutes = str.length > 1 ? "30" : "00";
    return `${hours}:${minutes}`;
  };
  useEffect(() => {
    const fetchSections = async () => {
      const data = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/sections/${course.lineNumber}`);
      const d = await data.json();
      d.sort((a, b) => a.number - b.number);
      setSections(d);
    };
    fetchSections();
  }, [course]);

  return ReactDOM.createPortal(
    <>
      <div
        onClick={close}
        className={`${
          modalOpen ? "" : "hidden"
        } fixed top-0 bottom-0 right-0 left-0 z-40 bg-overlay `}>
        <div
          onClick={(e) => e.stopPropagation()}
          z
          className=" 
        text-white z-40   h-[80vh] overflow-y-auto w-[95%] md:w-[90%] bg-gray-700 py-5 px-1 md:p-5  shadow-lg absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span
            onClick={close}
            className="absolute top-2 text-2xl right-4 cursor-pointer text-red-600">
            &#10006;
          </span>
          <h1 className=" text-blue-300 text-center mb-4 ">
            Sections for{" "}
            <span className="text-blue-500 capitalize text-2xl">
              {course.name}
            </span>
          </h1>
          <div className=" shadow-md rounded-lg mb-5">
            <table className="w-full text-sm text-center  text-gray-400  rounded">
              <thead className=" text-sm sm:text-base    bg-mydark text-gray-400">
                <tr>
                  <th scope="col" className="py-3 md:px-2 rounded-tl">
                    Line Number
                  </th>
                  <th scope="col" className="py-3 md:px-2">
                    Symbol
                  </th>
                  <th
                    scope="col"
                    className="py-3 md:px-2 hidden sm:table-cell ">
                    Faculty
                  </th>
                  <th scope="col" className="py-3 md:px-2 hidden sm:table-cell">
                    Department
                  </th>

                  <th scope="col" className="py-3 md:px-2 rounded-tr">
                    Credit
                    <br className="sm:hidden" /> Hours
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b bg-gray-800 border-gray-700 ">
                  <th
                    scope="row"
                    className="py-4 md:px-2  whitespace-nowrap  text-blue-500 ">
                    <div
                      className="flex justify-center cursor-pointer hover:text-yellow-700 text-lg items-center"
                      onClick={handleCopy}>
                      {course.lineNumber}
                      <span className="text-sm"> - Copy</span>
                    </div>
                  </th>

                  <td className="py-4 md:px-2">{course.symbol.toUpperCase()}</td>

                  <td className="py-4 md:px-2 capitalize hidden sm:table-cell">
                    {course.faculty}
                  </td>

                  <td className="py-4 md:px-2 hidden sm:table-cell">
                    {course.department}
                  </td>

                  <td className="py-4 md:px-2 ">{course.creditHours}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="bg-green-700 p-1 text-center rounded-lg">Available</div>
              <div className="bg-[#e1ad01] p-1 text-center text-black rounded-lg">Full</div>
              <div className="bg-red-800 p-1 text-center rounded-lg">Cancelled</div>
          </div>
          <div className="">
            <div className=" shadow-md rounded-lg ">
              <table className="w-full text-sm sm:text-base text-center   text-gray-400  rounded">
                <thead className=" text-sm sm:text-base    bg-mydark text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 md:px-2 rounded-tl">
                      <span className="sm:hidden">#</span>
                      <span className="hidden sm:block">Number </span>
                    </th>
                    <th scope="col" className="py-3 md:px-2">
                      Days
                    </th>
                    <th scope="col" className="py-3 md:px-2">
                      Time
                    </th>
                    <th scope="col" className="py-3 md:px-2">
                      Empty
                      <br className="sm:hidden" /> Seats
                    </th>
                    <th scope="col" className="py-3 md:px-2 hidden md:block">
                      Instructor
                    </th>
                    <th scope="col" className="py-3 md:px-2 rounded-tr">
                      Pin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sections.length ? (
                    sections.map((section) => (
                      <tr
                        className={`border-b text-white border-gray-700 bg-gray-800 `}>
                        <th
                          scope="row"
                          className={`py-4 md:px-2 border-0 whitespace-nowrap  text-white text-lg ${
                            section.status.toLowerCase() === "cancelled"
                              ? "bg-red-800"
                              : section.capacity - section.registered > 0
                              ? "bg-green-700"
                              : "bg-[#e1ad01]"
                          }`}>
                          {section.number}
                        </th>
                        <td className="py-4 md:px-2 capitalize">
                          {section.days}
                        </td>
                        <td className="py-4 md:px-2">
                          {doubleToStringTime(section.startTime)} -{" "}
                          {doubleToStringTime(section.endTime)}
                        </td>

                        <td className={`py-4 md:px-2 `}>
                          {section.capacity - section.registered}
                        </td>
                        <td className="py-4 md:px-2 hidden md:block">
                          {section.instructor}
                        </td>
                        <td className="py-4 md:px-2 ">
                          <button
                            onClick={() => pinSection(section)}
                            className={`${
                              isPinned(section) ? "bg-red-600" : "bg-green-600"
                            } px-4 py-1 rounded  text-white shadow-lg hidden sm:inline `}>
                            {isPinned(section) ? "UnPin" : "Pin"}
                          </button>
                          <div
                            onClick={() => pinSection(section)}
                            className={`${
                              isPinned(section)
                                ? "text-red-600 hover:text-red-700 "
                                : "hover:text-gray-500"
                            }   cursor-pointer inline-block sm:hidden`}>
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
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="text-center text-blue-400">
                      <td>Loading ....</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
