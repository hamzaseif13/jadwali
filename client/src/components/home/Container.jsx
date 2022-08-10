import React from "react";

function Container({ gif, title, paragraph }) {
  return (
    <div className=" text-white  flex flex-col justify-center items-center">
      <div className="text-center mb-2">
        <h1 className="text-xl md:text-2xl mb-1 ">{title}</h1>
        <p className="text-gray-400">{paragraph}</p>
      </div>
      <img src={gif} alt="loading" className="rounded-lg w-[30rem] " />
    </div>
  );
}

export default Container;
