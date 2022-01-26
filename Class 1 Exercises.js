/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const pizzaThirteen = 13;
const pizzaSeventeen = 17;
const thirteenArea = (Math.PI * (pizzaThirteen / 2) ** 2);
const seventeenArea = Math.PI * (pizzaSeventeen / 2) ** 2;
console.log (`Area of 13-inch Pizza: ${thirteenArea} Area of 17-inch Pizza: ${seventeenArea}`);

// 2. What is the cost per square inch of each pizza?

const thirteenPrice = 16.99;
const seventeenPrice = 19.99;
const thirteenCostInch = thirteenPrice / thirteenArea;
const seventeenCostInch = seventeenPrice / seventeenArea;
console.log (`Cost per inch of 13-inch Pizza ${thirteenCostInch} Cost per inch of 17-inch Pizza ${seventeenCostInch}`);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

let cardDraw1 = Math.ceil(Math.random () * 13);
console.log (`Random Card ${cardDraw1}`);

// 4. Draw 3 cards and use Math to determine the highest
// card

let cardDraw2 = Math.ceil(Math.random() * 13);
let cardDraw3 = Math.ceil (Math.random() * 13);
let highestCard = Math.max (cardDraw1, cardDraw2, cardDraw3);
console.log (`Draw One: ${cardDraw1} Draw Two: ${cardDraw2} Draw Three: ${cardDraw3} Highest Card: ${highestCard}`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let firstName = 'Leeroy';
let lastName = 'Jenkins';
let streetAddress = '12345 Main Street';
let city = 'Any Town';
let state = 'State';
let zipCode = '12345';

console.log (`${firstName} ${lastName}
${streetAddress} 
${city}, ${state} ${zipCode}`);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

let addressBlock = 'firstName lastName streetAddress city, state zip';
let firstNameIndex = addressBlock.indexOf ('firstName');
let spaceIndex = addressBlock.indexOf (' ');
let extractedFirstName = addressBlock.substring(firstNameIndex, spaceIndex);
console.log (extractedFirstName);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2020, 3, 1);
const startDate = new Date (2020, 0, 1);
const startDateMS = startDate.getTime();
const timeDiffMs = ((endDate - startDate) / 2);
const midDateMs = (startDateMS + timeDiffMs);
const midDate = new Date (midDateMs);
console.log(`Middle date and time between 1/1/2020 00:00:00 and 4/1/2020 00:00:00 is ${midDate}`);