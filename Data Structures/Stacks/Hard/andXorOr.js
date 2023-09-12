function andXorOr(a) {
  let stack = [a[0], a[1]];
  let max = a[0] ^ a[1];

  for (let i = 2; i < a.length; i++) {
    while (stack.length > 0) {
      const element = stack[stack.length - 1];
      const sum = a[i] ^ element;

      if (sum > max) {
        max = sum;
      }
      if (a[i] < element) {
        stack.pop();
      } else break;
    }
    stack.push(a[i]);
  }
  return max;
}
