function equalizeArray(arr) {
  const occurrences = {};
  for (let i = 0; i < arr.length; i++) {
    if (occurrences[arr[i]]) {
      occurrences[arr[i]]++;
    } else {
      occurrences[arr[i]] = 1;
    }
  }
  const all = Object.values(occurrences);
  const sorted = all.sort(function (a, b) {
    return a - b;
  });

  let count = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    count += sorted[i];
  }

  return count;
}
