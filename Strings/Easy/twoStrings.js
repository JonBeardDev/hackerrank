function twoStrings(s1, s2) {
  const longest = s1.length > s2.length ? s1 : s2;
  const shortest = s1.length > s2.length ? s2 : s1;

  for (let i = 0; i < shortest.length; i++) {
    if (longest.includes(shortest[i])) {
      return "YES";
    }
  }

  return "NO";
}
