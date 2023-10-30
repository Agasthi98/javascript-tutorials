//reverse string
var str = "madam";

reverse = "";

for (var i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}

if (reverse === str) {
  console.log(reverse);

  console.log("palindrome");
} else {
  console.log(reverse);

  console.log("not palindrome");
}
