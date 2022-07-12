import React, { useRef, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Results from "./SearchResultsWrapper";
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
        `/api/v1/search?query=${searchQuery}`,
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
    <div className="relative ">
      <h1 className="text-white text-center">Search for your courses</h1>
      <div className="w-full  flex justify-center relative">
        <input
          className="w-[95%] mt-1 mx-1 text-lg shadow-sm border outline-none max-w-[600px] text-blue-500 rounded rounded-b-none  bg-mylight p-2"
          placeholder="cs101,calculas 1, 1378723"
          onChange={onInputChange}
          value={searchQuery}
        />
        <div className="relative">
          <div className="text-white absolute right-5 top-1/2 -translate-y-[35%]">
            {
              searchLoading?(
                <ClipLoader size={30} color="#ffffff" />
              ):
              <span  className="cursor-pointer hover:text-red-500"onClick={clearInput}>&#10006;</span>
            }
          </div>
        </div>
      </div>
      {results&&<Results clearInput={clearInput} results={results} />}
    </div>
  );
}

export default SearchBox;
