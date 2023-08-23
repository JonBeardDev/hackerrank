function minimumDistances(a) {
  let minDistance = Infinity;

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        const distance = j - i;
        if (distance < minDistance) {
          minDistance = distance;
        }
        break;
      }
    }
  }
  return minDistance === Infinity ? -1 : minDistance;
}
