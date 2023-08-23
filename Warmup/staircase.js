function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = i; j < n; j++) {
      line += " ";
    }
    for (let j = 1; j <= i; j++) {
      line += "#";
    }
    console.log(line);
  }
}
