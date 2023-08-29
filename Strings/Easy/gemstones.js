function gemstones(arr) {
  const firstRock = arr[0].split("");
  const minerals = new Set(firstRock);

  for (let i = 0; i < arr.length; i++) {
    const rock = new Set(arr[i].split(""));
    minerals.forEach((mineral) => {
      if (!rock.has(mineral)) {
        minerals.delete(mineral);
      }
    });
  }

  return minerals.size;
}
