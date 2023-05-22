function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    const product = num * i;
    console.log(`${num} x ${i} = ${product}`);
  }
}

// Test the function with different input numbers
multiplicationTable(5);