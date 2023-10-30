const person = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 25,
  },

  {
    name: "Jim",
    age: 20,
  },
];

var r = person.map((item) => {
  return item.name;
});

console.log(r);
