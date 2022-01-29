/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)


// 2. What is the cost per square inch of each pizza?
pizzaSixteen = 16;
pizzaThirteen = 13;
const thirteenArea = (Math.PI) * (pizzaThirteen / 2) ** 2;
16.99 / thirteenArea;

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

Math.round(Math.random() * 12 + 1); // 12 + 1 used to avoid return of 0

// 4. Draw 3 cards and use Math to determine the highest
// card
drawOne = Math.round(Math.random() * 12 + 1);
drawTwo = Math.round(Math.random() * 12 + 1);
drawThree = Math.round(Math.random() * 12 + 1);
highCard = Math.max(drawOne, drawTwo, drawThree);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = 'Amber';
const lastName = 'Bandasith';
const streetAddress = '123 Fake Street';
const city = 'Seattle';
const state = 'WA';
const zipCode = 98075;

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const address = `${firstName} ${lastName}
${streetAddress}
${city} ${state} ${zipCode}`;

const extractFirstName = (address.slice(0, 5));


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

const startDate = new Date('2020, 1, 1 00:00:00').getTime();
const endDate = new Date('2020, 4, 1 00:00:00').getTime();
const middleDate = new Date((startDate + endDate) / 2).toString();

