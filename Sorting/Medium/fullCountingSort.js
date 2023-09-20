function countSort(arr) {
  const list = [];

  for (let i = 0; i < arr.length; i++) {
    const index = arr[i][0];

    if (!list[index]) {
      list[index] = [];
    }

    if (i < arr.length / 2) {
      list[index].push("-");
    } else {
      list[index].push(arr[i][1]);
    }
  }

  const result = list.flat();
  console.log(result.join(" "));
}
