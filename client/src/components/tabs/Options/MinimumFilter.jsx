import React,{useRef} from 'react'

function MinimumFilter() {
    const inputRef= useRef()
    const handleChange=(e)=>{
        inputRef.current.value = parseInt(inputRef.current.value)+1;
    }
  return (
    <div className="mt-2">
        <h1>Choose minimum number of days per week</h1>
        <button className="rounded ml-2 bg-blue-500 p-1 px-4 mr-1 active:bg-mylight"onClick={handleChange}>-</button>
        <input type="number" ref={inputRef} disabled value="5"className=" mr-2 w-20 text-center bg-mylight text-blue-500 p-1 rounded mt-1" min="1" max="5"name="minDays" />
        <button className="rounded bg-blue-500 p-1 px-4 active:bg-mylight"onClick={handleChange}>+</button>
    </div>
  )
}

export default MinimumFilter