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
        <>
            <h1 className="text-lg mb-2">Select Days</h1>
            <div className="flex items-center flex-wrap">
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("Sun")} className={`rounded border p-2 ${days.includes("Sun") ? 'bg-blue-500' : ''}`}>Sunday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("Mon")} className={`rounded border p-2 ${days.includes("Mon") ? 'bg-blue-500' : ''}`}>Monday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("Tue")} className={`rounded border p-2 ${days.includes("Tue") ? 'bg-blue-500' : ''}`}>Tuesday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("Wed")} className={`rounded border p-2 ${days.includes("Wed") ? 'bg-blue-500' : ''}`}>wedesday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick("Thu")} className={`rounded border p-2 ${days.includes("Thu") ? 'bg-blue-500' : ''}`}>thursday</button>
                </div>
            </div>
        </>
    )
}

export default DaysFilter