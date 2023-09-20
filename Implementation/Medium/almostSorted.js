function almostSorted(arr) {
  const x = [];
  const sorted = [...arr].sort((a, b) => a - b);
  arr.forEach((v, i) => v !== sorted[i] && x.push(i));

  if (!x.length) {
    console.log("yes");
  } else if (x.length === 2) {
    console.log("yes");
    console.log("swap", x[0] + 1, x[1] + 1);
  } else {
    const a = x[0],
      b = x.pop();
    for (let i = a; i <= b; i++) {
      if (arr[i] !== sorted[b - i + a]) return console.log("no");
    }
    console.log("yes");
    console.log("reverse", a + 1, b + 1);
  }
}
