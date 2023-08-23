function bonAppetit(bill, k, b) {
  let annaTotal = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      annaTotal += bill[i];
    }
  }
  const shared = annaTotal / 2;
  const difference = b - shared;

  if (difference) {
    console.log(difference);
  } else {
    console.log("Bon Appetit");
  }
}
