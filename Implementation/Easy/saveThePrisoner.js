function saveThePrisoner(n, m, s) {
  let remainingCandies;
  if (m > n) {
    remainingCandies = m % n;
  } else remainingCandies = m;

  let warn;
  if (s + remainingCandies - 1 > n) {
    warn = (s + remainingCandies - 1) % n;
  } else warn = s + remainingCandies - 1;

  if (warn === 0) return n;
  else return warn;
}
