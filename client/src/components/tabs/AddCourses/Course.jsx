import React,{useContext} from 'react'
import JadwaliContext from '../../../context/JadwaliContext'
function Course({course }) {
  const {dispatch, registeredCourses} = useContext(JadwaliContext);
  const removeCourse=()=>{
      const newRegisteredCourses = registeredCourses.filter((crs)=>(crs!==course))
      dispatch({type:"SET_REG",payload:newRegisteredCourses})
  }
  return (

    <div className="min-w-sm max-w-sm p-5 bg-blue-500 mb-2 text-mydark rounded">
      <h1 className="text-lg break-normal">
        {course.name}
      </h1>
      <div className="flex justify-between">
        <h1 className="">{course.symbol}</h1>
        <h1>{course.hours}h</h1>
      </div>
      <div className="flex justify-end mt-2">
        <button onClick={removeCourse}className="border rounded  p-2 border-mylight hover:text-blue-500 hover:bg-mylight">Remove</button>
      </div>
    </div>


  )
}

export default Course