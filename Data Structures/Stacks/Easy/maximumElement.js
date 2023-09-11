// Solution with stack
function getMax(operations) {
  // Write your code here
  let finalArray = [];
  let finalArrayCounter = 0;
  class Stack {
    constructor() {
      this.items = [];
      this.count = 0;
    }
    pop() {
      if (this.count === 0) return;
      this.count--;
    }
    push(value) {
      this.items[this.count] = +value;
      this.count++;
    }
    getTop() {
      if (this.count === 0) return;

      let max = this.items[0];
      for (let i = 0; i < this.count; i++) {
        if (this.items[i] > max) max = this.items[i];
      }
      finalArray[finalArrayCounter] = max;
      finalArrayCounter++;
    }
  }
  const stack1 = new Stack();
  if (operations.length > 0) {
    for (let op of operations) {
      let splitOp = op.split(" ");
      if (splitOp[0] == "2") stack1.pop();
      if (splitOp[0] == "3") {
        stack1.getTop();
      }
      if (splitOp[0] == "1") stack1.push(splitOp[1]);
    }
  }

  return finalArray;
}

// Shorter solution with array
function getMax(operations) {
  let stack = [];
  const answers = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i].charAt(0) === "1") {
      const value = Number(operations[i].slice(2));
      stack.push(value);
    } else if (operations[i] === "2") {
      stack = stack.slice(0, -1);
    } else {
      const max = Math.max(...stack);
      answers.push(max);
    }
  }

  return answers;
}
