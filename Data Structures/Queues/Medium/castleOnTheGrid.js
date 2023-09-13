function printGrid(grid) {
  // helper function - simply prints the given grid to screen
  console.log(grid.join("\n"));
  console.log("=======");
}

function modifyGrid(grid, x, y, mod) {
  // makes given string modification to grid
  grid[y] = grid[y].substring(0, x) + mod + grid[y].substring(x + 1);
}

function getGridMark(grid, x, y) {
  // helper function for getting string value at given grid location
  return grid[y][x];
}

class Spot {
  // a simple data structure for containing data for a spot on grid
  constructor(x, y, path) {
    this.x = x;
    this.y = y;
    // represents path from start to get to spot (last step taken is at 0, first step taken is at end of string)
    this.path = path || ""; // default as empty string, representing start
  }

  hasShorterPathThan(bestPathLength) {
    return this.path.length < bestPathLength;
  }
}

// Complete the minimumMoves function below.
function minimumMoves(grid, startY, startX, goalY, goalX) {
  const gridSize = grid.length;
  // GRID MARKS
  const START = "S";
  const END = "E";
  const WALL = "X";
  const VISITED = "*";
  const PATH = ".";

  // SHORT CIRCUIT FOR RARE CASE OF NO WALLS
  if (grid.map((row) => !row.includes(WALL)).every((col) => col)) {
    // if start and goal share same side, only 1 move needed, else 2
    return startX - goalX == 0 || startY - goalY == 0 ? 1 : 2;
  }

  // adding start and end marks to grid
  modifyGrid(grid, startX, startY, START);
  modifyGrid(grid, goalX, goalY, END);

  let fewestSteps = Infinity; // worse case - will be replaced
  const queue = [new Spot(startX, startY)];

  const isValidMark = (mark) => {
    // only valid spots are PATH and END (or not VISITED and not START)
    return mark == PATH || mark == END;
  };

  const addSpotToQueue = (spot) => {
    const mark = getGridMark(grid, spot.x, spot.y);
    if (isValidMark(mark)) {
      // only considering valid marks
      // only adding if shorter than current best
      if (spot.hasShorterPathThan(fewestSteps)) {
        queue.push(spot);
      }
    }
  };
  // while loop until queue empty
  while (queue.length) {
    const spot = queue.shift(); //popping off end to consider longest moves first
    // ignore anything that cannot be better than current best
    if (!spot.hasShorterPathThan(fewestSteps)) {
      continue;
    }
    const x = spot.x;
    const y = spot.y;
    const path = spot.path;
    const lastStep = path[0]; // last step taken added to beginning of string
    // ignore anything that's already been visited (possible from prev spots in queue)
    const mark = getGridMark(grid, x, y);
    if (mark == VISITED) {
      continue;
    } else if (mark == END) {
      // end found, removing from consideration
      fewestSteps = path.length;
      if (fewestSteps == 1) break; // nothing shorter
      continue;
    } else if (mark != START) {
      // marking spot as visited
      modifyGrid(grid, x, y, VISITED);
    }

    // up, down, left, right and keep directions as growing string
    const UP = "U";
    const DOWN = "D";
    const LEFT = "L";
    const RIGHT = "R";
    // all UP steps
    if (y - 1 >= 0 && (lastStep != UP || lastStep != DOWN)) {
      // ensures no repeated UP steps, since internal while loop considers all of them already. Also, doesn't make sense to go back
      let newY = y - 1;
      // all UP directions considered
      while (newY >= 0 && isValidMark(getGridMark(grid, x, newY))) {
        addSpotToQueue(new Spot(x, newY, UP + path));
        newY -= 1;
      }
    }
    // all DOWN steps
    if (y + 1 < gridSize && (lastStep != DOWN || lastStep != UP)) {
      let newY = y + 1;
      while (newY < gridSize && isValidMark(getGridMark(grid, x, newY))) {
        addSpotToQueue(new Spot(x, newY, DOWN + path));
        newY += 1;
      }
    }
    // all LEFT steps
    if (x - 1 >= 0 && (lastStep != LEFT || lastStep != RIGHT)) {
      let newX = x - 1;
      while (newX >= 0 && isValidMark(getGridMark(grid, newX, y))) {
        addSpotToQueue(new Spot(newX, y, LEFT + path));
        newX -= 1;
      }
    }
    // all RIGHT steps
    if (x + 1 < gridSize && (lastStep != RIGHT || lastStep != LEFT)) {
      let newX = x + 1;
      while (newX < gridSize && isValidMark(getGridMark(grid, newX, y))) {
        addSpotToQueue(new Spot(newX, y, RIGHT + path));
        newX += 1;
      }
    }
  }
  return fewestSteps;
}
