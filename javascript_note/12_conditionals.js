// In JavaScript, conditionals are used to execute certain code blocks based on whether a certain condition is true or false.The most common types of conditionals in JavaScript are if statements, if-else statements, and switch statements.

// if statements
// if statements are used to execute a block of code if a certain condition is true.

// let num = 5;

// if (num > 0) {
//     console.log("The number is positive");
// }


// In this example, if the variable num is greater than 0, then the console will log the string "The number is positive".

//  if -else statements
// if-else statements are used to execute a block of code if a certain condition is true, and a different block of code if that condition is false.

  
// let num = -5;

// if (num > 0) {
//     console.log("The number is positive");
// } else {
//     console.log("The number is not positive");
// }

// In this example, if the variable num is greater than 0, then the console will log the string "The number is positive".If the variable num is not greater than 0, then the console will log the string "The number is not positive".

//     else -if statements
// else -if statements are used to execute a block of code if a certain condition is true, and a different block of code if that condition is false, and another condition is true.

let num = 0;

if (num > 0) {
    console.log("The number is positive");
} else if (num < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

// In this example, if the variable num is greater than 0, then the console will log the string "The number is positive".If the variable num is not greater than 0, but is less than 0, then the console will log the string "The number is negative".If the variable num is neither greater than 0 nor less than 0, then the console will log the string "The number is zero".

// switch statements
// switch statements are used to execute a block of code based on the value of a variable.

   
let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    default:
        console.log("It's the weekend!");
        break;
}

// In this example, if the variable dayOfWeek is "Monday", then the console will log the string "Today is Monday".If the variable dayOfWeek is "Tuesday", then the console will log the string "Today is Tuesday".The default case



// Question:

// Write a JavaScript function named checkNumber that takes in a single parameter called num.The function should check if num is positive, negative or zero, and return a corresponding message as follows:

// If num is positive, return "The number is positive"
// If num is negative, return "The number is negative"
// If num is zero, return "The number is zero"
// Your task is to implement this function using a conditional statement in JavaScript.

    Answer:


function checkNumber(num) {
    if (num > 0) {
        return "The number is positive";
    } else if (num < 0) {
        return "The number is negative";
    } else {
        return "The number is zero";
    }
}

// Example usage:
console.log(checkNumber(5)); // Output: "The number is positive"
console.log(checkNumber(-5)); // Output: "The number is negative"
console.log(checkNumber(0)); // Output: "The number is zero"