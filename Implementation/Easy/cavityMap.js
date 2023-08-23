function cavityMap(grid) {
  const cavityMap = grid.map((x) => x);

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (
        Math.max(
          grid[i - 1][j],
          grid[i + 1][j],
          grid[i][j - 1],
          grid[i][j + 1]
        ) < grid[i][j]
      ) {
        const left = cavityMap[i].slice(0, j);
        const right = cavityMap[i].slice(j + 1);
        cavityMap[i] = left + "X" + right;
      }
    }
  }
  return cavityMap;
}
