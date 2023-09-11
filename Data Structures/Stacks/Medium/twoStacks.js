function twoStacks(maxSum, a, b) {
  const numsA = [];
  let sum = 0;

  for (const numA of a) {
    const nextSum = sum + numA;
    if (nextSum > maxSum) break;
    sum = nextSum;
    numsA.push(numA);
  }

  let countNumsB = 0;
  let max = numsA.length;

  for (const numB of b) {
    sum += numB;
    countNumsB++;
    if (sum > maxSum) {
      if (!numsA.length) break;
      sum -= numsA.pop();
    } else {
      max = Math.max(countNumsB + numsA.length, max);
    }
  }

  return max;
}
