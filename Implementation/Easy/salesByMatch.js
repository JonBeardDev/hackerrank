function sockMerchant(n, ar) {
  let socks = {};
  let pairs = 0;

  ar.forEach((sock) => {
    if (socks[sock]) {
      socks[sock]++;
    } else {
      socks[sock] = 1;
    }
  });

  for (const sock in socks) {
    const value = socks[sock];
    pairs += Math.floor(value / 2);
  }

  return pairs;
}
