import React from "react";
import Result from './Result'
function Results({ results ,clearInput}) {
   
  return (
    <div className="20rem absolute w-full top-[2.2rem] bg-mylight rounded-t-none">
        {results.map(result => (<Result key={result.symbol+result.name} result={result} clearInput={clearInput}/>))}
    </div>
  );
}

export default Results;
