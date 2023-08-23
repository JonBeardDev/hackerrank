function beautifulDays(i, j, k) {
  let beautiful = 0;

  while (i <= j) {
    const reverse = Number(i.toString().split("").reverse().join(""));
    const difference = Math.abs(i - reverse);

    if (difference % k === 0) {
      beautiful++;
    }
    i++;
  }
  return beautiful;
}
