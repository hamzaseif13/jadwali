import { useContext } from "react";
import { toast } from "react-toastify";
import JadwaliContext from "../context/jadwaliContext/JadwaliContext";
import useGenerate from "./useGenerate";
function usePinSection(refreshGenerated) {
  const { dispatch, pinnedSections, generatedSchedules } =
    useContext(JadwaliContext);
  const { generate } = useGenerate();
  const pinSection = (section) => {
    let newPinned = [];
    // if the section is already pinned, unpin it
    if (pinnedSections.some((sec) => sec.id === section.id)) {
      dispatch({
        type: "SET_PINNED_SECTIONS",
        payload: pinnedSections.filter((sec) => sec.id !== section.id),
      });

      toast.success("UnPinned section successfully", { autoClose: 2000 });
      localStorage.setItem(
        "pinnedSections",
        JSON.stringify(pinnedSections.filter((sect) => sect.id !== section.id))
      );
      newPinned = pinnedSections.filter((sect) => sect.id !== section.id);
    }
    //if the section is not pinned
    else {
      //if the there is no  pinned section from same course
      if (
        !pinnedSections.some((sect) => sect.lineNumber === section.lineNumber)
      ) {
        newPinned = [...pinnedSections, section];
        dispatch({
          type: "SET_PINNED_SECTIONS",
          payload: newPinned,
        });
        toast.success("Pinned section successfully", { autoClose: 2000 });
        localStorage.setItem("pinnedSections", JSON.stringify(newPinned));
      }
      //if there is a pinned section from same course
      else {
        const filterdPinned = [
          ...pinnedSections.filter(
            (sect) => sect.lineNumber !== section.lineNumber
          ),
          section,
        ];
        dispatch({
          type: "SET_PINNED_SECTIONS",
          payload: filterdPinned,
        });
        toast.success("Pinned section successfully", { autoClose: 2000 });
        localStorage.setItem("pinnedSections", JSON.stringify(filterdPinned));
        newPinned = filterdPinned;
      }
    }
    if (refreshGenerated) {
      generate(newPinned);
    }
  };

  return { pinSection };
}

export default usePinSection;
