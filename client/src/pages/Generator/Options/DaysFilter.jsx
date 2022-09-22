import React, {useContext } from 'react'

import JadwaliContext from '../../../context/jadwaliContext/JadwaliContext';

function DaysFilter() {
    const { days,dispatch } = useContext(JadwaliContext)
    const handleClick = (day) => {
       if(days.includes(day)){
           dispatch({type:"SET_DAYS",payload:days.replace(day, "")})
       }
       else{
        dispatch({type:"SET_DAYS",payload:days+" "+day})
       }
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg mb-2">Select Days </h1>
            <div className="flex items-center justify-center flex-wrap">
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("sun")} className={`rounded  p-2 ${days.includes("sun") ? 'bg-blue-700 hover:bg-blue-800' : ''}`}>Sunday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("mon")} className={`rounded  p-2 ${days.includes("mon") ? 'bg-blue-700 hover:bg-blue-800' : ''}`}>Monday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("tue")} className={`rounded  p-2 ${days.includes("tue") ? 'bg-blue-700 hover:bg-blue-800' : ''}`}>Tuesday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("wed")} className={`rounded  p-2 ${days.includes("wed") ? 'bg-blue-700 hover:bg-blue-800' : ''}`}>wedesday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("thu")} className={`rounded  p-2 ${days.includes("thu") ? 'bg-blue-700 hover:bg-blue-800' : ''}`}>thursday</button>
                </div>
            </div>
        </div>
    )
}

export default DaysFilter