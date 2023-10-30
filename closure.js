function outerFunction() {
  var outerVariable = "I am outside!";

  function innerFunction() {
    var innerVariable = "I am inside!";
    console.log(outerVariable); // Accessing the outer variable
    console.log(innerVariable); // Accessing the inner variable
  }

  return innerFunction;
}

var closure = outerFunction(); // 'closure' now contains the inner function

closure(); // calling closure will log 'I am outside!' and 'I am inside!'
