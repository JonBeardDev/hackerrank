function pickingNumbers(a) {
  let maxSubArray = 0;
  let seen = new Set();

  for (let i = 0; i < a.length; i++) {
    if (!seen.has(a[i])) {
      const subArray = [];
      for (let j = 0; j < a.length; j++) {
        if (a[j] === a[i] || a[j] === a[i] + 1) {
          subArray.push(a[j]);
        }
      }
      if (maxSubArray < subArray.length) {
        maxSubArray = subArray.length;
      }
      seen.add(a[i]);
    }
  }
  return maxSubArray;
}
