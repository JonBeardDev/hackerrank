function funnyString(s) {
  const reverse = s.split("").reverse().join("");

  for (let i = 1; i < s.length; i++) {
    if (
      Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1)) !==
      Math.abs(reverse.charCodeAt(i) - reverse.charCodeAt(i - 1))
    ) {
      return "Not Funny";
    }
  }
  return "Funny";
}
