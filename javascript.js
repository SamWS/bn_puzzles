/*  Puzzle 1:

Using Ruby or Javascript, write a program that prints the numbers from 1 to 100, but for multiples of four print "oi" instead of the number and for multiples of five print "ay". For numbers which are multiples of both four and five print "oi ay".

*/

function oiay(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      console.log("oi ay");
    } else if (i % 4 === 0) {
      console.log("oi");
    } else if (i % 5 === 0) {
      console.log("ay");
    } else {
      console.log(i);
    }
  }
}

console.log(oiay(100));

/////////////////////////////////////////////////

/*  Puzzle 2:

In Javascript, write a function that checks if a string is a palindrome.

*/

function isPalindrome(str) {
  var regex = new RegExp(/[^a-z]/g);
  var trimStr = str.toLowerCase().replace(regex, '');
  return trimStr === trimStr.split('').reverse().join('') ? true : false;
}

console.log(isPalindrome("Race car"));
console.log(isPalindrome("A man, a plan, a canal -- Panama"));
console.log(isPalindrome("This is not a palindrome!"));

/////////////////////////////////////////////////

/* Puzzle 3:

Using Ruby or Javascript, write a function that reverses an array without using a loop (eg don't use `for` keyword or the `each` or `loop` methods). Do not use the standard library `reverse` method.

*/

function reverseArr(arr) {
  return arr.length <= 1 ? arr : reverseArr(arr.slice(1)).concat(arr[0]);
}

var nums = [1,2,3,4,5,6,7,8,9];
var newArr = ["works", "function", "the", "this", "read", "can", "you", "If"];

console.log(reverseArr(nums));
console.log(reverseArr(newArr));







