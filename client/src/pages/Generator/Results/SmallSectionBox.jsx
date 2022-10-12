import React, { useState, useContext } from "react";
import Modal from "./Modal";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
function SmallSectionBox({ course, section }) {
  
  const {  pinnedSections } = useContext(JadwaliContext);
  const { startTime, endTime } = section;
  let color = course.color;
  const emptySeats = section.capacity - section.registered;
  let style = `hover:cursor-pointer shadow-lg leading-tight absolute start${
    startTime * 10
  }  w-full  hover:bg-gray-400 
    border-l-[6px] border rounded-t rounded-l  height${
      (endTime - startTime) * 10
    } text-left  overflow-clip px-[1px] text-ellipsis md:text-base ${color} border-t-0 border-b-gray-700 border-r-0  
    ${emptySeats<=0?"bg-[#806b6b]":"bg-gray-500"}`;
  const [modalOpen, setModalOpen] = useState(false);
 
  const doubleToStringTime = (time) => {
    const str = time.toString().split(".")
    let hours = str[0]
    let minutes = str.length>1 ? "30":"00"
    return `${hours}:${minutes}`
  };

  return (
    <div className={style} onClick={()=>setModalOpen(true)}>
      {pinnedSections.some(sec=>sec.id===section.id)&&
      <div className='w-4 rounded-full h-4 bg-yellow-500 absolute -top-1  -right-1'>
      </div>
      }
      <div className="">
        <h1
          className="text-left  font-extrabold text-xs md:text-[1.4rem] 
        text-mylight sm:text-center sm:text-lg ">
          {course.symbol.toUpperCase()}
        </h1>
        
        {modalOpen && (
          <Modal
          
          modalOpen={modalOpen} close={()=>setModalOpen(false)}
            section={section}
            course={course}
          />
        )}
        <h1 className="text-[0.7rem]  text-center sm:text-[1rem] ">
          {doubleToStringTime(section.startTime)}-{doubleToStringTime(section.endTime)}&nbsp;({section.number})
        </h1>
      </div>
    </div>
  );
}

export default SmallSectionBox;
