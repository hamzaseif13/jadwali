import React,{useState,useRef} from 'react'
import Section from './Section'
function Day() {
    const sum =useRef(0);
    const sun=[
        {name:"software trsting",startTime:9,endTime:10.5,color:"red"},
        {name:"introduction to programming",startTime:12.5,endTime:13.5,color:"green"},
          ,
      ]
      
    return (
        <div className="text-base relative text-white bg-mylight w-52 border-2 border-mydark  text-center pt-2  mt-5 ">
            <h1 className='mb-3'>sun</h1>
            {sun.map(section=><Section key={section.name}section={section} sum={sum}/>)}
        </div>
    )
}

export default Day
