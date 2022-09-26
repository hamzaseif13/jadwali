
import ReactDOM from "react-dom";

import Section from "./Section";
function Modal({ course, section, close, modalOpen}) {
 
 
  return ReactDOM.createPortal(
    <>
     <div
        onClick={()=>close()}
        className={`${
          modalOpen ? "" : "hidden"
        } fixed top-0 bottom-0 right-0 left-0 z-40 bg-overlay `}>
        <Section section={section}course={course} close={close}/>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
