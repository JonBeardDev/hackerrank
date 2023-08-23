function serviceLane(width, cases) {
  const maxWidths = [];
  for (let i = 0; i < cases.length; i++) {
    const section = width.slice(cases[i][0], cases[i][1] + 1);
    const minWidth = Math.min(...section);
    maxWidths.push(minWidth);
  }
  return maxWidths;
}
