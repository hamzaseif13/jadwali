import React, { useState } from 'react'

function DaysFilter() {
    const [sunday, setSunday] = useState(false);
    const handleClick = () => {
        setSunday((prev) => !prev)
        console.log(sunday)
    }
    return (
        <>
            <h1 className="text-lg mb-2">Select Days</h1>
            <div className="flex items-center flex-wrap">
                <div className="ml-2 mb-1">
                    <button onClick={handleClick} className={`rounded border p-2 ${sunday ? 'bg-blue-500' : ''}`}>Sunday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={handleClick} className={`rounded border p-2 ${sunday ? 'bg-blue-500' : ''}`}>Sunday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={handleClick} className={`rounded border p-2 ${sunday ? 'bg-blue-500' : ''}`}>Sunday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={handleClick} className={`rounded border p-2 ${sunday ? 'bg-blue-500' : ''}`}>Sunday</button>
                </div>
                <div className="ml-2 mb-1">
                    <button onClick={handleClick} className={`rounded border p-2 ${sunday ? 'bg-blue-500' : ''}`}>Sunday</button>
                </div>
            </div>
        </>
    )
}

export default DaysFilter