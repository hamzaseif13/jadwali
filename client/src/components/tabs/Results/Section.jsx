import React from 'react'

function Section({ section }) {
  const { startTime, endTime } = section
  let height = (endTime - startTime) * 2 * 0.75
  let name = "introduction to programming sd,f dskdsf ksfdk"
  return (
    <div className={`bg-blue-500 border flex flex-col justify-center h-[4.5rem] text-left px-1 overflow-clip text-ellipsis md:text-base`}>
      <div className="text-xs  w-8  sm:w-full md:w-full lg-w-full">
        <h1 className="mt-1 sm:hidden">{name.substring(0,12)}..</h1>
        <h1 className="mt-1 hidden text-center sm:block">{name.substring(0,27)}..</h1>
      </div>
        <h1 className="text-center text-xs">CS101-11</h1>
      <h1 className="text-[0.6rem] sm:text-xs text-center" >8:30-10</h1>
    </div>
  )
}

export default Section