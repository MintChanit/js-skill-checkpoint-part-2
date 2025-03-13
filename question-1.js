const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
const allPeople = [...techupPeople, ...techcoolPeople];

const ageBelow20 = allPeople.filter((ages) => ages.age < 20);
console.log(ageBelow20);