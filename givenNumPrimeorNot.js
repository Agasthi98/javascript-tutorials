function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  // Check for numbers from 2 to the square root of the given number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Test the function with a sample number
const numberToCheck = 17;
if (isPrime(numberToCheck)) {
  console.log(`${numberToCheck} is a prime number.`);
} else {
  console.log(`${numberToCheck} is not a prime number.`);
}
