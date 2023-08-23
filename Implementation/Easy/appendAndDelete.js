function appendAndDelete(s, t, k) {
  let minOperations = s.length + t.length;

  if (k > minOperations) return "Yes";

  for (
    let i = 0, length = Math.min(s.length, t.length);
    i < length;
    i++, minOperations -= 2
  ) {
    if (s[i] !== t[i]) break;
  }
  return minOperations > k || (k - minOperations) % 2 !== 0 ? "No" : "Yes";
}
