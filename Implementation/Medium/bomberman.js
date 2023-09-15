function bomberMan(n, grid) {
  const fullGrid = grid.join("").replaceAll(".", "O");
  const length = grid[0].length;
  const regex = new RegExp(`.{1,${length}}`, "g");

  if (n === 1) return grid;
  if (n % 2 === 0) return fullGrid.match(regex);

  const firstState = detonate(fullGrid.split(""), grid, length, regex);
  const secondState = detonate(fullGrid.split(""), firstState, length, regex);

  return n % 4 === 1 ? secondState : firstState;
}

function detonate(grid, previousState, length, regex) {
  const bombs = previousState.map((row) =>
    row.split("").map((value, index) => (value == "O" ? index : undefined))
  );
  for (let i = bombs.length - 1; i >= 0; i--) {
    for (let j = bombs[i].length - 1; j >= 0; j--) {
      if (bombs[i][j] === undefined) continue;

      grid.splice(bombs[i][j] + length * i, 1, "."); //bomb
      if (bombs[i][j] !== 0) grid.splice(bombs[i][j] - 1 + length * i, 1, "."); //left
      if (bombs[i][j] != length - 1)
        grid.splice(bombs[i][j] + 1 + length * i, 1, "."); //right
      if (grid[bombs[i][j] + length * (i + 1)] !== undefined)
        grid.splice(bombs[i][j] + length * (i + 1), 1, "."); //bottm
      if (grid[bombs[i][j] + length * (i - 1)] !== undefined)
        grid.splice(bombs[i][j] + length * (i - 1), 1, "."); //top
    }
  }
  return grid.join("").match(regex);
}
