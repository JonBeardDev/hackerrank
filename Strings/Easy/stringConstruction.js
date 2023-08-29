// Find the cost to add a letter to string p that is not already included in p.
function stringConstruction(s) {
  let p = "";
  let cost = 0;

  for (let i = 0; i < s.length; i++) {
    if (!p.includes(s[i])) {
      cost++;
    }
    p += s[i];
  }
  return cost;
}

// Better version
function stringConstruction(s) {
  const sSet = new Set(s.split(""));
  return sSet.size;
}
