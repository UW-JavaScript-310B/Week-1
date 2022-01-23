/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
let area13 = Math.PI * (13 / 2) ** 2
let area17 = Math.PI * (17 / 2) ** 2

console.log(area13);
console.log(area17)
// 2. What is the cost per square inch of each pizza?
console.log(16.99 / area13)
console.log(19.99 / area17)

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
Math.ceil(Math.random() * 13)

// 4. Draw 3 cards and use Math to determine the highest
// card
Math.max(Math.ceil(Math.random() * 13) , Math.ceil(Math.random() * 13) , Math.ceil(Math.random() * 13))

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
const firstName = 'Meghan';
const lastName = 'Cahill';
const streetAddress = '1449 227th Ave SE';
const city = 'Sammamish';
const state = 'Washington';
const zipCode = '98075';

console.log(`${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const fullAddress = `${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`;

console.log(fullAddress.indexOf(' '));
console.log(fullAddress.slice(0, 6));


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);
const startDay = startDate.getTime();
const endDay = endDate.getTime();
const midDay = endDay - startDay
const newDay = startDay + (midDay / 2)  
const newDate = new Date(newDay)
console.log(startDate);
console.log(endDate);
console.log(startDay);
console.log(endDay);
console.log(midDay); 
console.log(newDay);
console.log(newDate);