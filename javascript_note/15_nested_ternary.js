// Nested ternary operators are simply ternary operators that are nested within one another.They can be a bit tricky to read and write, but they can be very useful for expressing complex logic in a concise way.

// The syntax for a nested ternary operator is as follows:

// condition1?():();
// condition1?(condition2?(true):(false)):(false)


// condition1 ? result1 : condition2 ? result2 : result3

// Here, the first ternary operator is checking "condition1".If it's true, it returns "result1". If it's false, it moves on to the second ternary operator, which checks "condition2".If it's true, it returns "result2". If it's false, it returns "result3".

//     Let's take a look at an example. Suppose we have a variable called "age" that represents a person's age, and we want to assign a message to a variable called "greeting" based on their age:

// If they are younger than 18, the message should be "Hello, young one!"
// If they are between 18 and 60(inclusive), the message should be "Hello, adult!"
// If they are older than 60, the message should be "Hello, wise one!"
// We can use a nested ternary operator to accomplish this in a single line of code:


// let greeting = age < 18 ? "Hello, young one!" : age <= 60 ? "Hello, adult!" : "Hello, wise one!";

// Here, the first ternary operator checks if "age" is less than 18. If it is, it returns "Hello, young one!".If it's not, it moves on to the second ternary operator, which checks if "age" is less than or equal to 60. If it is, it returns "Hello, adult!". If it's not, it returns "Hello, wise one!".

// Nested ternary operators can be useful for expressing complex logic in a concise way, but they can also make code difficult to read and maintain.It's important to use them judiciously and to make sure that the logic is clear and easy to understand.

let number = 4;
// let commission = number > 10 ? ("Greater than 10") : (number<5?("Less than 5"):("Greater than 5 but less than 10"));

// let commission =number>10?("Greater or equal 10"):(number<5?(number<0?("Negative"):("Greater than zero but less than 5")):("greater than 5 but less than 10"))

console.log(commission);

// 10 tips for using ternary operators and nested ternary operators in JavaScript:

// Keep it simple: Use ternary operators for simple conditions that can be easily understood at a glance.

// Use parentheses: Always use parentheses to group expressions and make them easier to read.

// Avoid nested ternary operators: While nested ternary operators can be powerful, they can quickly become difficult to read and maintain.Use them sparingly and only when they make the code more readable.

// Use descriptive variable names: Use descriptive variable names to make the code more readable and self - documenting.

// Avoid side effects: Avoid using ternary operators for complex expressions that have side effects, such as modifying global state or calling external functions.

// Use ternary operators as expressions: Ternary operators are expressions, not statements.Use them to assign a value to a variable or as a return value from a function.

// Use whitespace: Use whitespace to make your code more readable.Add spaces around the ternary operator to separate the condition from the expressions.

// Use comments: Use comments to explain complex ternary expressions or to add context to the code.

// Use ternary operators with caution: Ternary operators can make code more concise, but they can also make it harder to read and debug.Use them judiciously.

// Use ternary operators to replace if statements: Ternary operators can be used to replace if statements in some cases, especially when the condition and expressions are simple.