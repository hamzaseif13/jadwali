import React from 'react'

function Course({ hours, name, symbol }) {
  return (

    <div className="min-w-sm max-w-sm p-5 bg-blue-500 mb-2 text-mydark rounded">
      <h1 className="text-lg break-normal">
        {name}
      </h1>
      <div className="flex justify-between">
        <h1 className="">{symbol}</h1>
        <h1>{hours}h</h1>
      </div>
      <div className="flex justify-end mt-2">
        <button className="border rounded p-2 border-mylight hover:text-blue-500 hover:bg-mylight">Remove</button>
      </div>
    </div>


  )
}

export default Course