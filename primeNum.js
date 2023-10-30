/**
 * print 5 to 20 prime numbers
 * @param {*} num
 * @returns
 */

function checkPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 5; i <= 20; i++) {
  if (checkPrime(i)) {
    console.log(i);
  }
}
