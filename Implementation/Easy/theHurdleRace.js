function hurdleRace(k, height) {
  const maxHeight = Math.max(...height);

  if (maxHeight <= k) {
    return 0;
  } else {
    return maxHeight - k;
  }
}
