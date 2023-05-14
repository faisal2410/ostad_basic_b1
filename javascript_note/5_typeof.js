/*
In JavaScript, typeof is an operator that is used to determine the data type of a value or variable. It takes a single argument and returns a string indicating the data type of that argument.

For example, if you have a variable x that has the value of 5, you can use typeof x to determine that x is a number. Similarly, if you have a variable y that has the value of "Hello", you can use typeof y to determine that y is a string.

Here are the possible return values of typeof:

"undefined" if the value is undefined
"boolean" if the value is a boolean
"number" if the value is a number
"string" if the value is a string
"bigint" if the value is a BigInt
"symbol" if the value is a symbol
"object" if the value is an object (excluding null)
"function" if the value is a function
It's important to note that typeof null returns "object", which is a historical quirk in JavaScript that cannot be changed without breaking existing code.
*/


// In JavaScript, typeof is an operator that returns a string indicating the data type of its operand.The syntax of typeof is as follows:


typeof operand
// Here, the operand can be any expression, variable or literal value.The typeof operator returns one of the following string values:

// "undefined" - If the operand is undefined.
// "boolean" - If the operand is a boolean value.
// "number" - If the operand is a number value.
// "string" - If the operand is a string value.
// "object" - If the operand is an object, array or null value.
// "function" - If the operand is a function.
// Here are some examples of using the typeof operator in JavaScript:


// Example 1: typeof with undefined
var x;
console.log(typeof x); // Output: "undefined"

// Example 2: typeof with boolean
var y = true;
console.log(typeof y); // Output: "boolean"

// Example 3: typeof with number
var z = 10;
console.log(typeof z); // Output: "number"

// Example 4: typeof with string
var str = "Hello, World!";
console.log(typeof str); // Output: "string"

// Example 5: typeof with object
var obj = { name: "John", age: 30 };
console.log(typeof obj); // Output: "object"

// Example 6: typeof with null
var nullValue = null;
console.log(typeof nullValue); // Output: "object"

// Example 7: typeof with function
function add(a, b) {
    return a + b;
}
console.log(typeof add); // Output: "function"


// What will be the output of the following code?
var x;
var y = true;
var z = 10;
var str = "Hello, World!";
var obj = { name: "John", age: 30 };
var nullValue = null;
function add(a, b) {
    return a + b;
}
console.log(typeof x); // A. "undefined"
console.log(typeof y); // B. "boolean"
console.log(typeof z); // C. "number"
console.log(typeof str); // D. "string"
console.log(typeof obj); // E. "object"
console.log(typeof nullValue); // F. "object"
console.log(typeof add); // G. "function"
// Select the correct output for each console.log statement.
// Answer: A. "undefined", B. "boolean", C. "number", D. "string", E. "object", F. "object", G. "function"

