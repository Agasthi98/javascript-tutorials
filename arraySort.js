// Define an array of person objects
const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

// Sort people by name
// people.sort((a, b) => {
//   const A = a.name.toUpperCase();
//   const B = b.name.toUpperCase();

//   if (A < B) {
//     return 1;
//   }
//   if (A > B) {
//     return -1;
//   }
//   return 0;
// });

//sort by people age
people.sort((a, b) => {
  return b.age - a.age;
});

console.log(people);
