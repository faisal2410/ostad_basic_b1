// Concatenation is the process of combining strings in JavaScript.It is often used to create more complex strings by joining multiple smaller strings together.In JavaScript, concatenation can be achieved using the "+" operator or the "+=" operator.


// Using the "+" operator
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
let fString = "My Name is " + firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"

// Using the "+=" operator
let sentence = "The quick brown fox";
sentence += " jumps over the lazy dog.";
console.log(sentence); // Output: "The quick brown fox jumps over the lazy dog."

// In the first example, we create two variables, firstName and lastName, and then use the "+" operator to concatenate them with a space in between.The resulting string is stored in a new variable called fullName.

// In the second example, we start with a variable called sentence and then use the "+=" operator to append another string to it.This is a shorthand way of writing sentence = sentence + " jumps over the lazy dog.".

// Concatenation is a useful technique for building dynamic strings in JavaScript, such as building URLs or generating messages for user interfaces.


// 1. What will be the output of the following code?
var str1 = "Hello";
var str2 = "world";
console.log(str1 + str2); // Output: "Helloworld"
// A. "Hello world"
// B. "worldHello"
// C. "Helloworld"
// D. "Hello world!"
// Answer: C. "Helloworld"

// 2. What will be the output of the following code?
var name = "John";
var message = "Welcome to our website, " + name + "!";
console.log(message); // Output: "Welcome to our website, John!"
// A. "Welcome to our website, John"
// B. "Welcome to our website, John!"
// C. "Welcome to our website!"
// D. "Welcome to our website, John!!"
// Answer: B. "Welcome to our website, John!"

// 3. What will be the output of the following code?
var str1 = "Good";
var str2 = "morning";
var str3 = str1 + " " + str2 + "!";
console.log(str3); // Output: "Good morning!"
// A. "Goodmorning!"
// B. "Good morning!"
// C. "Good morning"
// D. "Good morning!!"
// Answer: B. "Good morning!"

// 4. What will be the output of the following code?
var x = 5;
var str = "The value of x is: " + x;
console.log(str); // Output: "The value of x is: 5"
// A. "The value of x is: 5"
// B. "The value of x is: " + x
// C. "The value of x is:"
// D. "The value of x is: 6"
// Answer: A. "The value of x is: 5"
