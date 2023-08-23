function catAndMouse(x, y, z) {
  const diffX = Math.abs(x - z);
  const diffY = Math.abs(y - z);

  if (diffX > diffY) {
    return "Cat B";
  } else if (diffX < diffY) {
    return "Cat A";
  }
  return "Mouse C";
}
