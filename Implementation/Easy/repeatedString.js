function repeatedString(s, n) {
  const repeats = Math.floor(n / s.length);
  const remainder = n % s.length;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "a") {
      if (i < remainder) {
        count += repeats + 1;
      } else {
        count += repeats;
      }
    }
  }

  return count;
}
