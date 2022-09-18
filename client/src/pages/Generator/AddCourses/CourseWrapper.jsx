import React,{useContext}from 'react'
import Course from './Course'
import JadwaliContext from '../../../context/jadwaliContext/JadwaliContext'
function CourseWrapper() {
  const { registeredCourses} = useContext(JadwaliContext);

  return (
    <div className="flex flex-wrap justify-center mt-2    items-center">
      {registeredCourses.length>0&&registeredCourses.map(course=><Course key={course.symbol}course ={course}/>)}
    </div>
  )
}

export default CourseWrapper