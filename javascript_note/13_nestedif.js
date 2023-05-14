// Nested if statements in JavaScript are simply if statements that are contained within other if statements.They allow you to check for multiple conditions and execute different code blocks based on the result of those conditions.

//     Here's an example code snippet that demonstrates the use of nested if statements in JavaScript:


let x = 10;
let y = 5;

if (x > 0) {
    if (y > 0) {
        console.log("Both x and y are positive numbers");
    } else {
        console.log("x is positive, but y is not");
    }
} else {
    console.log("x is not positive");


}
// In this example, we first check if x is greater than 0 using the outer if statement.If x is indeed greater than 0, we move on to the inner if statement to check if y is also greater than 0. If both conditions are met, we print the message "Both x and y are positive numbers".If only the outer condition is met(i.e.x is positive but y is not), we print the message "x is positive, but y is not".If neither condition is met, we print the message "x is not positive".


let num1 = 5;
let num2 = 10;
let num3 = 15;

if (num1 > 0) {
    if (num2 > 0) {
        if (num3 > 0) {
            console.log("All three numbers are positive");
        } else {
            console.log("num3 is not positive");
        }
    } else {
        console.log("num2 is not positive");
    }
} else {
    console.log("num1 is not positive");
}


// In this example, we have three nested if statements.The first if statement checks if num1 is greater than 0. If it is, the second if statement checks if num2 is also greater than 0. If both of these conditions are met, the third if statement checks if num3 is greater than 0. If all three conditions are met, we print the message "All three numbers are positive".If any of the conditions are not met, we print a message indicating which number is not positive.




let age = 25;
let gender = "female";
let occupation = "student";

if (age > 18) {
    if (gender === "female") {
        if (occupation === "student") {
            console.log("She is a female student over 18 years old");
        } else {
            console.log("She is a female, but not a student");
        }
    } else {
        console.log("Not a female");
    }
} else {
    console.log("Not over 18 years old");
}


// 10 tips for using if/else if/else statements or nested if/else statements in JavaScript:

// Keep it simple: Use if/else statements for simple conditions that can be easily understood at a glance.

// Use parentheses: Always use parentheses to group expressions and make them easier to read.

// Avoid deep nesting: While nested if/else statements can be powerful, they can quickly become difficult to read and maintain. Use them sparingly and only when they make the code more readable.

// Use descriptive variable names: Use descriptive variable names to make the code more readable and self - documenting.

// Avoid side effects: Avoid using if/else statements for complex expressions that have side effects, such as modifying global state or calling external functions.

// Use if/else statements as statements: if/else statements are statements, not expressions.Use them to execute code blocks or to control the flow of execution.

// Use whitespace: Use whitespace to make your code more readable.Add spaces around the if/else keywords to separate them from the expressions.

// Use comments: Use comments to explain complex if/else expressions or to add context to the code.

// Use switch statements for multiple conditions: Use switch statements instead of multiple if/else statements when you have multiple conditions to check.

// Use if/else statements to replace ternary operators: if/else statements can be used to replace ternary operators in some cases, especially when the condition and expressions are complex.