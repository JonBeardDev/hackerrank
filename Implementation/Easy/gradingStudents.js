function gradingStudents(grades) {
  let adjustedGrades = [];

  for (let i = 0; i < grades.length; i++) {
    const remainder = grades[i] % 5;

    if (grades[i] < 38 || remainder < 3) {
      adjustedGrades.push(grades[i]);
    } else {
      adjustedGrades.push(grades[i] + (5 - remainder));
    }
  }
  return adjustedGrades;
}
