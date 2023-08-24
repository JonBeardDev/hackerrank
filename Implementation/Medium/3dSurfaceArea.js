function surfaceArea(a) {
  let row = a.length;
  let col = a[0].length;
  let total = row * col * 2;
  //top and bottom

  const compare = (value1, value2) => {
    let result = 0;
    if (value1 < value2) {
      result += value1;
    } else {
      result += value2;
    }
    return result;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let value = a[i][j];
      let max = value * 4;
      //front, back, left, right
      if (i - 1 >= 0) {
        max -= compare(value, a[i - 1][j]);
      }
      if (j - 1 >= 0) {
        max -= compare(value, a[i][j - 1]);
      }
      if (i + 1 <= row - 1) {
        max -= compare(value, a[i + 1][j]);
      }
      if (j + 1 <= col - 1) {
        max -= compare(value, a[i][j + 1]);
      }
      total += max;
    }
  }
  return total;
}
