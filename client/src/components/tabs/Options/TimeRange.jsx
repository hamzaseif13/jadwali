import React, { useRef } from 'react'

function TimeRange() {
    const inputRef = useRef()
    const handleChange = (e) => {
        inputRef.current.value = parseInt(inputRef.current.value) + 1;
    }
    return (
        <div >
            <div className="mt-2">
                <h1>Start time</h1>
                <button className="rounded bg-blue-500 p-1 px-4 mr-2 ml-2 active:bg-mylight" onClick={handleChange}>-</button>
                <input type="text" ref={inputRef} disabled value="5" className=" w-20 mr-2 bg-mylight text-blue-500 p-1 rounded mt-1" min="1" max="5" name="minDays" />
                <button className="rounded bg-blue-500 p-1 px-4 active:bg-mylight" onClick={handleChange}>+</button>
            </div>
            <div className="mt-2">
                <h1>End time</h1>
                <button className="rounded bg-blue-500 p-1 px-4 mr-2 ml-2 active:bg-mylight" onClick={handleChange}>-</button>
                <input type="text" ref={inputRef} disabled value="5" className=" w-20 mr-2 bg-mylight text-blue-500 p-1 rounded mt-1" min="1" max="5" name="minDays" />
                <button className="rounded bg-blue-500 p-1 px-4 active:bg-mylight" onClick={handleChange}>+</button>
            </div>
        </div>
    )
}

export default TimeRange