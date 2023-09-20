function findMedian(arr) {
  arr.sort((x, y) => x - y);
  return arr[Math.floor(arr.length / 2)];
}
