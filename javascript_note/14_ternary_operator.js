// The ternary operator is a concise way to write a simple if-else statement in JavaScript.It takes three operands: a condition to evaluate, a value to return if the condition is true, and a value to return if the condition is false.

// The syntax for the ternary operator is as follows:


// condition ? value_if_true : value_if_false

// Here's an example:


// let age = 18;
// let message = age >= 18 ? "You are an adult" : "You are not an adult";
// console.log(message);

// In this example, the condition is age >= 18, which checks if the age variable is greater than or equal to 18. If the condition is true, the value returned is "You are an adult".If the condition is false, the value returned is "You are not an adult".

// You can also nest ternary operators to create more complex expressions:


// let num = 5;
// let message = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
// console.log(message);




// const age = 18;
// const isEligibleToVote = (age >= 18) ? "Yes" : "No";
// console.log("Is the person eligible to vote?", isEligibleToVote); // output: Is the person eligible to vote? Yes



// const age = 18;
// const isCitizen = true;
// const isEligibleToVote = (age >= 18) ? (isCitizen ? "Yes" : "No, not a citizen") : "No, too young";
// console.log("Is the person eligible to vote?", isEligibleToVote); // output: Is the person eligible to vote? Yes



// let age = 25;
// let canDrinkAlcohol = age >= 21 ? "Yes" : "No";
// console.log(canDrinkAlcohol); // Output: Yes


// Write a ternary operator to check if a given number is even or odd
function isEvenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}

// Test cases
console.log(isEvenOrOdd(4)); // Output: even
console.log(isEvenOrOdd(7)); // Output: odd
console.log(isEvenOrOdd(0)); // Output: even

// Write a ternary operator to check if a user is logged in or not
let isLoggedIn = true; // Change to false to test
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: Welcome back! (if isLoggedIn is true), or Please log in. (if isLoggedIn is false)



// Declare a variable called "isRaining" and set it to true.
// Using a ternary operator, assign the value "umbrella" to a variable called "accessory" if it is raining, and "sunglasses" if it is not.
// Console log the value of the "accessory" variable.
//     Here's the code snippet:


let isRaining = true;
let accessory = isRaining ? "umbrella" : "sunglasses";
console.log(accessory);

// When you run this code, it should log "umbrella" to the console, since "isRaining" is set to true.

// You can modify the "isRaining" variable to false and run the code again to see if the value of "accessory" changes to "sunglasses".
