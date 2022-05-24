import React, {useContext } from 'react'

import JadwaliContext from '../../../context/JadwaliContext';

function DaysFilter() {
    const { options, setOptions } = useContext(JadwaliContext)
    const { sun, mon, tue, wed, thu } = options
    const handleClick = (num) => {
        switch (num) {
            case 1: setOptions(prev => { return { ...prev, sun: !sun } }); break;
            case 2: setOptions(prev => { return { ...prev, mon: !mon } }); break;
            case 3: setOptions(prev => { return { ...prev, tue: !tue } }); break;
            case 4: setOptions(prev => { return { ...prev, wed: !wed } }); break;
            case 5: setOptions(prev => { return { ...prev, thu: !thu } }); break;
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