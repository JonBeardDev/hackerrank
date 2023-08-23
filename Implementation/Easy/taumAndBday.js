function taumBday(b, w, bc, wc, z) {
  [b, w, bc, wc, z] = [b, w, bc, wc, z].map((n) => BigInt(n));
  if (bc + z < wc) {
    wc = bc + z;
  } else if (wc + z < bc) {
    bc = wc + z;
  }

  const btotal = b * bc;
  const wtotal = w * wc;

  return btotal + wtotal;
}
