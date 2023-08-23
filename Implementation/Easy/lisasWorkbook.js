function workbook(n, k, arr) {
  let specials = 0;
  let page = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      if (k === 1 || j % k === 1) {
        page++;
      }
      if (j === page) {
        specials++;
      }
    }
  }
  return specials;
}
