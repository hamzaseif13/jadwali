import React,{useContext}from 'react'
import Course from './Course'
import JadwaliContext from '../../../context/jadwaliContext/JadwaliContext'
function CourseWrapper() {
  const {dispatch, registeredCourses} = useContext(JadwaliContext);

  return (
    <div className="lg:mt-6">
      {registeredCourses.length>0&&registeredCourses.map(course=><Course key={course.symbol}course ={course}/>)}
    </div>
  )
}

export default CourseWrapper