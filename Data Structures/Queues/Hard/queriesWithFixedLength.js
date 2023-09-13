function solve(arr, queries) {
  return queries.map((q) => {
    const window = {
      start: 0,
      end: q - 1,
      add: () => {
        window.end++;
      },
      remove: () => arr[window.start++],
      get max() {
        let maxValue = -Infinity;
        for (let i = window.start; i <= window.end; i++) {
          maxValue = Math.max(maxValue, arr[i]);
        }
        return maxValue;
      },
    };

    for (var i = 0, currMax = -Infinity; i < q; i++) {
      currMax = Math.max(arr[i], currMax);
    }

    for (var minMax = currMax; i < arr.length; i++) {
      window.add(), (currMax = Math.max(arr[i], currMax));
      if (window.remove() === currMax) currMax = window.max;
      minMax = Math.min(minMax, currMax);
    }

    return minMax;
  });
}
