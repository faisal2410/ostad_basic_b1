<?php
// The data-* attribute is a way to add custom data to an HTML element without using non-standard attributes or polluting the global namespace with custom attributes. It allows developers to store extra information that can be accessed using JavaScript or CSS.

// The data-* attribute should always start with "data-" followed by a custom name that describes the information being stored. For example, if you want to store the price of a product, you could use the data-price attribute.

// Here's an example of how to use the data-* attribute:


// <div data-price="19.99" data-color="red" data-size="L">Red T-Shirt</div>

// In this example, the div element has three data-* attributes: data-price, data-color, and data-size. These attributes can be used to store additional information about the T-shirt, such as its price, color, and size.

// To access the data stored in the data-* attributes, you can use JavaScript. For example, to get the price of the T-shirt:


// const price = document.querySelector('div').dataset.price;
// console.log(price); // outputs "19.99"

// In this example, the querySelector method is used to select the div element, and the dataset property is used to access the data-* attributes as an object. The price property of the dataset object contains the value of the data-price attribute.

// You can also use CSS to select elements based on their data-* attributes. For example, to style all elements with a data-color attribute of "red":


// div[data-color="red"] {
//   color: red;
// }

// In this example, the div elements with a data-color attribute of "red" will have their text color set to red.