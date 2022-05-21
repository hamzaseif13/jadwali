import React from 'react'
import TabLayout from '../TabLayout'
import Day from './Day'
function Results() {
  const arr = [
    { days: "SUN TUE", startTime: 8.5, endTime: 10 },
    { days: "SUN TUE", startTime: 10, endTime: 11.5 },
    { days: "MON", startTime: 8.5, endTime: 10 },
    { days: "WED", startTime: 8.5, endTime: 10 },
    { days: "THU", startTime: 8.5, endTime: 10 }
  ]
  return (
    <div className="text-white  sm:ml-10 md:ml-26 lg:ml-60  sm:mr-10 md:mr-26 lg:mr-60 ">
      <div className="flex ">
        <div className="flex justify-center items-center mt-2 border w-fit rounded border-mylight">
          <div className="inline  py-1 px-2 ">Schedule</div>
          <input
            type="number"
            className={'pl-2 py-1 border border-mylight font-normal text-blue-500  transition ease-in-out  m-0  bg-mylight w-20 '}
            defaultValue="1"
          />
          <div className="inline  py-1 px-2 r">of 1</div>
          <button className=" inline p-1 text-blue-500 border-mylight border px-2 border-t-0 border-b-0"><span>&#10094;</span></button>
          <button className=" inline text-blue-500 p-1 border-mylight border px-2 border-t-0 border-b-0 border-l-0 border-r-0"><span>&#10095;</span></button>
        </div>
      </div>
      <div className="flex ">
        <div className=" text-white bg-mylight  border-2 border-mydark  text-center pt-2 px-1 mt-5 ">
          <h1 className='mb'>time</h1>
          <div className=" text-sm">
            <h1 className="h-6 border">8:30</h1>
            <h1 className="h-6 border">9:00</h1>
            <h1 className="h-6 border">9:30</h1>
            <h1 className="h-6 border">10:00</h1>
            <h1 className="h-6 border">10:30</h1>
            <h1 className="h-6 border">11:00</h1>
            <h1 className="h-6 border">11:30</h1>
            <h1 className="h-6 border">12:00</h1>
            <h1 className="h-6 border">12:30</h1>
            <h1 className="h-6 border">13:00</h1>
            <h1 className="h-6 border">13:30</h1>
            <h1 className="h-6 border">14:00</h1>
            <h1 className="h-6 border">14:30</h1>
            <h1 className="h-6 border">15:00</h1>
            <h1 className="h-6 border">15:30</h1>
            <h1 className="h-6 border">16:00</h1>
            <h1 className="h-6 border">16:30</h1>
            <h1 className="h-6 border">17:00</h1>
            <h1 className="h-6 border">17:30</h1>
            <h1 className="h-6 border">18:00</h1>
            <h1 className="h-6 border">18:30</h1>
          </div>
        </div>
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    </div>
  )
}

export default Results