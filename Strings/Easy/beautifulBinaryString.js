function beautifulBinaryString(b) {
  let count = 0;

  for (let i = 0; i < b.length - 2; i++) {
    if (b[i] === "0" && b[i + 1] === "1" && b[i + 2] === "0") {
      count++;
      i += 2;
    }
  }
  return count;
}
