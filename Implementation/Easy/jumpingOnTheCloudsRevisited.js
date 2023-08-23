function jumpingOnClouds(c, k) {
  let energy = 100;
  const numClouds = c.length;
  let currentCloud = 0;

  do {
    currentCloud = (currentCloud + k) % numClouds;
    energy -= 1;

    if (c[currentCloud] === 1) {
      energy -= 2;
    }
  } while (currentCloud !== 0);

  return energy;
}
