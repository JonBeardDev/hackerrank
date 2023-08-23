function squares(a, b) {
  const rootA = Math.ceil(Math.sqrt(a));
  const rootB = Math.floor(Math.sqrt(b));

  return rootB - rootA + 1;
}
