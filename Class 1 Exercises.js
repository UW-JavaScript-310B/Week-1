/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

let d_13 = 13;
let area_13 = Math.PI*(d_13/2)**2;
let d_17 = 17;
let area_17 = Math.PI*(d_17/2)**2;
console.log("area of 13 inch pizza "+area_13);
console.log("area of 17 inch pizza "+area_17);


// 2. What is the cost per square inch of each pizza?

let cost_13=16.99;
let cost_17=19.99;

let cost_13_per_area=cost_13/area_13;
let cost_17_per_area=cost_17/area_17;

console.log("cost of 13 inch pizza per square inch " + cost_13_per_area);
console.log("cost of 17 inch pizza per square inch " + cost_17_per_area);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

// using a function

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

console.log(getRandomIntInclusive(1,13));
console.log(getRandomIntInclusive(1,13));
console.log(getRandomIntInclusive(1,13));

// other way to do it

const card = Math.ceil(Math.random()*13);


// 4. Draw 3 cards and use Math to determine the highest
// card

const card1 = Math.ceil(Math.random()*13);
const card2 = Math.ceil(Math.random()*13);
const card3 = Math.ceil(Math.random()*13);

console.log("first card " +card1);
console.log("second card " +card2);
console.log("third card " +card3);
console.log("max number drawn from a pool of 3 between 1 and 13 -> "+Math.max(card1,card2, card3));


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = "Matt";
const lastName = "Schneider";
const streetAddress = "123 4th Ave";
const city = "Seattle";
const state = "WA";
const zipCode = "98100";

const formattedAddress = `${firstName} ${lastName}
${streetAddress}
${city} ${state} ${zipCode}`;
console.log(formattedAddress);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
//
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const indexOfFirst = formattedAddress.indexOf(" ")
console.log("index of first space character in formatted address "+indexOfFirst);
const extractedFirstName=formattedAddress.slice(0,indexOfFirst);
console.log("extracted first name " +extractedFirstName);


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1, 0, 0, 0);
const endDate = new Date(2020, 3, 1, 0, 0, 0);

let midDate = new Date((startDate.getTime() + endDate.getTime())/2);

console.log("start date " +startDate);
console.log("end date " +endDate);
console.log("mid date " +midDate);

