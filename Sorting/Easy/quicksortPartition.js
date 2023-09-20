function quickSort(arr) {
  const pivot = arr[0];
  const left = [];
  const right = [];
  const equals = [pivot];

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];

    if (pivot < value) {
      right.push(arr[i]);
    } else if (pivot > value) {
      left.push(arr[i]);
    } else {
      equals.push(value);
    }
  }
  return left.concat(equals.concat(right));
}
