import React,{ useContext} from 'react'
import JadwaliContext from '../../../context/jadwaliContext/JadwaliContext'
function Section({ section,index}) {
  const {registeredCourses} = useContext(JadwaliContext)
  let { startTime, endTime} = section
  
    return (
     
        <div className={`absolute start${startTime*10}  w-full bg-gray-500 border-l-8 border rounded-t rounded-l  height${(endTime-startTime)*10} text-left px-1 overflow-clip text-ellipsis md:text-base ${registeredCourses[index].color} border-y-mydark border-r-mydark `}>
          <h1 className="text-xs">{registeredCourses[index].name} {section.number}</h1>
          <h1 className="text-[0.6rem] sm:text-xs text-center" >{section.startTime} - {section.endTime}</h1>
        </div>

     
    )
  /* return (
    <div className={`relative top-[10.5rem] bg-blue-500 border leading-4 lg:leading-4 md:leading-4 sm:leading-4 h-[${height}rem] text-left px-1 overflow-clip text-ellipsis md:text-base`}>
      <div className="text-[0.5rem]  w-8  sm:w-full md:w-full lg-w-full">
        <h1 className="lg:hidden">{section.name.substring(0, 12)}..</h1>
        <h1 className="hidden text-center sm:hidden  lg:block ">{section.name.substring(0, 27)}..</h1>
      </div>
      <h1 className="text-center text-[0.5rem] text-xs">CS101-11</h1>
      <h1 className="text-[0.6rem] sm:text-xs text-center" >{section.startTime} - {section.endTime}</h1>
    </div>
  ) */
}

export default Section