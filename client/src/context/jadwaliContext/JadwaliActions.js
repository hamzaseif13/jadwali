export const fetchSchedules = async (courses,minNumberOfDays, startTime, endTime, days ) => {
  const res = await fetch("/api/v1/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      options: { courses, minNumberOfDays, startTime, endTime, days },
    }),
  });
  
  const results = await res.json();
  console.log(results)
  return results
};
