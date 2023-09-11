function largestRectangle(h) {
  let maxArea = h.length;
  h.forEach((value, index) => {
    let i = index + 1;
    let j = index - 1;
    let tempArea = value;
    while (i < h.length && h[i] >= value) {
      tempArea += value;
      i++;
    }
    while (j >= 0 && h[j] >= value) {
      tempArea += value;
      j--;
    }
    maxArea = Math.max(tempArea, maxArea);
  });
  return maxArea;
}
