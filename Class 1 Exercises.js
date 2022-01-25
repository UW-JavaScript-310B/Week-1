/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const areaThirteen = Math.PI * (13 / 2) ** 2;
console.log("the area of the 13 inch pizza = ", areaThirteen);

const areaSeventeen = Math.PI * (17 / 2) ** 2;
console.log("the area of the 17 inch pizza = ", areaSeventeen);


// 2. What is the cost per square inch of each pizza?

const costThirteen = 16.99 / areaThirteen;
console.log("The cost per square inch of 13 inch" , costThirteen);

const costSeventeen = 19.99 / areaSeventeen;
console.log("The cost per square inch of 17 inch" , costSeventeen);


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const min = Math.ceil(1);
const max = Math.floor(13);

const num = Math.floor(Math.random() * (max - min + 1) + min);

console.log("Random number", num);

// 4. Draw 3 cards and use Math to determine the highest
// card

const num_1 = Math.floor(Math.random() * (max - min + 1) + min);
console.log("Random 1:", num_1);

const num_2 = Math.floor(Math.random() * (max - min + 1) + min);
console.log("Random 2:", num_2);

const num_3 = Math.floor(Math.random() * (max - min + 1) + min);
console.log("Random 3:", num_3);

console.log("Highest card", Math.max(num_1, num_2, num_3));


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = "alicia";
const lastName = "goodwin";
const streetAddress = "2506 E Ward St";
const city = "Seattle";
const state = "WA";
const zipCode = "98112";

const line_1 = ` ${firstName} ${lastName}\n`;
const line_2 = `${streetAddress}\n`;
const line_3 = `${city}, ${state} ${zipCode}`;

console.log(line_1, line_2, line_3);


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const address = `${firstName}${lastName}\n ${streetAddress}\n ${city}, ${state} ${zipCode}`;

console.log("ADDRESS", address);

newFirst = address.substring(0,6);

console.log("SLICE FIRST NAME", newFirst);


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
//const endDate = new Date(2019, 3, 1);

const startDate = new Date(2020, 1, 1);
const endDate = new Date(2020, 4, 1);

const midpoint = new Date((endDate.getTime() - startDate.getTime()) / 2);

console.log("MIDPOINT", midpoint);

