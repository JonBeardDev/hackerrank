function permutationEquation(p) {
  let y = [];

  for (let i = 1; i <= p.length; i++) {
    const x = p.indexOf(i) + 1;
    const position = p.indexOf(x) + 1;
    y.push(position);
  }
  return y;
}
