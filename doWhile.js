/** 
const iteration = () => {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
};

iteration();
*/

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

for (let val in person) {
  console.log(person[val]);
}
