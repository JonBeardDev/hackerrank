function acmTeam(topic) {
  let maxKnown = 0;
  let teams = 0;

  for (let i = 0; i < topic.length - 1; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let known = 0;
      for (let k = 0; k < topic[i].length; k++) {
        if (topic[i].charAt(k) === "1" || topic[j].charAt(k) === "1") {
          known++;
        }
      }

      if (known > maxKnown) {
        maxKnown = known;
        teams = 1;
      } else if (known === maxKnown) {
        teams++;
      }
      console.log(maxKnown, teams);
    }
  }
  return [maxKnown, teams];
}
