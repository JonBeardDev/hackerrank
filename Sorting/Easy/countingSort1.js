function countingSort(arr) {
  const result = new Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    result[value]++;
  }

  return result;
}
