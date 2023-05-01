<?php
// HTML input is used to create interactive form elements on web pages, such as text boxes, radio buttons, checkboxes, and more. Here are some common attributes you can use with HTML input:

// type - This attribute specifies the type of input field you want to create. For example, if you want to create a text input field, you would set the type to "text". Other common types include "password", "checkbox", "radio", "submit", "button", and "file".

// name - This attribute specifies the name of the input field. This is important because it allows you to identify the input field in your code and in the data submitted by the form.

// value - This attribute specifies the default value of the input field. For example, if you're creating a text input field for a user's name, you might set the default value to "John Doe".

// placeholder - This attribute specifies a placeholder text that is displayed in the input field before the user enters any text. This can be useful for providing a hint or example of what the user should enter.

// required - This attribute specifies whether the input field is required to be filled out before the form can be submitted. If you set this attribute to "required", the user will not be able to submit the form without filling out the input field.

// Here's an example of how you might use these attributes to create a text input field:


// <label for="name">Name:</label>
// <input type="text" id="name" name="name" placeholder="Enter your name" required>


// In this example, we're using the "label" element to provide a label for the input field. The "for" attribute of the label is set to the "id" attribute of the input field, which helps to associate the label with the input field.

// The "type" attribute of the input field is set to "text", which creates a text input field. The "id" and "name" attributes are both set to "name", which identifies the input field in the code and in the form data.

// The "placeholder" attribute is set to "Enter your name", which provides a hint to the user about what they should enter in the input field.

// Finally, the "required" attribute is set to ensure that the user must fill out the input field before submitting the form.


// The "input" tag is used to create various types of form controls, such as text fields, checkboxes, radio buttons, and more. The "type" attribute is used to specify the type of form control that the "input" element represents.

// Here are some examples of "type" attributes and their corresponding form controls:

// Text input field:


// <input type="text" name="username">

// This creates a text input field where the user can enter text, such as their username.

// Password input field:


// <input type="password" name="password">

// This creates a password input field where the user's input is obscured with dots or asterisks.




// <input type="radio" name="gender" value="male"> Male
// <input type="radio" name="gender" value="female"> Female

// This creates two radio buttons with the options "Male" and "Female", and the "name" attribute ensures that only one can be selected at a time.

// Checkbox:


// <input type="checkbox" name="newsletter" checked> Subscribe to newsletter

// This creates a checkbox where the user can choose to subscribe to a newsletter, and the "checked" attribute makes it initially checked.

// Date input field:


// <input type="date" name="dob">
// This creates a date input field where the user can select a date using a calendar or input it manually in a specific format.