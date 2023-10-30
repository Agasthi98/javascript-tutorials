/**
 * factorial num
 * @param {*} n
 * @returns
 */
const factorial = (n) => {
  if (n === 0) return 1;

  for (var i = n - 1; i >= 1; i--) {
    console.log(i);

    n *= i;
  }
  return n;
};

var x = 6;
console.log(factorial(x));

// function factorial(n) {
//   if (n === 0) return 1;

//   let fact = 1;
//   for (var i = 1; i <= n; i++) {
//     console.log(i);
//     fact *= i;
//   }
//   return fact;
// }

// console.log(factorial(6));
