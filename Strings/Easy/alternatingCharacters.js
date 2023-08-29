function alternatingCharacters(s) {
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      const start = s.slice(0, i);
      const end = s.slice(i + 1);
      s = start + end;
      count++;
      i--;
    }
  }
  return count;
}
