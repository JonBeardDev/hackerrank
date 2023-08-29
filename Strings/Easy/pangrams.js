function pangrams(s) {
  s = s.toLowerCase();
  const alphaSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") alphaSet.add(s[i]);
  }

  if (alphaSet.size === 26) return "pangram";
  return "not pangram";
}
