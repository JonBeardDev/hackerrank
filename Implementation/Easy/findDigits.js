function findDigits(n) {
  const digits = n.toString().split("");
  let divisors = 0;

  for (let i = 0; i < digits.length; i++) {
    if (n % Number(digits[i]) === 0) {
      divisors++;
    }
  }
  return divisors;
}
