// A for loop is a control flow statement that allows you to execute a block of code repeatedly based on a set number of iterations.It's commonly used when you want to perform an operation a certain number of times, such as iterating over an array or looping through a range of numbers.

// Here's the basic syntax of a for loop in JavaScript:


for (initialization; condition; increment / decrement) {
    // code to be executed
}
// Let's break down each part of this syntax:

// Initialization: This is where you set the initial value of the loop counter variable.You can declare the variable using the let keyword or use an existing variable.

// Condition: This is the condition that is checked before each iteration of the loop.If the condition evaluates to true, the loop continues.If it evaluates to false, the loop stops.

// Increment / decrement: This is where you specify how the loop counter variable should be modified after each iteration of the loop.You can use either the++ operator to increment the variable by one or the-- operator to decrement it by one.

// Let's look at a simple example that uses a for loop to iterate over an array of numbers:


const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// In this example, we first declare an array called numbers that contains five elements.We then use a for loop to iterate over the array and log each element to the console.The loop counter variable i is initialized to 0, the loop continues as long as i is less than the length of the array(numbers.length), and i is incremented by one after each iteration.

//That's the basics of a for loop in JavaScript! 