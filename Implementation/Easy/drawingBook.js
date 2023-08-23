function pageCount(n, p) {
  const fromFront = Math.floor(p / 2);
  let fromBack;
  if (n % 2 === 0) {
    fromBack = Math.ceil((n - p) / 2);
  } else {
    fromBack = Math.floor((n - p) / 2);
  }

  return Math.min(fromFront, fromBack);
}
