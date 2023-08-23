function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) {
    // If the kangaroos have the same rate, they'll never meet unless they start at the same point
    return x1 === x2 ? "YES" : "NO";
  }

  const t = (x1 - x2) / (v2 - v1);

  if (t >= 0 && Number.isInteger(t)) {
    return "YES";
  } else {
    return "NO";
  }
}
