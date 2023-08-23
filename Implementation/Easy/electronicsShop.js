function getMoneySpent(keyboards, drives, b) {
  let max = 0;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const cost = keyboards[i] + drives[j];
      if (cost > max && cost <= b) {
        max = cost;
      }
    }
  }
  if (max !== 0) {
    return max;
  }
  return -1;
}
