import React from 'react'
import Course from './Course'
function CourseWrapper() {
  return (
    <div className="lg:mt-6">
      <Course name="introductino to programming" symbol="cs101" hours="3"/>
      <Course name="introductino to programming" symbol="cs101" hours="3"/>
      <Course name="introductino to programming" symbol="cs101" hours="3"/>
    </div>
  )
}

export default CourseWrapper