export const fetchSchedules = async (courses,minNumberOfDays, startTime, endTime, days ) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      options: { courses, minNumberOfDays, startTime, endTime, days },
    }),
  });
  
  const results = await res.json();
  
  return results
};
