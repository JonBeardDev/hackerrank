function camelcase(s) {
  const capitals = s.match(/[A-Z]/g);
  if (capitals) {
    return capitals.length + 1;
  }
  return 1;
}
