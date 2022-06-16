import React, { useState } from "react";
import { useContext } from "react";
import Section from "./Section";
import JadwaliContext from "../../../context/JadwaliContext";
function Day({ sections }) {
  let output = [];
  for (let y = 0; y < sections.length; y++) {
    output.push(<Section key={sections.id} section={sections[y]} index={y} />);
  }
  return (
    <div className="text-base relative text-white bg-mylight w-52 border-2 border-mydark  text-center pt-2  mt-5 ">
      <h1 className="mb-3">sun</h1>
      {output}
    </div>
  );
}

export default Day;
