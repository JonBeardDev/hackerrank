function migratoryBirds(arr) {
  const freqs = {};
  let maxFreq = 0;
  let maxID = 0;

  for (const birdID of arr) {
    if (!freqs[birdID]) {
      freqs[birdID] = 1;
    } else {
      freqs[birdID]++;
    }

    if (freqs[birdID] > maxFreq) {
      maxFreq = freqs[birdID];
      maxID = birdID;
    } else if (freqs[birdID] === maxFreq && birdID < maxID) {
      maxID = birdID;
    }
  }
  return maxID;
}
