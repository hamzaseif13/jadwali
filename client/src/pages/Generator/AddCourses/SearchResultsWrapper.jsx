import React from "react";
import Result from './SearchResult'
function SearchResultsWrapper({ results ,clearInput}) {
   
  return (
    <div className="absolute w-[95%] -translate-x-1/2 left-1/2 max-w-[600px] border top-[70px] rounded border-t-0 border-b-0 bg-mylight rounded-t-none ">
        {results.map(result => (<Result key={result.symbol+result.name} result={result} clearInput={clearInput}/>))}
    </div>
  );
}

export default SearchResultsWrapper;
