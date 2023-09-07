function dynamicArray(n, queries) {
  const tdArray = [];
  for (let i = 0; i < n; i++) {
    tdArray.push([]);
  }

  let lastAnswer = 0;
  const answers = [];

  queries.forEach((query) => {
    let index = (query[1] ^ lastAnswer) % n;

    if (query[0] === 1) {
      tdArray[index].push(query[2]);
    } else {
      lastAnswer = tdArray[index][query[2] % tdArray[index].length];
      answers.push(lastAnswer);
    }
  });

  return answers;
}
