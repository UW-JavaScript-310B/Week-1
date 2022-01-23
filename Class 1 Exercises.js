/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

// area = pi r squared

const thirteenInchRadius = 13 / 2;
const seventeenInchRadius = 17 / 2;

const thirteenArea = Math.PI * thirteenInchRadius ** 2
const seventeenArea = Math.PI * seventeenInchRadius ** 2

console.log(thirteenArea);
console.log(seventeenArea);

// 2. What is the cost per square inch of each pizza?

const thirteenPrice = 16.99 / thirteenArea;

console.log(thirteenPrice);


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

let cards = Math.ceil(Math.random() * 13);



// 4. Draw 3 cards and use Math to determine the highest
// card

let card1 = Math.ceil(Math.random() * 13);

let card2 = Math.ceil(Math.random() * 13);

let card3 = Math.ceil(Math.random() * 13);

console.log(card1, card2, card3);

const randomCards = Math.max(card1, card2, card3);

console.log(randomCards)


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let firstName = "Miguel";

let lastName = "Marin";

let streetAddress = "123 Main St.";

let city = "Seattle";

let state = "WA";

let zip = "98122";

let nameLine = `${firstName} ${lastName}`;

let mailingAddress = `${streetAddress}
${city},${state} ${zip}`;

let addressBlock = `${nameLine}
${mailingAddress}`;

console.log(addressBlock);


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

let firstNameExtract = addressBlock.slice(0,6)
console.log(firstNameExtract);


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1, 00, 00, 00);
const endDate = new Date(2020, 4, 1, 00, 00, 00);

console.log(startDate)

let middleDate = new Date((startDate.getTime() + endDate.getTime()) / 2);

console.log(middleDate);