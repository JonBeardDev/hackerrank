// Check if a string is an anagram of a palindrome
function gameOfThrones(s) {
  s = s.split("").sort();

  const length = s.length % 1 === 0 ? s.length - 2 : s.length - 3;
  const maxDiff = s.length % 1 === 0 ? 1 : 0;
  let diff = 0;

  for (let i = 0; i < length; i += 2) {
    if (s[i] !== s[i + 1] && diff <= maxDiff) {
      diff++;
    }
    if (diff > maxDiff) {
      return "NO";
    }
  }
  return "YES";
}
