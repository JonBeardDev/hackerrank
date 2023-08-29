function anagram(s) {
  // Write your code here
  if (s.length % 2 === 1) return -1;

  let string1 = s.slice(0, s.length / 2);
  let string2 = s.slice(s.length / 2).split("");

  for (const char of string1) {
    if (string2.includes(char)) {
      string2.splice(string2.indexOf(char), 1);
    }
  }
  return string2.length;
}
