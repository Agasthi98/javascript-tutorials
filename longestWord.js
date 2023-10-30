// function longWord(str) {
//   var words = str.split(" ");
//   var longest = "";
//   for (var word of words) {
//     // console.log(word.length);

//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }
// var long = "I love coding!";
// console.log(longWord(long)); // early

//remove duplicates in an array

/** 
function removeDuplicates(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      console.log(arr[i]);
      unique.push(arr[i]);
    }
  }
  return unique;
}

var gg = [1, 2, 3, 4, 5, 6, 7, 1, 2];
removeDuplicates(gg);

console.log(removeDuplicates(gg));
*/

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  var sort1 = str1.split("").sort().join("");
  var sort2 = str2.split("").sort().join("");
  var r = sort1 === sort2;

  return r;
};

anagram("hello", "olleh");
console.log(anagram("hello", "olleh"));
