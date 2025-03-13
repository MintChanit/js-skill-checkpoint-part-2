const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
function totalScore(students) {
  const studentsScoreAbove50 = students
    .filter((students) => students.score > 50)
    .map((students) => students.score + (students.score * 10/100))
    .reduce((acc, cur) => acc + cur, 0);

  return `Total score is ${studentsScoreAbove50}`;
}

console.log(totalScore(students))


