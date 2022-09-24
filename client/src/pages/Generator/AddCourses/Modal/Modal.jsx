import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ close, modalOpen, course }) {
  const [sections, setSections] = React.useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      const data = await fetch(
        `/api/v1/sections/${course.lineNumber}`
      );
      const d = await data.json();
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
        <div onClick={(e) => e.stopPropagation()} className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2  
        text-white z-40    w-[90%] bg-gray-700 p-5 rounded shadow-lg ">
          <span onClick={close}className='absolute top-2 text-2xl right-2'>X</span>
          <h1 className=" text-blue-300 text-center mb-4 text-xl">Sections for <span className="text-blue-500">{course.name}</span></h1>
          
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
