function isBalanced(s) {
  let brackets = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      brackets.push(s[i]);
    } else if (s[i] === "}") {
      if (brackets[brackets.length - 1] === "{") {
        brackets = brackets.slice(0, -1);
      } else {
        return "NO";
      }
    } else if (s[i] === "]") {
      if (brackets[brackets.length - 1] === "[") {
        brackets = brackets.slice(0, -1);
      } else {
        return "NO";
      }
    } else if (s[i] === ")") {
      if (brackets[brackets.length - 1] === "(") {
        brackets = brackets.slice(0, -1);
      } else {
        return "NO";
      }
    }
  }
  if (brackets.length) return "NO";
  return "YES";
}
