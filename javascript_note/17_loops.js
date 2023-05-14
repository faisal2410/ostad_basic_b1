// Loops are a fundamental programming concept that allows you to repeat a block of code multiple times.JavaScript supports three types of loops: the for loop, the while loop, and the do -while loop.

// The for Loop:
// The for loop is the most commonly used loop in JavaScript.It allows you to loop through a block of code a fixed number of times.Here's an example:


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// In this example, we're using a for loop to log the values of i from 0 to 9. The loop is composed of three parts:

// Initialization: let i = 0 initializes the loop counter variable to 0.
// Condition: i < 10 specifies the condition that must be true for the loop to continue executing. In this case, the loop will continue as long as i is less than 10.
// Increment: i++ increments the loop counter variable by 1 after each iteration.
// The while Loop:
// The while loop is used when you don't know the number of times you want to loop. It continues to execute the loop as long as the condition specified is true. Here's an example:


// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }


// In this example, we're using a while loop to log the values of i from 0 to 9. The loop continues to execute as long as i is less than 10.

// The do -while Loop:
// The do -while loop is similar to the while loop, but it guarantees that the loop body will execute at least once.Here's an example:


// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);


// In this example, we're using a do-while loop to log the values of i from 0 to 9. The loop body is executed once before the condition is checked.

// Loops can also be nested, which means that you can have a loop inside another loop.This is useful when you need to perform a repetitive task that involves multiple levels of iteration.


// Here are some tips and tricks for using loops in JavaScript:

// Choose the right type of loop: JavaScript offers three types of loops: for, while, and do -while.Choose the one that best suits your use case.

// Keep track of the loop counter: In a for loop, the counter variable is often used to keep track of the current iteration.Make sure you initialize it properly and update it correctly to avoid infinite loops or other errors.

// Use break and continue statements: break allows you to exit a loop early, while continue allows you to skip over certain iterations.These statements can be very useful for controlling the flow of your loop.

// Avoid modifying the loop counter inside the loop: Modifying the loop counter inside the loop can lead to unexpected results, such as skipping over iterations or infinite loops.It's usually better to use a separate variable to track any changes you need to make.

// Use Array.forEach() for iterating over arrays: If you're just iterating over an array, you can use the forEach() method instead of a for loop. This can make your code cleaner and more readable.

// Use Object.keys() for iterating over objects: If you need to iterate over an object's keys, you can use the Object.keys() method to get an array of the keys, and then use a for loop or forEach() to iterate over them.

// Use a debugger to step through your loop: If you're having trouble with your loop, you can use a debugger to step through the code line by line and see what's happening at each step.This can help you identify any bugs or issues with your loop.


// Use try-catch blocks for error handling: If your loop contains code that can throw an error, it's a good idea to wrap it in a try-catch block. This can help you handle any errors gracefully and prevent your loop from crashing.

// Use a labeled statement for nested loops: If you have nested loops and need to break out of both loops at once, you can use a labeled statement to specify which loop to break out of.For example:


outerLoop: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i * j >= 25) {
            break outerLoop;
        }
    }
}
// In this example, the break outerLoop; statement will break out of both loops at once.

// Use the Array.map() method to transform arrays: If you need to transform an array into a new array, you can use the map() method instead of a for loop.This can make your code more concise and easier to read.For example:

var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function (number) {
    return number * 2;
});

// In this example, the map() method creates a new array with each element multiplied by 2.

// Use the Array.filter() method to filter arrays: If you need to filter an array based on a certain condition, you can use the filter() method instead of a for loop.This can make your code more concise and easier to read.For example:

var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
// In this example, the filter() method creates a new array with only the even numbers from the original array.