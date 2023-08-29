function caesarCipher(s, k) {
  const lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  k = k % 26;

  let encrypted = "";

  for (let i = 0; i < s.length; i++) {
    if (upper.includes(s[i])) {
      let position = upper.indexOf(s[i]);
      position += k;
      if (position >= 26) {
        position -= 26;
      }
      encrypted += upper[position];
    } else if (lower.includes(s[i])) {
      let position = lower.indexOf(s[i]);
      position += k;
      if (position >= 26) {
        position -= 26;
      }
      encrypted += lower[position];
    } else {
      encrypted += s[i];
    }
  }
  return encrypted;
}
