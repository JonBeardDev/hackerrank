function theLoveLetterMystery(s) {
  let count = 0;

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    count += Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - 1 - i));
  }
  return count;
}
