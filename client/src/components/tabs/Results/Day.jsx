import React, { useState } from "react";
import { useContext } from "react";
import Section from "./Section";
import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
function Day({ sections }) {
  const {registeredCourses} = useContext(JadwaliContext)
  let output = [];
  
  for (let y = 0; y < sections.length; y++) {
    output.push(<Section key={sections.id} section={sections[y]} index={registeredCourses.findIndex(ele=>ele===sections[y])} />);
  }
  return (
    <div className="text-base relative text-white bg-mylight w-52 border-2 border-mydark  text-center pt-2  mt-5 ">
      <h1 className="mb-3">sun</h1>
      {
        sections.map(section=>{
          return <Section key={section.id} section={section}  index={registeredCourses.findIndex(ele=>ele.symbol===section.courseSymbol)}/>
        })
      }
    </div>
  );
}

export default Day;
