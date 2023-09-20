function runningTime(arr) {
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j = j - 1;
      count++;
    }
    arr[j + 1] = value;
  }
  return count;
}
