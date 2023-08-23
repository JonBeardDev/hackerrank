function organizingContainers(container) {
  let colors = container[0].length;
  let arr = new Array(colors).fill(0);
  let capacity = [];
  let count = 0;
  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < colors; j++) {
      arr[j] += container[i][j];
    }
  }
  container.forEach((element) => {
    capacity.push(element.reduce((a, b) => a + b));
  });

  for (let i = 0; i < arr.length; i++) {
    if (capacity.includes(arr[i])) {
      count++;
    }
  }

  return count < colors ? "Impossible" : "Possible";
}
