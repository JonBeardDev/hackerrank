function absolutePermutation(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  if (k === 0) return arr;

  const subArrQuantity = n / k;
  if (subArrQuantity % 2 !== 0) return [-1];

  const subArrLength = n / subArrQuantity;
  for (let i = 0; i < subArrQuantity; i += 2) {
    const subArr1 = arr.slice(i * subArrLength, (i + 1) * subArrLength);
    const subArr2 = arr.slice((i + 1) * subArrLength, (i + 2) * subArrLength);
    arr.splice(i * subArrLength, subArrLength, ...subArr2);
    arr.splice((i + 1) * subArrLength, subArrLength, ...subArr1);
  }

  return arr;
}
