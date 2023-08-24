function stones(n, a, b) {
  const valuesSet = new Set();

  for (let i = 0; i < n; i++) {
    const possible = i * b + (n - 1 - i) * a;
    valuesSet.add(possible);
  }
  const values = [...valuesSet];
  return values.sort((a, b) => a - b);
}
