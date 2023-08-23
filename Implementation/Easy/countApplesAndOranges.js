function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let houseApples = 0;
  let houseOranges = 0;

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      houseApples++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] + b >= s && oranges[i] + b <= t) {
      houseOranges++;
    }
  }
  console.log(houseApples);
  console.log(houseOranges);
}
