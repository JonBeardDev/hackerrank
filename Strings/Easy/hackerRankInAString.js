function hackerrankInString(s) {
  const hackerrank = "hackerrank";
  let pointer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === hackerrank[pointer]) {
      pointer++;
    }
  }
  if (pointer === 10) {
    return "YES";
  }
  return "NO";
}
