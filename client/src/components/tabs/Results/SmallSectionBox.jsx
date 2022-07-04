import React from 'react'

function SmallSectionBox({course,section}) {
    const {startTime, endTime} = section
    let style = ` leading-tight absolute start${
        startTime * 10
      }  w-full bg-gray-500  
    border-l-[6px] border rounded-t rounded-l  height${
        (endTime - startTime) * 10
      } text-left  overflow-clip px-[1px] text-ellipsis md:text-base ${
        course.color
      } border-t-0 border-b-mydark border-r-mydark  `;
    return (
        <div className={style}>
          <div className="">
            <h1
              className="text-left  font-extrabold text-xs md:text-[1.4rem]
        text-mylight sm:text-center sm:text-lg ">
              {course.symbol}
            </h1>
  
            <h1 className="text-[0.7rem]  text-center sm:text-[1rem] ">
              {section.startTime}-{section.endTime}&nbsp;({section.number})
            </h1>
          </div>
        </div>)
}

export default SmallSectionBox