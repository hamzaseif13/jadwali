import React, { useRef, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Results from "./Results";
function SearchBox() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const abortController = useRef();
  //retrive data from api
  const searchCourses = (signal) => {
    setTimeout(async () => {
      if (searchQuery.length < 2) return;
      const res = await fetch(
        `http://192.168.1.13:5050/api/v1/search?query=${searchQuery}`,
        {
          signal,
        }
      );
      const courses = await res.json();
      setSearchLoading(false);
      setResults(courses);
    }, 200);
  };

  const onInputChange = (event) => {
    setSearchLoading(true);
    setResults([]);
    setSearchQuery(event.target.value);
    if (!searchQuery) {
      setResults([]);
    }
    if (event.target.value.length < 2) setSearchLoading(false);
  };

  //cancel previous fetch request when input changes
  useEffect(() => {
    if (abortController.current) {
      abortController.current.abort();
    }
    abortController.current = new AbortController();
    const { signal } = abortController.current;
    searchCourses(signal);
  }, [searchQuery]);
  const clearInput = () => {
    setResults([]);
    setSearchQuery("");
  };
  return (
    <div className="max-w-sm  mb-2">
      <h1>Add courses</h1>
      <div className="relative">
        <input
          autoComplete="off"
          onChange={onInputChange}
          value={searchQuery}
          className={
            "min-w-full block pl-2 py-1.5 rounded-b-none text-base font-normal text-blue-500   border-solid border-gray-300  rounded transition ease-in-out  m-0   focus:border-white focus:outline-none bg-mylight"
          }
          id="exampleSearch"
          placeholder="Search for course ex:CS101 ,Calculas"
        />
        <span className="absolute top-[0.3rem] active:text-white text-blue-500 text-xl hover:cursor-pointer right-2">
          {searchLoading ? (
            <ClipLoader size={30} color="#ffffff" />
          ) : (
            <span onClick={clearInput}> &#10006;</span>
          )}
        </span>
        {results && <Results clearInput={clearInput} results={results} />}
      </div>
    </div>
  );
}

export default SearchBox;
