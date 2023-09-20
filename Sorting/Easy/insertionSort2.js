function insertionSort2(n, arr) {
  const recursiveSort = (array, index) => {
    if (array[index]) {
      const actual = array[index];
      const modArray = array;

      const biggerIndex = modArray.findIndex((item) => actual <= item);

      if (biggerIndex < index) {
        modArray.splice(index, 1);
        modArray.splice(biggerIndex, 0, actual);
      }

      console.log(modArray.join(" "));
      recursiveSort(modArray, index + 1);
    }
  };

  recursiveSort(arr, 1);
}
