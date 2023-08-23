function birthdayCakeCandles(candles) {
  const tallest = Math.max(...candles);
  let numTallest = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === tallest) {
      numTallest++;
    }
  }
  return numTallest;
}
