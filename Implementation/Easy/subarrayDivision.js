function birthday(s, d, m) {
  let segments = 0;

  for (let i = 0; i <= s.length - m; i++) {
    const segment = s.slice(i, i + m);
    const sum = segment.reduce((acc, val) => acc + val, 0);

    if (sum === d) {
      segments++;
    }
  }
  return segments;
}
