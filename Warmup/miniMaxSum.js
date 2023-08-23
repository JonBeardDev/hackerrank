function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  arr = arr.sort();

  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
    max += arr[i + 1];
  }
  console.log(min, max);
}
