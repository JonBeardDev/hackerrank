function minimumNumber(n, password) {
  let missingTypes = 0;

  if (!/\d/.test(password)) missingTypes++;
  if (!/[a-z]/.test(password)) missingTypes++;
  if (!/[A-Z]/.test(password)) missingTypes++;
  if (!/[\!@#\$%\^&\*\(\)\-\+]/.test(password)) missingTypes++;

  if (n < 6) {
    return Math.max(6 - n, missingTypes);
  }
  return missingTypes;
}
