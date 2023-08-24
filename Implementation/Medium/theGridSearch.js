function gridSearch(G, P) {
  const gridLength = G.length;
  const patternLength = P.length;
  const patternWidth = P[0].length;

  for (let i = 0; i < gridLength; i++) {
    if (G[i].includes(P[0])) {
      let string = G[i];
      let startIndex = string.indexOf(P[0]);
      let endIndex = startIndex + patternWidth;

      while (string.includes(P[0])) {
        for (let j = 1; j < patternLength; j++) {
          const rowBelow = G[i + j].slice(startIndex, endIndex);
          if (rowBelow !== P[j]) {
            break;
          } else if (j === patternLength - 1) {
            return "YES";
          }
        }

        const newStartIndex = G[i].indexOf(P[0], startIndex + 1);
        endIndex += newStartIndex - startIndex;
        startIndex = newStartIndex;
        string = G[i].slice(startIndex);
      }
    }
  }
  return "NO";
}
