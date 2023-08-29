function weightedUniformStrings(s, queries) {
  const weights = new Set();

  let prevChar = "";
  let weight = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === prevChar) {
      weight += s.charCodeAt(i) - "a".charCodeAt(0) + 1;
    } else {
      weight = s.charCodeAt(i) - "a".charCodeAt(0) + 1;
      prevChar = s[i];
    }
    weights.add(weight);
  }

  const exists = [];

  for (let i = 0; i < queries.length; i++) {
    if (weights.has(queries[i])) {
      exists.push("Yes");
    } else {
      exists.push("No");
    }
  }

  return exists;
}
