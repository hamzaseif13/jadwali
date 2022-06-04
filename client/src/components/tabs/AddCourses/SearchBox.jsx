import React, { useRef, useEffect, useState, useContext } from 'react'
import JadwaliContext from '../../../context/JadwaliContext'
function SearchBox() {
    const { dispatch, registeredCourses } = useContext(JadwaliContext);
    const [open, setOpen] = useState(false)
    const [result, setResult] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const abortController = useRef();

    const getSearch = async (signal) => {
        if (searchQuery.length < 2) return
        const res = await fetch("http://localhost:5000/getCourse", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ value: searchQuery, searchBy: "all", signal }),
        })
        const courses = await res.json();
        setResult(courses.courses.slice(0, 10))
        setOpen(true)
    }
    const onInputChange = (event) => {
        setResult([])
        setSearchQuery(event.target.value)
        if (!searchQuery) {
            setResult([])
        }
    }
    const addCourse = (res) => {
        console.log("haha")
        dispatch({ type: 'SET_REG', payload: "lol" })
        setResult([])
        setSearchQuery("")
    }
    useEffect(() => {
        if (abortController.current) {
            abortController.current.abort();
        }
        abortController.current = new AbortController()
        const { signal } = abortController.current
        getSearch(signal)
    }, [searchQuery])
    return (

        <div className="max-w-sm  mb-2">
            <h1>Add courses</h1>
            <div className="relative">
                <input
                    type="search" autoComplete="off" onChange={onInputChange} value={searchQuery} onBlur={()=>setOpen(false)}
                    className={'min-w-full block pl-2 py-1.5 text-base font-normal text-blue-500   border-solid border-gray-300  rounded transition ease-in-out  m-0   focus:border-white focus:outline-none bg-mylight'}
                    id="exampleSearch"
                    placeholder="Search for course ex: CS101 , 1130921"
                />


                { 
                    open&&result&&
                    <div className="20rem absolute w-full top-[2.3rem]  bg-red-500" >
                        {

                            result.map((res) => (<h1  key={res.name} onClick={() => console.log("xd")} className="border z-10">{res.symbol}</h1>))
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default SearchBox