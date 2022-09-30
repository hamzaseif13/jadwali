
import Day from "./Day";

function Table({ schedule }) {
  
  const filterDay = (day) => {
    return schedule.filter((section) => section.days.includes(day));
  };
  return (
    <div className="flex justify-center mt-3 " id="table">
      <div className=" text-white bg-mylight  border-2 border-x-0 rounded-l-lg border-mydark  text-center pt-2 px-1  ">
        <h1 className="mb">time</h1>
        <div className=" text-sm">
          <h1 className="h-6 ">8:30</h1>
          <h1 className="h-6 ">9:00</h1>
          <h1 className="h-6 ">9:30</h1>
          <h1 className="h-6 ">10:00</h1>
          <h1 className="h-6 ">10:30</h1>
          <h1 className="h-6 ">11:00</h1>
          <h1 className="h-6 ">11:30</h1>
          <h1 className="h-6 ">12:00</h1>
          <h1 className="h-6 ">12:30</h1>
          <h1 className="h-6 ">13:00</h1>
          <h1 className="h-6 ">13:30</h1>
          <h1 className="h-6 ">14:00</h1>
          <h1 className="h-6 ">14:30</h1>
          <h1 className="h-6 ">15:00</h1>
          <h1 className="h-6 ">15:30</h1>
          <h1 className="h-6 ">16:00</h1>
          <h1 className="h-6 ">16:30</h1>
          <h1 className="h-6 ">17:00</h1>
          <h1 className="h-6 ">17:30</h1>
          <h1 className="h-6 ">18:00</h1>
          <h1 className="h-6 ">18:30</h1>
        </div>
      </div>
      <Day sections={filterDay("sun")} name="Sun" />
      <Day sections={filterDay("mon")} name="Mon" />
      <Day sections={filterDay("tue")} name="Tue" />
      <Day sections={filterDay("wed")} name="Wen" />
      <Day sections={filterDay("thu")} lastOne={true} name="Thu" />
    </div>
  );
}

export default Table;
