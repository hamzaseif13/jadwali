import React from 'react'

function NoResults({text}) {
  return (
    <div className="text-[#ca9f28]  00 text-center mt-20 text-xl ">
        <h1>{text} <span className='text-3xl text-red-700'>:(</span></h1>
    </div>
  )
}

export default NoResults