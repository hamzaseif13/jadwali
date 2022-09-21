import TabButton from "./Generator//TabButton";
import TabWrapper from "./Generator/TabWrapper";
import AddCourses from "./Generator/AddCourses/AddCourses";
import Options from "./Generator/Options/Options";
import Results from "./Generator/Results/Results";
import JadwaliContext from "../context/jadwaliContext/JadwaliContext";
import { useContext, useEffect, useState } from "react";
import Favorites from "./Generator/Favorites/Favorites";
function Generator() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    const fetchDate = async () => {
      const date = await fetch("http://localhost:5050/api/v1/last_updated");
      const dateJson = await date.json();
      setDate(dateJson.lastUpdated);
    };
    fetchDate();
  }, []);

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
    <div className="  pb-20 ">
      <div>
        <h1 className="pt-4 text-2xl  text-white   ml-3 md:ml-40 sm:ml-10 ">
          Generator
        </h1>
        <div>
          <h1>Last updated :{date} </h1>
        </div>
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
