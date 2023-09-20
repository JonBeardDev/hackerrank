function countingSort(arr) {
  const counts = new Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    counts[value]++;
  }

  const result = [];

  for (let i = 0; i < counts.length; i++) {
    let j = counts[i];

    while (j > 0) {
      result.push(i);
      j--;
    }
  }
  return result;
}
