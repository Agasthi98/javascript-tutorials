const string = (str, str1) => {
  return str.trim().concat(str1.trim());
};

var x = " geeks for geeks          ";
var y = "      agasthi sankalana    ";
console.log(string(x, y));
