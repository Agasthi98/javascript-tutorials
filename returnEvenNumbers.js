const filterEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

const filterOddNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 1);
};

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
const oddNumbers = filterOddNumbers(numbers);
console.log(evenNumbers.sort((a, b) => b - a));
console.log(oddNumbers);
