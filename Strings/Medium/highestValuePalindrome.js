function highestValuePalindrome(s, n, k) {
  const differentIndices = [];

  for (let i = 0; i < Math.floor(n / 2); i++) {
    const left = Number(s[i]);
    const right = Number(s[n - 1 - i]);
    console.log(left, right);
    if (left !== right) {
      differentIndices.push(i);
    }
  }
  let differences = differentIndices.length;
  if (differences > k) return -1;
  console.log(differences, differentIndices);
  const palindrome = [];

  for (let i = 0; i < n / 2; i++) {
    if (
      k - differences >= 2 ||
      (k - differences === 1 && differentIndices.includes(i))
    ) {
      if (s[i] !== "9") {
        k--;
      }
      if (s[n - 1 - i] !== "9") {
        k--;
      }
      if (differentIndices.includes(i)) {
        differences--;
      }
      palindrome[i] = "9";
      palindrome[n - 1 - i] = "9";
    } else if (differentIndices.includes(i)) {
      const value = Math.max(Number(s[i]), Number(s[n - 1 - i]));
      palindrome[i] = value.toString();
      palindrome[n - 1 - i] = value.toString();
      k--;
      differences--;
    } else {
      palindrome[i] = s[i];
      palindrome[n - 1 - i] = s[n - 1 - i];
    }
  }

  if (k >= 1 && n % 2 === 1) {
    palindrome[Math.floor(n / 2)] = "9";
  }

  return palindrome.join("");
}
