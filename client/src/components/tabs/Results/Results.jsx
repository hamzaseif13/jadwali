import React,{useContext,useState} from 'react'
import TabLayout from '../TabLayout'
import Day from './Day'
import JadwaliContext from '../../../context/jadwaliContext/JadwaliContext'
function Results() {
  const {generatedSchedules,dispatch} = useContext(JadwaliContext)
  const [index,setIndex] = useState(0)
  const schedule =generatedSchedules[index]
  if(generatedSchedules.length === 0) return <h1 className="text-white text-center mt-5">no results :)</h1>
  const sunDay=schedule.filter((section)=>section.days.includes("Sun"))
  const monDay=schedule.filter((section)=>section.days.includes("Mon"))
  const tueDay=schedule.filter((section)=>section.days.includes("Tue"))
  const wedDay=schedule.filter((section)=>section.days.includes("Wed"))
  const thuDay=schedule.filter((section)=>section.days.includes("Thu"))

  const prev=()=>{
      if(index>0){
        setIndex(pre=>pre-1)
      }
  }
  // 1 2 3 4 5
  //3   
  const next=()=>{
    if(index<generatedSchedules.length-1){
      setIndex(pre=>pre+1)
    }
  }
  return (
    <div className="text-white  sm:ml-10 md:ml-26 lg:ml-60  sm:mr-10 md:mr-26 lg:mr-60 ">
      <div className="flex ">
        <div className="flex justify-center items-center mt-2 border w-fit rounded border-mylight">
          <div className="inline  py-1 px-2 ">Schedule</div>
          <div className='pl-2 py-1 border border-mylight font-normal text-blue-500  transition ease-in-out  m-0  bg-mylight w-20 '> {index+1}</div>
         
          <div className="inline  py-1 px-2 r">of {generatedSchedules.length}</div>
          <button onClick={prev}className=" inline p-1 text-blue-500 border-mylight border px-2 border-t-0 border-b-0"><span>&#10094;</span></button>
          <button onClick={next}className=" inline text-blue-500 p-1 border-mylight border px-2 border-t-0 border-b-0 border-l-0 border-r-0"><span>&#10095;</span></button>
        </div>
      </div>
      <div className="flex ">
        <div className=" text-white bg-mylight  border-2 border-mydark  text-center pt-2 px-1 mt-5 ">
          <h1 className='mb'>time</h1>
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
        <Day sections={sunDay}/>
        <Day sections={monDay}/>
        <Day sections={tueDay}/>
        <Day sections={wedDay}/>
        <Day sections={thuDay}/>
      
      </div>
    </div>
  )

}

export default Results