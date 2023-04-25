//1
//(a)
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(arr);
//(b)
var strArr = ["this", "is", "a", "test", "string"];

(function(strArr) {
  for (var i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  console.log(strArr);
})(strArr);

//(c)
var numArr = [1, 2, 3, 4, 5];

var sum = (function(numArr) {
  var sum = 0;
  for (var i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
})(numArr);

console.log(sum);
//(d)
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var primes = (function(numArr) {
  var result = [];
  for (var


//(e)
var strArr = ["racecar", "apple", "rotor", "banana"];

var palindromes = (function(strArr) {
  var result = [];
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i].split("").reverse().join("")) {
      result.push(strArr[i]);
    }
  }
  return result;
})(strArr);

console.log(palindromes);
//(f)
//(g)
var arr = [1, 2, 3, 4, 3, 2, 1];

var uniqueArr = (function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
})(arr);

console.log(uniqueArr);

//3
//(a)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbers = arr.filter(num => num % 2 !== 0);

console.log(oddNumbers);
//(b)
const strArr = ["hello", "world", "how", "are", "you"];

const titleCase = strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));

console.log(titleCase);
//(c)
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

//(d)
//(e)
const strArr = ["racecar", "apple", "rotor", "banana"];

const palindromes = strArr.filter(str => str === str.split("").reverse().join(""));

console.log(palindromes);

