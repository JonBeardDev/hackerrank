function timeInWords(h, m) {
  const numbers = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
    "half",
  ];

  let words = "";

  if (m === 0) {
    words = numbers[h] + " o' clock";
  } else if (m === 1) {
    words = numbers[m] + " minute past " + numbers[h];
  } else if (m === 15 || m === 30) {
    words = numbers[m] + " past " + numbers[h];
  } else if (m < 30) {
    words = numbers[m] + " minutes past " + numbers[h];
  } else if (m === 45) {
    words = "quarter to " + numbers[h + 1];
  } else if (m < 60) {
    words = numbers[60 - m] + " minutes to " + numbers[h + 1];
  }
  return words;
}
