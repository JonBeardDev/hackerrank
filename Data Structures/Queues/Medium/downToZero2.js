const precomputed = [0, 1, 2, 3];

function downToZero(n) {
  while (n >= precomputed.length) {
    const length = precomputed.length;
    const sqrt = Math.floor(Math.sqrt(length));
    let min = precomputed[length - 1];
    for (let i = 2; i <= sqrt; i++) {
      if (length % i === 0) {
        min = Math.min(min, precomputed[length / i]);
      }
    }
    precomputed.push(1 + min);
  }
  return precomputed[n];
}
