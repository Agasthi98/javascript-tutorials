const findSecondLargest = (arr) => {
  if (arr.length < 2) {
    return "There is no second largest element in the array.";
  }

  arr.sort(function (a, b) {
    return b - a;
  });
  var r = "The second largest element in the array is: " + arr[1];
  return r;
};

// Example usage
const numbers = [40, 10, 5, 100, 20, 15, 30];
console.log(findSecondLargest(numbers));
