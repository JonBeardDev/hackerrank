function processData(input) {
  input = input.split(/\n/);
  let queue = [];

  for (let i = 1; i < input.length; i++) {
    const query = input[i].charAt(0);

    if (query === "1") {
      queue.push(input[i].slice(2));
    } else if (query === "2") {
      queue = queue.slice(1);
    } else {
      console.log(queue[0]);
    }
  }
}
