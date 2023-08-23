function kaprekarNumbers(p, q) {
  let kaprekar = [];

  for (let i = p; i <= q; i++) {
    const square = (i * i).toString();
    let r = square.substring(square.length - i.toString().length);
    let l = square.substring(0, square.length - i.toString().length);

    if (parseInt(r) + parseInt(l || 0) === i) {
      kaprekar.push(i);
    }
  }
  console.log(kaprekar.length ? kaprekar.join(" ") : "INVALID RANGE");
}
