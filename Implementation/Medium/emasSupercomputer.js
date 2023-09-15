function twoPluses(grid) {
  const x = grid[0].length;
  const y = grid.length;
  const pluses = [];

  for (let row = 0; row < y; row++) {
    for (let col = 0; col < x; col++) {
      if (grid[row][col] === "G") {
        pluses.push([1, row, col]);

        const maxLength = Math.min(row, y - 1 - row, col, x - col - 1);
        let i = 1;

        while (i <= maxLength) {
          if (isPlus(grid, row, col, i)) {
            pluses.push([1 + i * 4, row, col]);
            i++;
          } else break;
        }
      }
    }
  }

  let ans = 1;

  for (let i = 0; i < pluses.length; i++) {
    for (let j = i + 1; j < pluses.length; j++) {
      if (!isOverlap(pluses[i], pluses[j])) {
        ans = Math.max(ans, pluses[i][0] * pluses[j][0]);
      }
    }
  }
  return ans;
}

function isPlus(grid, row, col, i) {
  return (
    grid[row - i][col] === "G" &&
    grid[row + i][col] === "G" &&
    grid[row][col - i] === "G" &&
    grid[row][col + i] === "G"
  );
}

function isOverlap(p1, p2) {
  if (p1[0] === 1 && p2[0] === 1) return false;

  const rowDiff = Math.abs(p1[1] - p2[1]);
  const colDiff = Math.abs(p1[2] - p2[2]);
  const l1 = Math.ceil(p1[0] / 4);
  const l2 = Math.ceil(p2[0] / 4);

  if (!rowDiff && colDiff + 1 < l1 + l2) return true;
  if (!colDiff && rowDiff + 1 < l1 + l2) return true;
  if (rowDiff < Math.min(l1, l2) && colDiff < Math.max(l1, l2)) return true;
  if (colDiff < Math.min(l1, l2) && rowDiff < Math.max(l1, l2)) return true;

  return false;
}
