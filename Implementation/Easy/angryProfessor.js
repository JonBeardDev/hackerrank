function angryProfessor(k, a) {
  let onTime = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      onTime++;
    }
  }
  console.log(onTime, k);
  if (onTime < k) {
    return "YES";
  }
  return "NO";
}
