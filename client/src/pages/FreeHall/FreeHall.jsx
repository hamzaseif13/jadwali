import React, { useEffect, useState } from "react";
import Loading from "../../components/layout/Loading";


function FreeHall() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour12: false,
      timeZone: "Europe/Istanbul",
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const [loading, setLoading] = useState(false);
  const [halls, setHalls] = useState([]);
  const handleChange = (event) => {
    setCurrentTime(event.target.value);
    
  };
  useEffect(() => {
    
  }, []);
  return (
    <div className='mx-4 mt-10 md:mx-20 lg:mx-48 shadow-4xl'>
        <h1 className="text-center text-2xl bg-gray-500 rounded-t-lg text-white">Free Hall</h1>
      <header className="p-8  bg-mylight rounded-b-lg  text-white">
        <div className="flex justify-center text-black">
          <div className="flex flex-col">
            <label className="text-center text-white mb-2 text-xl">Select Your Time</label>
            <input
              type="time"
              className="border-2 text-lg border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg  focus:outline-none"
              value={currentTime}
              onChange={handleChange}
            />
          </div>
        </div>
      </header>
    {/*   {loading ? <Loading/>:
      halls.length>0? halls.map((hall) =><HallCard hall={hall}/>):<h1 className="text-lg text-center mt-4 text-white">No Free Halls at This time</h1>
    } */}
    <div className="flex justify-center flex-wrap mt-2 ">
      <HallCard/>
      <HallCard/>
      <HallCard/>
    </div>
    </div>

  );
}
function HallCard() {
  return (
    <div className='bg-green-600 w-full md:w-[31%] my-2 md:mx-2 py-6 rounded-lg   text-center'>
      <h1 className=" text-3xl">
          CS101
      </h1>
      <h1 className="">
        Free until 12:00
      </h1>
    </div>
  )
}
export default FreeHall;
