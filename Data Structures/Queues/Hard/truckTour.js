function truckTour(petrolpumps) {
  let remainingPetrol = 0;
  let startPump = 0;

  for (let i = 0; i < petrolpumps.length; i++) {
    const [petrol, distance] = petrolpumps[i];

    remainingPetrol += petrol;

    if (distance > remainingPetrol) {
      startPump = i + 1;
      remainingPetrol = 0;
    } else {
      remainingPetrol -= distance;
    }
  }

  return startPump;
}
