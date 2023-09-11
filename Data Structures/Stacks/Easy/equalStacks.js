function equalStacks(h1, h2, h3) {
  const heights1 = new Set();
  const heights2 = new Set();
  const heights3 = new Set();

  let ht1 = 0;
  let ht2 = 0;
  let ht3 = 0;

  for (let i = h1.length - 1; i >= 0; i--) {
    ht1 += h1[i];
    heights1.add(ht1);
  }
  for (let i = h2.length - 1; i >= 0; i--) {
    ht2 += h2[i];
    heights2.add(ht2);
  }
  for (let i = h3.length - 1; i >= 0; i--) {
    ht3 += h3[i];
    heights3.add(ht3);
  }

  const arr = [...heights1];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (heights2.has(arr[i]) && heights3.has(arr[i])) {
      return arr[i];
    }
  }
  return 0;
}
