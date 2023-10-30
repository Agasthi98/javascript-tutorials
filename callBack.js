// call back is a function that is passed to another function as a parameter

function add(a, b) {
  return a + b;
}

var r = add(2, 5);
// console.log(r);

//operation is a callback function
function display(x, y, operation) {
  var result = operation(x, y);
  console.log(result);
}

display(10, 15, add);
