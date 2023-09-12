function poisonousPlants(p) {
  let stack = [];
  let maxDays = 0;

  for (let i = 0; i < p.length; i++) {
    let daysAlive = 0;

    while (stack.length > 0 && p[i] <= stack[stack.length - 1].plant) {
      daysAlive = Math.max(daysAlive, stack.pop().days);
    }

    if (stack.length === 0) daysAlive = 0;
    else daysAlive += 1;

    maxDays = Math.max(maxDays, daysAlive);

    stack.push({ plant: p[i], days: daysAlive });
  }
  return maxDays;
}
