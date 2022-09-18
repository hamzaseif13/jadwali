import { useContext } from "react";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
import SmallSectionBox from "./SmallSectionBox";
import BigSectionBox from "./BigSectionBox";
function Day({ sections ,name,lastOne}) {
  const {registeredCourses, favoriteCourses } = useContext(JadwaliContext)
  
  
  return (
    <div className={`text-base relative ${lastOne&&" rounded-r-lg "}text-white bg-mylight w-52 border-2 border-x-[0.5px] border-mydark  text-center pt-2   `}>
      <h1 className="mb-3">{name}</h1>
      {
        sections.map(section=>{
          const course = registeredCourses.find(ele=>ele.lineNumber===section.lineNumber)||favoriteCourses.find(ele=>ele.lineNumber===section.lineNumber)
          if(section.endTime-section.startTime===1)
          return <SmallSectionBox key={section.id} section={section} course={course}/>
          return <BigSectionBox key={section.id} section={section} course={course}/>
        })
      }
    </div>
  );
}

export default Day;
