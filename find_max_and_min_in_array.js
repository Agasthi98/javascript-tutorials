var x = [100, 50, 20, 10, 1000, 500, 200];
var max = x[0];
var min = x[0];
for (var i = 0; i <= x.length; i++) {
  if (x[i] > max) {
    max = x[i];
  } else if (x[i] < min) {
    min = x[i];
  }
}
console.log(max, min);

// const findMaxAndMinValues = () => {
//   let Arr = [50, 60, 20, 10, 40];

//   let minValue = Math.min(...Arr);
//   let maxValue = Math.max(...Arr);

//   console.log("Minimum element is:" + minValue);
//   console.log("Maximum Element is:" + maxValue);
// };

// findMaxAndMinValues();
