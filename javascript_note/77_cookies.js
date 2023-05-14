// Cookies are small text files that are stored on a user's device by a website. They are used to store data about the user's preferences, activity, and login status, and to track user behavior across different pages and sessions.

// Here are the basic steps to use cookies in a web application:

// Create a cookie:
// To create a cookie, use the document.cookie property to set a string value that includes the name, value, expiration date, and other optional attributes of the cookie.For example, document.cookie = "username=John; expires=Fri, 31 Dec 2021 23:59:59 GMT; path=/";

// Read a cookie:
// To read a cookie, use the document.cookie property to get a string value that includes all cookies set by the website.You can then parse the string to find the value of a specific cookie.For example, let username = document.cookie.match(/username=([^;]*)/)[1];

// Update a cookie:
// To update a cookie, create a new cookie with the same name and updated value and expiration date, and overwrite the old cookie.For example, document.cookie = "username=Jane; expires=Fri, 31 Dec 2022 23:59:59 GMT; path=/";

// Delete a cookie:
// To delete a cookie, set its expiration date to a date in the past.For example, document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

// Cookies can also have additional attributes such as domain, secure, and httpOnly, which affect their behavior and security.

//     It's important to use cookies responsibly and transparently, and to comply with privacy regulations such as the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). Users should be informed about the use of cookies and given the option to opt-out or manage their preferences.