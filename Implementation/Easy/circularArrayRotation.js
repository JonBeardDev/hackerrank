function circularArrayRotation(a, k, queries) {
  const removeFullCircles = k % a.length;

  const start = a.slice(-removeFullCircles);
  const end = a.slice(0, -removeFullCircles);
  const finished = start.concat(end);

  let report = [];
  for (let i = 0; i < queries.length; i++) {
    const index = queries[i];
    const value = finished[index];
    report.push(value);
  }
  return report;
}
