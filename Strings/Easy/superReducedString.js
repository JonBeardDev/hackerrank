function superReducedString(s) {
  let pointer = 0;

  while (pointer !== s.length) {
    if (s[pointer] === s[pointer + 1]) {
      const start = s.slice(0, pointer);
      const end = s.slice(pointer + 2);
      s = start + end;
      pointer = 0;
    } else {
      pointer++;
    }
  }
  if (s.length) return s;
  return "Empty String";
}
