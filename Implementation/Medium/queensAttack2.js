function queensAttack(n, k, r_q, c_q, obstacles) {
  let attacks = 0;
  const obs = new Set();
  obstacles.forEach((v) => obs.add(v[0] + ":" + v[1]));

  const attack = (rowInc, colInc) => {
    let row = r_q + rowInc;
    let col = c_q + colInc;
    while (row <= n && row > 0 && col <= n && col > 0) {
      if (obs.has(row + ":" + col)) return;
      attacks++;
      row += rowInc;
      col += colInc;
    }
  };

  attack(-1, 0);
  attack(-1, 1);
  attack(0, 1);
  attack(1, 1);
  attack(1, 0);
  attack(1, -1);
  attack(0, -1);
  attack(-1, -1);

  return attacks;
}
