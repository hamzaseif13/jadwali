import React from 'react'
import Section from './Section'
function Day({ sections }) {

    const arr = [
        { days: "SUN TUE", startTime: 8.5, endTime: 10 },
        { /* days: "SUN TUE", startTime: 10, endTime: 11.5 },
        { days: "MON", startTime: 12, endTime: 13  */},
    ]

    return (
        <div className="text-base  text-white bg-mylight w-52 border-2 border-mydark  text-center pt-2  mt-5 ">
            <h1 className='mb-3'>sun</h1>
            <Section section={arr[0]}/>
            <Section section={arr[0]}/>
            <Section section={arr[0]}/>
            <Section section={arr[0]}/>
        </div>
    )
}

export default Day
