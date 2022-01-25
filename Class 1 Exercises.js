/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

// Establish pizza sizes in inches:
const pizzaThirteenInches = 13;
const pizzaSeventeenInches = 17;
// Calculate areas of 13" & 17" pizzas:
const pizzaThirteenArea = Math.PI * (pizzaThirteenInches / 2) ** 2;
const pizzaSeventeenArea = Math.PI * (pizzaSeventeenInches / 2) ** 2;
console.log(`pizzaThirteenArea = ${pizzaThirteenArea}`);
console.log(`pizzaSeventeenArea = ${pizzaSeventeenArea}`);

// 2. What is the cost per square inch of each pizza?

// Calculate price per square inch for 13" & 17" pizzas:
const pizzaThirteenPricePerSqIn = 16.99 / pizzaThirteenArea;
const pizzaSeventeenPricePerSqIn = 19.99 / pizzaSeventeenArea;
console.log(`pizzaThirteenPricePerSqIn = ${pizzaThirteenPricePerSqIn}`);
console.log(`pizzaSeventeenPricePerSqIn = ${pizzaSeventeenPricePerSqIn}`);
console.log();

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

// Create cardDraw formula to randomly produce 1-13:
const cardDraw = Math.ceil((Math.random() * 13));

// 4. Draw 3 cards and use Math to determine the highest
// card

let cardOne = Math.ceil((Math.random() * 13));
console.log(`cardOne = ${cardOne}`);
let cardTwo = Math.ceil((Math.random() * 13));
console.log(`cardTwo = ${cardTwo}`);
let cardThree = Math.ceil((Math.random() * 13));
console.log(`cardThree = ${cardThree}`);

// Determine the highest card of cardOne, cardTwo, cardThree:
let highestCard = Math.max(cardOne, cardTwo, cardThree);
console.log(`highestCard = ${highestCard}`);
console.log();

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

// Initialize variables needed for an address block:
let firstName = "Joel";
let lastName = "Elizaga";
let streetAddress = "123 Pleasant Ln";
let city = "Tacoma";
let state = "WA";
let zip = "999999";
// Create a formatted address block:
const addressBlock =
`${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zip}`;
console.log(`addressBlock = ${addressBlock}`);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

// Get index of the first space occurring from addressBlock:
const indexOfFirstSpace = addressBlock.indexOf(' ');
// Extract first name from addressBlock, between index 0 and the indexOfFirstSpace:
const name = addressBlock.slice(0, indexOfFirstSpace)
console.log(`name = ${name}`);
console.log();

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Initialize startDate and endDate:
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);
console.log(`startDate = ${startDate}`);
console.log(`endDate = ${endDate}`);
// Find dateDifference by subtracting startDate from endDate in milliseconds.
const dateDifference = Date.parse(endDate) - Date.parse(startDate);
// Halve dateDifference and add it to the startDate to create middleDate, the date in the
// middle between startDate & endDate.
const middleDate = new Date((dateDifference / 2) + Date.parse(startDate));
console.log(`middleDate = ${middleDate}`);