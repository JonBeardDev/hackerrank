function utopianTree(n) {
  if (n === 0) return 1;

  let height = 1;
  let cycle = 1;

  while (cycle <= n) {
    if (cycle % 2 === 1) {
      height *= 2;
    } else {
      height++;
    }
    cycle++;
  }

  return height;
}
