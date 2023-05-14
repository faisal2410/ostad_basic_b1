// In JavaScript, continue and break are two control flow statements that are used to alter the execution of loops.

// continue is used inside a loop to skip the current iteration and move on to the next one.When continue is executed, the remaining code in the current iteration is skipped, and the loop moves on to the next iteration.For example:


// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }


// In this example, the continue statement is executed when i is equal to 3, so the code in the current iteration(which is to log the value of i) is skipped, and the loop moves on to the next iteration.The output of this code would be:


// 0
// 1
// 2
// 4

// break is used inside a loop to immediately exit the loop when a certain condition is met.When break is executed, the loop is terminated, and the program continues with the code that comes after the loop.For example:


// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
//     if (i === 3) {
//         break;
//     }
// }

// In this example, the break statement is executed when i is equal to 3, so the loop is terminated and the program moves on to the code that comes after the loop.The output of this code would be:


// 0
// 1
// 2


// Both continue and break can be used with any type of loop in JavaScript, including for, while, and do -while loops.They are useful for controlling the flow of a loop and can help simplify complex logic.