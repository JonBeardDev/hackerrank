function insertionSort1(n, arr) {
  const unsorted = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > unsorted) {
      arr[i + 1] = arr[i];
      console.log(arr.join(" "));
      if (i === 0) {
        arr[i] = unsorted;
        console.log(arr.join(" "));
      }
    } else {
      arr[i + 1] = unsorted;
      console.log(arr.join(" "));
      break;
    }
  }
}
