/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const pizzaDiameter13 = 13;
const pizzaDiameter17 = 17;

const pizzaCost13 = 16.99;
const pizzaCost17 = 19.99;

const pizzaArea13 = (Math.PI * Math.pow(pizzaDiameter13 / 2, 2)).toFixed(2);
const pizzaArea17 = (Math.PI * Math.pow(pizzaDiameter17 / 2, 2)).toFixed(2);

// 2. What is the cost per square inch of each pizza?

const costPerSqInch13 = Math.round(100 * pizzaCost13 / pizzaArea13) / 100;
const costPerSqInch17 = Math.round(100 * pizzaCost17 / pizzaArea17) / 100;

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const card = Math.floor(Math.random() * 13 + 1);

// 4. Draw 3 cards and use Math to determine the highest
// card

const card1 = Math.floor(Math.random() * 13 + 1);
const card2 = Math.floor(Math.random() * 13 + 1);
const card3 = Math.floor(Math.random() * 13 + 1);

const highestCard = Math.max(card1, card2, card3);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = `Max`;
const lastName = `Power`;
const streetAddress = `246 Ideal Street`;
const city = `Milan`;
const state = `MI`;
const zip = 48160;

const address = `${firstName} ${lastName}\n${streetAddress}\n${city}, ${state}  ${zip}`;

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const firstSpace = address.indexOf(' ');
const filteredFirstName = address.slice(0, firstSpace);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1)
const endDate = new Date(2020, 3, 1);
const middleDate = new Date(startDate.getTime() + ((endDate.getTime() - startDate.getTime()) / 2)).toLocaleString();