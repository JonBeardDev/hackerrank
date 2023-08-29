function isValid(s) {
  const freqs = {};

  for (let i = 0; i < s.length; i++) {
    if (freqs[s[i]]) {
      freqs[s[i]]++;
    } else {
      freqs[s[i]] = 1;
    }
  }

  let firstValue = null;
  let secondValue = null;
  let baseValue = null;

  for (const letter in freqs) {
    if (!firstValue) {
      firstValue = freqs[letter];
    } else if (freqs[letter] === firstValue && !secondValue && !baseValue) {
      baseValue = firstValue;
    } else if (freqs[letter] !== firstValue && !secondValue && !baseValue) {
      if (Math.abs(freqs[letter] - firstValue === 1)) {
        secondValue = freqs[letter];
      } else if (firstValue === 1) {
        baseValue = freqs[letter];
      } else if (freqs[letter] === 1) {
        baseValue = firstValue;
        secondValue = 1;
      } else {
        return "NO";
      }
    } else if (!baseValue) {
      if (freqs[letter] === firstValue) {
        baseValue = firstValue;
      } else if (freqs[letter] === secondValue) {
        baseValue = secondValue;
      } else {
        return "NO";
      }
    } else if (baseValue) {
      if (
        !secondValue &&
        (Math.abs(freqs[letter] - baseValue) === 1 || freqs[letter] === 1)
      ) {
        secondValue = freqs[letter];
      } else if (freqs[letter] !== baseValue) {
        return "NO";
      }
    }
  }
  return "YES";
}
