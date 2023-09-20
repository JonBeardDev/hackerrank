function larrysArray(A) {
  let swaps = 0;
  for (let i = 0; i < A.length; i++) {
    while (A[i] - 1 != i) {
      [A[A[i] - 1], A[i]] = [A[i], A[A[i] - 1]];
      swaps++;
    }
  }
  return swaps % 2 ? "NO" : "YES";
}
