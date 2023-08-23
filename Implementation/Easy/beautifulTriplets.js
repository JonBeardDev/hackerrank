function beautifulTriplets(d, arr) {
  let triplets = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + d) && arr.includes(arr[i] + d * 2)) {
      triplets++;
    }
  }
  return triplets;
}
