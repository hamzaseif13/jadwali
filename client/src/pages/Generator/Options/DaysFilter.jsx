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
                    <button onClick={() => handleClick("sun")} className={`rounded border p-2 ${days.includes("sun") ? 'bg-blue-500' : ''}`}>Sunday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("mon")} className={`rounded border p-2 ${days.includes("mon") ? 'bg-blue-500' : ''}`}>Monday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("tue")} className={`rounded border p-2 ${days.includes("tue") ? 'bg-blue-500' : ''}`}>Tuesday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("wed")} className={`rounded border p-2 ${days.includes("wed") ? 'bg-blue-500' : ''}`}>wedesday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("thu")} className={`rounded border p-2 ${days.includes("thu") ? 'bg-blue-500' : ''}`}>thursday</button>
                </div>
            </div>
        </div>
    )
}

export default DaysFilter