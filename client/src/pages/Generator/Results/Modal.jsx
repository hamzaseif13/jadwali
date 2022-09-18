import React from "react";
import ReactDOM from "react-dom";
function Modal({ course, section }) {
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 z-40 bg-overlay" />
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2  
      text-white z-40 border">
        <h1>hi</h1>
        <button>hi2</button>
      </div>
    </>,
    document.getElementById("table")
  );
}

export default Modal;
