function commonChild(s1, s2) {
  const matrix = [];

  for (let i = 0; i <= s1.length; i++) {
    matrix[i] = [];

    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 0;
      } else if (s1[i - 1] === s2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  return matrix[s1.length][s1.length];
}
