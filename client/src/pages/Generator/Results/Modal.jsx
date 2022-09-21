import React from "react";
import ReactDOM from "react-dom";
function Modal({ course, section }) {
  const handleCopy=()=>{
    navigator.clipboard.writeText(course.lineNumber);
  }
  const emptySeats=section.capacity-section.registered
  const perc= emptySeats/section.capacity
  const color=perc<0.2?"red":perc<0.5?"orange":"green"
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 z-40 bg-overlay" />
      <div
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2  
      text-white z-40    w-[90%] md:w-[40%] lg:w-[30%] bg-gray-700 p-5 rounded shadow-lg">
        <h1 className=' text-blue-300 text-center mb-4 text-xl'>{course.name}</h1>
        <div className="text-blue-400">
          <div className='flex space-x-4'>
            <h2>line number : {course.lineNumber}</h2>
            <h1 onClick={handleCopy}className="text-red-500 hover:cursor-pointer">Copy</h1>
          </div>
          
          <h2>section : <span className='ml-2 text-white'>{section.number}</span></h2>
          <h2>instructor : <span className='ml-2 text-white'>{section.instructor}</span></h2>
          <h2>hall : <span className='ml-2 text-white'>{section.hall}</span></h2>
          <h2>Empty Seats : <span className={`ml-2 text-${color}-400 text-lg`}>{emptySeats}</span></h2>
        </div>
      </div>
    </>,
    document.getElementById("table")
  );
}

export default Modal;
