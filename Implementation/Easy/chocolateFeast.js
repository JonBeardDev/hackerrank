function chocolateFeast(n, c, m) {
  let bars = Math.floor(n / c);
  let wrappers = bars;

  while (wrappers >= m) {
    bars += Math.floor(wrappers / m);
    wrappers = Math.floor(wrappers / m) + (wrappers % m);
  }
  return bars;
}
