import React, {useContext } from 'react'

import JadwaliContext from '../../../context/JadwaliContext';

function DaysFilter() {
    const { sun, mon, tue, wed, thu ,dispatch } = useContext(JadwaliContext)
    const handleClick = (num) => {
        switch (num) {
            case 1: dispatch({type:"SET_SUN",payload:!sun}); break;
            case 2: dispatch({type:"SET_MON",payload:!mon}); break;
            case 3: dispatch({type:"SET_TUE",payload:!tue}); break;
            case 4: dispatch({type:"SET_WED",payload:!wed}); break;
            case 5: dispatch({type:"SET_THU",payload:!thu}); break;
            default:;
        }
    }
    return (
        <>
            <h1 className="text-lg mb-2">Select Days</h1>
            <div className="flex items-center flex-wrap">
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick(1)} className={`rounded border p-2 ${sun ? 'bg-blue-500' : ''}`}>Sunday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick(2)} className={`rounded border p-2 ${mon ? 'bg-blue-500' : ''}`}>Monday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick(3)} className={`rounded border p-2 ${tue ? 'bg-blue-500' : ''}`}>Tuesday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick(4)} className={`rounded border p-2 ${wed ? 'bg-blue-500' : ''}`}>wedesday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={() => handleClick(5)} className={`rounded border p-2 ${thu ? 'bg-blue-500' : ''}`}>thursday</button>
                </div>
            </div>
        </>
    )
}

export default DaysFilter