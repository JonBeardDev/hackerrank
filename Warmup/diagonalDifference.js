function diagonalDifference(arr) {
  let lToR = 0;
  let rToL = 0;
  let i = 0;
  let j = arr[0].length - 1;

  do {
    lToR += arr[i][i];
    rToL += arr[i][j];
    console.log(lToR, rToL);
    i++;
    j--;
  } while (i < arr[1].length);

  return Math.abs(lToR - rToL);
}
