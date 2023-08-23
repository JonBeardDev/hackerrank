function cutTheSticks(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  const iterations = [];
  while (arr.length) {
    iterations.push(arr.length);
    const tempArray = [];
    const smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
      const cutLength = arr[i] - smallest;
      if (cutLength > 0) {
        tempArray.push(cutLength);
      }
    }
    arr = tempArray;
    console.log(arr);
  }
  return iterations;
}
