function closestNumbers(arr) {
  const sorted = [...arr].sort((x, y) => x - y);
  let minDiff = Infinity;
  let result = [];

  for (let i = 0; i < sorted.length - 1; i++) {
    const difference = sorted[i + 1] - sorted[i];

    if (difference < minDiff) {
      minDiff = difference;
      result = [[sorted[i], sorted[i + 1]]];
    } else if (difference === minDiff) {
      result.push([sorted[i], sorted[i + 1]]);
    }
  }

  return result.flat();
}
