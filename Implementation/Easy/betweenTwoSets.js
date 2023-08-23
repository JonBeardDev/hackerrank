function getTotalX(a, b) {
  const maxA = Math.max(...a);
  const minB = Math.min(...b);

  let total = 0;
  let isFactor = true;

  for (let i = maxA; i <= minB; i++) {
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) {
        isFactor = false;
        break;
      }
    }
    if (isFactor) {
      for (let j = 0; j < b.length; j++) {
        if (b[j] % i !== 0) {
          isFactor = false;
          break;
        }
      }
    }
    if (isFactor) {
      total++;
    }
    isFactor = true;
    console.log(total);
  }

  return total;
}
