function strangeCounter(t) {
  let value = 3;
  let time = 1;
  let max = time + value;

  while (t >= max) {
    time = max;
    value *= 2;
    max = time + value;
  }

  value = value + (time - t);
  return value;
}
