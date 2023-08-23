function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let games = 0;

  while (s > 0 && s >= p) {
    games++;
    s -= p;

    if (p - d < m) {
      p = m;
    } else {
      p -= d;
    }
  }

  return games;
}
