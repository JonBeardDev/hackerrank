function waiter(number, q) {
  let iteration = 1;

  let answers = [];
  let stackA = [];
  let stackB = [];

  while (iteration <= q) {
    stackA = [];
    stackB = [];
    const prime = findNthPrime(iteration);
    for (let i = number.length - 1; i >= 0; i--) {
      if (number[i] % prime === 0) {
        stackB.push(number[i]);
      } else {
        stackA.push(number[i]);
      }
    }
    answers = answers.concat(stackB.reverse());
    if (stackA.length === 0) break;
    number = stackA;
    iteration++;
  }
  if (stackA) {
    answers = answers.concat(stackA.reverse());
  }

  return answers;
}
