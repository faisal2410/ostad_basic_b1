// In JavaScript, parseInt, parseFloat, and toFixed are all methods that can be used to manipulate numbers.

// parseInt is a function that converts a string to an integer.It takes two arguments: the string to convert and the radix, which is the base number system to use(typically either 10 for decimal or 16 for hexadecimal).If the radix is not specified, parseInt assumes base 10.

// 👀👀

// const numString = "123";
// const num = parseInt(numString, 10); // 123

// parseFloat is similar to parseInt, but it converts a string to a floating - point number.It only takes one argument, the string to convert.


const floatString = "3.14";
const floatNum = parseFloat(floatString); // 3.14

// toFixed is a method that rounds a number to a specified number of decimal places and returns a string representation of the result.It takes one argument, the number of decimal places to round to.

// 👀👀
// const num = 3.14159265359;
// const roundedNum = num.toFixed(2); // "3.14"

// It's important to note that toFixed returns a string, not a number, so you may need to convert it back to a number using parseFloat or Number if you want to perform mathematical operations with it.


// In JavaScript, coercion refers to the automatic conversion of one data type to another data type by the JavaScript engine.There are two types of coercion: implicit and explicit.

// Implicit Coercion:
// Implicit coercion occurs when JavaScript automatically converts a value from one data type to another data type, without any explicit instruction from the developer.
// For example:


// var num = 10;
// var str = "20";
// console.log(num + str); // Output: "1020"


// In the above code, num is a number variable and str is a string variable.When we use the + operator to add these two variables, JavaScript automatically coerces num to a string and concatenates it with the str variable.

// Explicit Coercion:
// Explicit coercion occurs when a developer intentionally converts a value from one data type to another data type using a built -in JavaScript function.
// For example:


// var str = "10";
// var num = Number(str);
// console.log(num); // Output: 10


// In the above code, we are using the Number() function to explicitly coerce the str variable to a number data type.

// Here are some common functions used for explicit coercion in JavaScript:

//     Number() - converts a value to a number data type.
//     String() - converts a value to a string data type.
//     Boolean() - converts a value to a boolean data type.
//                 It's important to note that coercion can lead to unexpected behavior in your code if you're not careful.It's always a good practice to explicitly convert data types when necessary to avoid unexpected results.



// Implicit Coercion:
// Coercing a boolean value to a string:

var flag = true;
console.log("The flag is " + flag); // Output: "The flag is true"

// In the above code, we are concatenating a string with a boolean value.JavaScript automatically coerces the boolean value to a string and concatenates it with the string.

// Coercing a string value to a number:

var num1 = 10;
var num2 = "5";
console.log(num1 - num2); // Output: 5
// In the above code, we are subtracting a string value from a number value.JavaScript automatically coerces the string value to a number and performs the subtraction operation.

// Explicit Coercion:
// Coercing a string to a number:


var str = "10";
var num = Number(str);
console.log(num + 5); // Output: 15
// In the above code, we are using the Number() function to explicitly coerce the str variable to a number data type.

// Coercing a number to a string:

var num = 10;
var str = String(num);
console.log("The number is " + str); // Output: "The number is 10"
// In the above code, we are using the String() function to explicitly coerce the num variable to a string data type.

//     It's important to be aware of the potential for unexpected results when using coercion in JavaScript. For example, when coercing a string to a number, if the string contains non-numeric characters, the result will be NaN. Similarly, when coercing a boolean value to a number, true is converted to 1 and false is converted to 0.

// Overall, it's best to be explicit about type conversions in your code to avoid any unexpected behavior.



// In JavaScript, the Boolean() function is a built -in function that can be used to explicitly convert a value to a boolean data type.Here's an example:


var num = 10;
var bool = Boolean(num);
console.log(bool); // Output: true
// In the above code, we are using the Boolean() function to explicitly convert the num variable to a boolean data type.Since num has a truthy value(i.e., it's not 0 or null or undefined), the resulting boolean value is true.

// Here are a few more examples of using the Boolean() function:

  
var str = "hello";
var bool1 = Boolean(str); // true, since a non-empty string is truthy
var bool2 = Boolean(""); // false, since an empty string is falsy
var obj = { name: "John" };
var bool3 = Boolean(obj); // true, since any non-null object is truthy
var bool4 = Boolean(null); // false, since null is falsy

// In general, any non - zero or non - empty value(including non - null objects) will be coerced to true when passed to the Boolean() function, while a zero or empty value(including null or undefined) will be coerced to false.

// Note that you can also use the double negation operator(!!) to perform an implicit boolean conversion, like so:


var num = 10;
var bool = !!num;
console.log(bool); // Output: true

// This will effectively convert the num variable to a boolean value by performing two negations: the first negation coerces num to a boolean, and the second negation returns the opposite boolean value.



Question:

// What will be the output of the following code ?

    
var num1 = "10";
var num2 = "5";
var bool1 = Boolean(num1);
var bool2 = Boolean(num2);
var str1 = String(bool1);//"true"
var str2 = String(bool2); //"true"
var num3 = Number(str1);//NaN
var num4 = Number(str2);//NaN

console.log(num3 + num4);
// Options:
// A) 1
// B) 2
// C) 5
// D) Nan

// Answer:
// D) Nan

// Explanation:
// The code performs several explicit type coercions using the Boolean(), String(), and Number() functions.Here's what happens step by step:

// The num1 and num2 variables are string values, so when we pass them to the Boolean() function, they are both converted to true(since they are non - empty strings).

// The bool1 and bool2 variables are now boolean values, and when we pass them to the String() function, they are converted to the string values "true" and "false", respectively.

// The str1 and str2 variables are both string values, and when we pass them to the Number() function, they are converted to NaN respectively.

//     Finally, we add num3 and num4 together, which results in the number value NaN + NaN = NaN.

// However, the correct answer is actually 15, not 1, because we made a mistake in our explanation! The code as written actually concatenates the str1 and str2 variables together using the + operator, because they are both string values.So the resulting string is "truefalse".When we pass this string to the Number() function, it is coerced to the number value NaN(since it is not a valid number), so num3 and num4 both have a value of NaN.When we add these together using the + operator, the result is also NaN.

//     Therefore, the correct output of the code is NaN.




