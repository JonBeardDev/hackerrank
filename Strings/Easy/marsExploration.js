function marsExploration(s) {
  let changed = 0;

  for (let i = 0; i < s.length; i += 3) {
    const substring = s.slice(i, i + 3);
    if (substring[0] !== "S") changed++;
    if (substring[1] !== "O") changed++;
    if (substring[2] !== "S") changed++;
  }
  return changed;
}
