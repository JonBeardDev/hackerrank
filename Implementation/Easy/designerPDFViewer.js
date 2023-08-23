function designerPdfViewer(h, word) {
  // Write your code here
  const alphabet = [
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

  let maxHeight = 0;

  for (let i = 0; i < word.length; i++) {
    const index = alphabet.indexOf(word.charAt(i));
    const height = h[index];

    if (height > maxHeight) {
      maxHeight = height;
    }
  }
  const area = maxHeight * word.length;

  return area;
}
