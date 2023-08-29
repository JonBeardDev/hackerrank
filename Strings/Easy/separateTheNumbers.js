function separateNumbers(s) {
  let response = "NO";
  let x = 0;

  while (++x <= s.length / 2) {
    let num = BigNumber(s.slice(0, x));
    let acc = num;
    let comp = "";

    do {
      comp += `${acc}`;
      acc = acc.plus(1);
    } while (comp.length < s.length);

    if (comp === s) {
      response = `YES ${num}`;
      break;
    }
  }
  console.log(response);
}
