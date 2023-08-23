function fairRations(B) {
  let loaves = 0;

  for (let i = 0; i < B.length; i++) {
    if (i === B.length - 1 && B[i] % 2 === 1) {
      return "NO";
    }
    if (B[i] % 2 === 1) {
      B[i + 1]++;
      loaves += 2;
    }
  }
  return loaves;
}
