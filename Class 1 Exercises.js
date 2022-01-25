/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const diamSmall = 13;
const diamLarge = 17;
const priceSmall = 16.99;
const priceLarge = 19.99;
const areaSmall = Math.PI * (diamSmall / 2) ** 2;
const areaLarge = Math.PI * (diamLarge / 2) ** 2;

console.log('QUESTION MATH 1 RESPONSE');
console.log(areaSmall);
console.log(areaLarge);



// 2. What is the cost per square inch of each pizza?

const pricePerSmall = (priceSmall / areaSmall);
const pricePerLarge = (priceLarge / areaLarge);

console.log('QUESTION MATH 2 RESPONSE');
console.log(pricePerSmall.toFixed(2,10));
console.log(pricePerLarge.toFixed(2,10));


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)


console.log('QUESTION MATH 3 RESPONSE');

let randomCard1 =  Math.floor(Math.random() * 13) + 1;
let randomCard2 =  Math.floor(Math.random() * 13) + 1;
let randomCard3 =  Math.floor(Math.random() * 13) + 1;

console.log (randomCard1);
console.log (randomCard2);
console.log (randomCard3);

// 4. Draw 3 cards and use Math to determine the highest
// card


console.log('QUESTION MATH 4 RESPONSE');

console.log(Math.max(randomCard1, randomCard2, randomCard3));



/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let firstName = 'Elizabeth';
let lastName = 'Barkley'; 
let streetAddress = '29 Redwood Drive';
let city = 'Huntington';
let state = 'NY';
let zipCode = '11754';
let blockAddr = `${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`;

console.log('QUESTION ADDRESS LINE 1 RESPONSE')
console.log(firstName)
console.log(lastName)
console.log(streetAddress)
console.log(city)
console.log(state)
console.log(zipCode)
console.log(blockAddr)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring



console.log('QUESTION ADDRESS LINE 2 RESPONSE')

console.log(blockAddr.slice(0, blockAddr.indexOf(' ')))
/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const beginDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);
const beginUnix = beginDate.getTime();
const endUnix = endDate.getTime();
const midUnix = ((endUnix - beginUnix) / 2) + beginUnix;
const midDate = new Date(midUnix);

console.log('FIND THE MIDDLE DATE RESPONSE');
//console.log(beginDate);
//console.log(endDate);
//console.log(beginUnix);
//console.log(endUnix);
//console.log(midUnix);
console.log(midDate);