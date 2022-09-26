import TabButton from "./Generator//TabButton";
import TabWrapper from "./Generator/TabWrapper";
import AddCourses from "./Generator/AddCourses/AddCourses";
import Options from "./Generator/Options/Options";
import Results from "./Generator/Results/Results";
import JadwaliContext from "../context/jadwaliContext/JadwaliContext";
import { useContext, useEffect, useState } from "react";
import Favorites from "./Generator/Favorites/Favorites";
function Generator() {
  document.title = "Jadwali | Generator";
  const { activeTab } = useContext(JadwaliContext);
  const renderActiveTap = () => {
    switch (activeTab) {
      case 1:
        return <AddCourses />;
      case 2:
        return <Options />;
      case 3:
        return <Results favorite={false} />;
      case 4:
        return <Favorites />;
      default:
        return <AddCourses />;
    }
  };
  return (
    <div className="  pb-20 sm:mx-10 lg:mx-20  ">
      <div className=' text-white mt-4'>
        <h1 className=" text-2xl  text-white ml-2 md:ml-0  ">
          Generator
        </h1>
        
      </div>

      <TabWrapper>
        <TabButton name="Add courses" order={1} />
        <TabButton name="Options" order={2} />
        <TabButton name="Results" order={3} />
        <TabButton name="Favorites" order={4} />
      </TabWrapper>
      {renderActiveTap()}
    </div>
  );
}

export default Generator;
