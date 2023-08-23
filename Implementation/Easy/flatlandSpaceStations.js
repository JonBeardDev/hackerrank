function flatlandSpaceStations(n, c) {
  // Sort array for ease of use
  c.sort((a, b) => a - b);
  // Set initial max distance to the maximum of distance from first city to first station or last station to last city
  let maxDistance = Math.max(c[0], n - 1 - c[c.length - 1]);

  // For each other station, find the distance to the midpoint between them
  for (let i = 1; i < c.length; i++) {
    const distance = Math.floor((c[i] - c[i - 1]) / 2);
    maxDistance = Math.max(maxDistance, distance);
  }
  return maxDistance;
}
