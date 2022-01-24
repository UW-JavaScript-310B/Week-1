/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const areaPizza13 = Math.PI * (13 / 2) ** 2;
const areaPizza17 = Math.PI * (17 / 2) ** 2;

console.log ('Math Exercise 1:')
console.log (`Area of 13in Pizza is ${areaPizza13.toFixed(2)} SQ.IN.`);
console.log (`Area of 17in Pizza is ${areaPizza17.toFixed(2)} SQ.IN. \n`);

// 2. What is the cost per square inch of each pizza?
const costPizza13 = 16.99 / areaPizza13;
const costPizza17 = 19.99 / areaPizza17;

console.log ('Math Exercise 2:')
console.log (`Cost per square inch of 13in Pizza is $${costPizza13.toFixed(2)}.`);
console.log (`Cost per square inch of 17in Pizza is $${costPizza17.toFixed(2)}. \n`);


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
const rndCard = Math.floor(Math.random() * 13) + 1;

console.log ('Math Exercise 3:')
console.log(`You drew card number ${rndCard} from the deck. \n`)


// 4. Draw 3 cards and use Math to determine the highest
// card
const rndCard1 = Math.floor(Math.random() * 13) + 1;
const rndCard2 = Math.floor(Math.random() * 13) + 1;
const rndCard3 = Math.floor(Math.random() * 13) + 1;
const highCard = Math.max(rndCard1,rndCard2,rndCard3)

console.log ('Math Exercise 4:')
console.log(`The three card numbers drawn were ${rndCard1}, ${rndCard2}, and ${rndCard3}.`)
console.log(`The highest of the 3 cards drawn was card number ${highCard}. \n`)

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = 'Donald';
const lastName = 'Duck';
const streetAddress = '123 Main Street';
const city = 'Disneyland'
const state = 'CA'
const zipCode = '92802'

let line1Address = [firstName, lastName];
let line2Address = [streetAddress];
let line3Address = [city, state, zipCode];

console.log ('String Address Exercise 1:');
console.log(line1Address.join(' ')+'\n'+line2Address+'\n'+line3Address.join(', ')+'\n');


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const addressBlock = `Mickey Mouse\n123 Main St\nDisneyland, CA 92808`

const grabFirstName = addressBlock.substring(0,6)

console.log ('String Address Exercise 2:');
console.log(addressBlock)
console.log(`\nThe first name of the Address is ${grabFirstName}.\n`)



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

let midDate = new Date((startDate.getTime() + endDate.getTime()) / 2);

console.log ('Date Problem Exercise:');
console.log(`->Start Date: ${startDate}\n->End Date: ${endDate}\n->Date Between Start/End Dates: ${midDate}.`)


