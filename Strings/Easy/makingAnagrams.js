function makingAnagrams(s1, s2) {
  const s1Freqs = {};
  const s2Freqs = {};

  for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
    if (s1[i]) {
      if (s1Freqs[s1[i]]) {
        s1Freqs[s1[i]]++;
      } else {
        s1Freqs[s1[i]] = 1;
      }
    }
    if (s2[i]) {
      if (s2Freqs[s2[i]]) {
        s2Freqs[s2[i]]++;
      } else {
        s2Freqs[s2[i]] = 1;
      }
    }
  }

  const seen = new Set();
  let count = 0;

  for (const letter in s1Freqs) {
    if (s2Freqs.hasOwnProperty(letter)) {
      count += Math.abs(s1Freqs[letter] - s2Freqs[letter]);
    } else {
      count += s1Freqs[letter];
    }
    seen.add(letter);
  }

  for (const letter in s2Freqs) {
    if (!seen.has(letter)) {
      count += s2Freqs[letter];
    }
  }
  return count;
}
