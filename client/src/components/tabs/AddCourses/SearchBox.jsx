import React from 'react'

function SearchBox() {
    return (

        <div className="max-w-sm  mb-2">
            <h1>Add courses</h1>
            <div className="">
                <input
                    type="search"
                    className={'min-w-full block pl-2 py-1.5 text-base font-normal text-blue-500   border-solid border-gray-300  rounded transition ease-in-out  m-0   focus:border-white focus:outline-none bg-mylight'}
                    id="exampleSearch"
                    placeholder="Search for course ex: CS101 , 1130921"
                />
            </div>
        </div>
    );
}

export default SearchBox