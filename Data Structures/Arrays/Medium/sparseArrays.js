function matchingStrings(stringList, queries) {
  const result = [];

  queries.forEach((query) => {
    let count = 0;

    for (let i = 0; i < stringList.length; i++) {
      if (query === stringList[i]) count++;
    }
    result.push(count);
  });
  return result;
}
