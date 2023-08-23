function viralAdvertising(n) {
  let day = 1;
  let shared = 5;
  let liked = 2;
  let cumulative = 2;

  while (day < n) {
    shared = liked * 3;
    liked = Math.floor(shared / 2);
    cumulative += liked;
    day++;
  }
  return cumulative;
}
