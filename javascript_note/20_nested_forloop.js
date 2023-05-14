// A nested for loop is a loop inside another loop.This means that for each iteration of the outer loop, the inner loop will iterate a certain number of times.Nested loops are commonly used when you need to iterate over a two - dimensional array or perform a certain operation for every possible combination of two sets of data.

//     Here's an example of a nested for loop in JavaScript:


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
// In this example, we have an outer loop that iterates five times and an inner loop that iterates three times for each iteration of the outer loop.The inner loop logs the values of both loop variables i and j to the console using a template string.

// When this code is executed, it will output the following:
/*
i = 0, j = 0
i = 0, j = 1
i = 0, j = 2
i = 1, j = 0
i = 1, j = 1
i = 1, j = 2
i = 2, j = 0
i = 2, j = 1
i = 2, j = 2
i = 3, j = 0
i = 3, j = 1
i = 3, j = 2
i = 4, j = 0
i = 4, j = 1
i = 4, j = 2
*/


// As you can see, the inner loop iterates three times for each iteration of the outer loop, resulting in a total of 15 log statements.

//     That's the basics of nested for loops in JavaScript!


// Generating multiplication tables: One practical use of nested for loops is to generate multiplication tables.For example, you can use a nested loop to generate the multiplication table for numbers 1 to 10:


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
// This code will output the multiplication table for numbers 1 to 10, which can be useful for students learning multiplication.

// Finding common elements in two arrays: Another practical use of nested for loops is to find common elements between two arrays.You can use two loops to compare each element of one array to every element of another array and find the common ones:

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            console.log(`${array1[i]} is a common element`);
        }
    }
}



// Drawing shapes
// One common use of nested for loops is in drawing shapes on a canvas in JavaScript.For example, to draw a checkerboard pattern, you could use the following nested for loop:

   
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            // draw black square
        } else {
            // draw white square
        }
    }
}
// This loop iterates over each row and column of the checkerboard and determines whether to draw a black or white square based on the sum of the row and column indices.



// Finding matches in two arrays
// Another use of nested for loops is in finding matching elements in two arrays.For example, given two arrays of numbers, you could use the following nested for loop to find pairs of numbers that add up to a specific target value:


const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const target = 10;

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] + arr2[j] === target) {
            console.log(`${arr1[i]} + ${arr2[j]} = ${target}`);
        }
    }
}
// This loop iterates over each element of the first array and each element of the second array and checks if their sum equals the target value.

// Generating permutations
// A third use of nested for loops is in generating permutations of an array.For example, given an array of letters, you could use the following nested for loop to generate all possible combinations of those letters:


const letters = ['a', 'b', 'c'];

for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
        for (let k = 0; k < letters.length; k++) {
            console.log(letters[i] + letters[j] + letters[k]);
        }
    }
}
// This loop iterates over each possible combination of three letters from the original array, generating all possible permutations.



// tips for using nested for loops in JavaScript:

// Keep the loops as simple as possible: It's easy to get lost in complex nested loops, so try to keep them as simple as possible.

// Use meaningful variable names: Choose variable names that clearly indicate what each loop is doing.

// Avoid excessive nesting: Avoid nesting too many loops together as this can make the code hard to read and debug.

// Keep track of loop counters: Make sure to keep track of loop counters and ensure they're incremented and reset correctly.

// Use break statements: Use break statements to exit a loop early if you've found what you're looking for.

// Use continue statements: Use continue statements to skip over iterations if certain conditions are met.

// Be mindful of performance: Nested loops can be computationally expensive, so be mindful of performance and consider alternative approaches if necessary.

// Use the right loop for the job: Consider whether a for, while, or do -while loop is best suited to the task at hand.

// Use comments: Use comments to explain what each loop is doing and why it's necessary.

// Test your code: Finally, make sure to test your code thoroughly, including edge cases and unexpected inputs, to ensure it's working correctly.