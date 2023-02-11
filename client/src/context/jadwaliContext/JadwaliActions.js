import { generateService } from "../../generateServices/generateService";
export const fetchSchedules = async (
  courses,
  minNumberOfDays,
  startTime,
  endTime,
  days,
  pinnedSections
) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      options: {
        courses,
        minNumberOfDays,
        startTime,
        endTime,
        days,
        pinnedSections,
      },
    }),
  });

  const results = await res.json();

  return results;
};
export const fetchSections = async (lineNumber) => {
  const data = await fetch(`/api/v1/sections/${lineNumber}`);
  const d = await data.json();
  d.sort((a, b) => a.number - b.number);
  return d;
};
export const generateSchedules = async (
  courses,
  minNumberOfDays,
  startTime,
  endTime,
  days,
  pinnedSections
) => {
  let res = await generateService({
    courses,
    minNumberOfDays,
    startTime,
    endTime,
    days,
    pinnedSections,
  });
  return res;
};
