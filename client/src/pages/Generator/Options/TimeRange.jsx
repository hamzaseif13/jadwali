import React, { useContext } from 'react'
import JadwaliContext from '../../../context/jadwaliContext/JadwaliContext'
function TimeRange() {
    const {dispatch,startTime,endTime} = useContext(JadwaliContext);
    const handleChange = (num) => {
        switch(num){
            case 1:if(startTime>8.5) dispatch({type:"SET_START_TIME",payload:startTime-0.5});break;
            case 2:if(startTime<18.5&&startTime+1<endTime)dispatch({type:"SET_START_TIME",payload:startTime+0.5});break;
            case 3:if(endTime>8.5&&endTime-1>startTime)dispatch({type:"SET_END_TIME",payload:endTime-0.5});break;
            case 4:if(endTime<18.5)dispatch({type:"SET_END_TIME",payload:endTime+0.5});break;
            default:;
        }
    }
    return (
        <div className='flex justify-center flex-col items-center'>
            <div className="mt-2">
                <h1>Start time</h1>
                <button className="rounded bg-blue-700 p-1 px-4 mr-2 ml-2 active:bg-mylight" onClick={()=>handleChange(1)}>-</button>
                <input type="text"  disabled value={startTime%1===0?startTime+":00":parseInt(startTime)+":30"} className=" w-20 mr-2 text-center bg-mylight text-blue-500 p-1 rounded mt-1" name="minDays" />
                <button className="rounded bg-blue-700 p-1 px-4 active:bg-mylight" onClick={()=>handleChange(2)}>+</button>
            </div>
            <div className="mt-2">
                <h1>End time</h1>
                <button className="rounded bg-blue-700 p-1 px-4 mr-2 ml-2 active:bg-mylight" onClick={()=>handleChange(3)}>-</button>
                <input type="text" disabled value={endTime%1===0?endTime+":00":parseInt(endTime)+":30"} className=" w-20 mr-2 text-center bg-mylight text-blue-500 p-1 rounded mt-1" name="minDays" />
                <button className="rounded bg-blue-700 p-1 px-4 active:bg-mylight" onClick={()=>handleChange(4)}>+</button>
            </div>
        </div>
    )
}

export default TimeRange