import React, { useRef, useEffect, useState ,useContext} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Results from "./SearchResultsWrapper";


import JadwaliContext from "../../../context/jadwaliContext/JadwaliContext";
function SearchBox() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const abortController = useRef();
  const {selectedDepartment}=useContext(JadwaliContext)
  //retrive data from api
  const searchCourses = (signal) => {
    setTimeout(async () => {
      if (searchQuery.length < 2) return;
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/search?query=${searchQuery}&department=${selectedDepartment}`,
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
      <h1 className="text-gray-400 text-center">Search for your courses</h1>
      <div className="w-full  flex justify-center relative">
        <input
          className="w-[95%] mt-2 mx-1 text-lg shadow- outline-none max-w-[600px] text-blue-500 rounded rounded-b-none  bg-mylight p-2"
          placeholder="CS101, Calculas 1, 1378723"
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
