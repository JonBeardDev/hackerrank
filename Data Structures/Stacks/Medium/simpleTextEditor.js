function processData(input) {
  let [str, previous] = ["", []];
  input
    .split(/\n/)
    .slice(1)
    .forEach((line) => {
      const [qType, val] = line.split(" ");
      if (qType === "1") {
        previous.push(str);
        str += val;
      } else if (qType === "2") {
        previous.push(str);
        str = str.substring(0, str.length - val);
      } else if (qType === "3") {
        console.log(str[val - 1] || "");
      } else {
        str = previous.pop();
      }
    });
}
