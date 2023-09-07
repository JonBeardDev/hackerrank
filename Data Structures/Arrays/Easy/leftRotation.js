function rotateLeft(d, arr) {
  const shifted = [];

  for (let i = 0; i < arr.length; i++) {
    let newIndex = i - d;
    if (newIndex < 0) {
      newIndex += arr.length;
    }
    shifted[newIndex] = arr[i];
  }

  return shifted;
}
