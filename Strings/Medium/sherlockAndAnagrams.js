function sherlockAndAnagrams(s) {
  const anagrams = {};

  // Find and alphabetize every substring in the string
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.slice(i, j);
      const alpha = substring.split("").sort().join("");

      if (anagrams[alpha]) {
        anagrams[alpha]++;
      } else {
        anagrams[alpha] = 1;
      }
    }
  }

  let count = 0;

  // For each alphabetized substring, if it occurs more than once,
  // find how many pairs can be made using n * (n-1) / 2
  for (const string in anagrams) {
    if (string && anagrams[string] > 1) {
      count += (anagrams[string] * (anagrams[string] - 1)) / 2;
    }
  }

  return count;
}
