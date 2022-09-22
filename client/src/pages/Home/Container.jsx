import React from "react";

function Container({ gif, title, paragraph }) {
  return (
    <div className=" text-white  flex flex-col justify-center items-center mx-4 mb-5">
      <div className="text-center mb-2">
        <h1 className="text-xl md:text-3xl mb-1 ">{title}</h1>
        <p className="text-gray-400">{paragraph}</p>
      </div>
      <img src={gif} alt="loading" className="rounded-lg w-[50rem] shadow-lg" />
    </div>
  );
}

export default Container;
