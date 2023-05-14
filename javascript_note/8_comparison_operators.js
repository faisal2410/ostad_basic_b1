// In JavaScript, comparison operators are used to compare values and return a boolean(true / false) value based on the comparison result.

// Here are some commonly used comparison operators in JavaScript:

// Equal to(==): This operator checks if two values are equal.If they are, it returns true, otherwise false.
  

// 👀👀
console.log(5 == 5); // true
console.log('5' == 5); // true
console.log(5 == 6); // false

// Strict equal to(===): This operator checks if two values are equal and of the same type.If they are, it returns true, otherwise false.
// 👀👀

console.log(5 === 5); // true
console.log('5' === 5); // false
console.log(5 === 6); // false

// Not equal to(!=): This operator checks if two values are not equal.If they are not, it returns true, otherwise false.
// 👀👀
console.log(5 != 5); // false
console.log('5' != 5); // false
console.log(5 != 6); // true
// Strict not equal to(!==): This operator checks if two values are not equal and of the same type.If they are not, it returns true, otherwise false.

  // 👀👀

console.log(5 !== 5); // false
console.log('5' !== 5); // true
console.log(5 !== 6); // true

// Greater than(>): This operator checks if the first value is greater than the second value.If it is, it returns true, otherwise false.

// 👀👀

console.log(5 > 3); // true
console.log(5 > 5); // false
console.log(5 > 7); // false

// Less than(<): This operator checks if the first value is less than the second value.If it is, it returns true, otherwise false.

// 👀👀

console.log(5 < 7); // true
console.log(5 < 5); // false
console.log(5 < 3); // false

// Greater than or equal to(>=): This operator checks if the first value is greater than or equal to the second value.If it is, it returns true, otherwise false.

// 👀👀

console.log(5 >= 3); // true
console.log(5 >= 5); // true
console.log(5 >= 7); // false

// Less than or equal to(<=): This operator checks if the first value is less than or equal to the second value.If it is, it returns true, otherwise false.

// 👀👀

console.log(5 <= 7); // true
console.log(5 <= 5); // true
console.log(5 <= 3); // false



function compareNumbers(num1, num2) {
  let result = "";

  if (num1 > num2) {
    result = `${num1} is greater than ${num2}`;
  } else if (num1 < num2) {
    result = `${num1} is less than ${num2}`;
  } else {
    result = `${num1} is equal to ${num2}`;
  }

  return result;
}

console.log(compareNumbers(5, 10));
// Output: "5 is less than 10"

console.log(compareNumbers(10, 5));
// Output: "10 is greater than 5"

console.log(compareNumbers(5, 5));
// Output: "5 is equal to 5"




