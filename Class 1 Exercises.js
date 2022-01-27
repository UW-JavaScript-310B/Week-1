/**
 * MATH
 *
 */

/* 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
   What is the area for each of these pizzas?
   (radius would be the listed size - i.e. 13" - divided by 2)*/

const pizzaThirteen = Math.PI * ((13 / 2) ** 2);
pizzaThirteen; // 132.73 sq inches

const pizzaSeventeen = Math.PI * ((17 / 2) ** 2);
pizzaSeventeen; // 227 sq inches

// 2. What is the cost per square inch of each pizza?

const thirteenArea = 16.99 / pizzaThirteen;
thirteenArea; // 0.128 per sq inch

const seventeenArea = 19.99 / pizzaSeventeen;
seventeenArea; // 0.088 per sq inch

/* 3. Using the Math object, put together a code snippet
   that allows you to draw a random card with a value
   between 1 and 13 (assume ace is 1, jack is 11…)*/

const drawCard = Math.ceil(Math.random() * 13);
drawCard;

// 4. Draw 3 cards and use Math to determine the highest card

const cardOne = Math.ceil(Math.random() * 13);
const cardTwo = Math.ceil(Math.random() * 13);
const cardThree = Math.ceil(Math.random() * 13);

const highCard = Math.max(cardOne, cardTwo, cardThree);
highCard;

/**
 * ADDRESS LINE
 */

/* 1. Create variables for firstName, lastName,
   streetAddress, city, state, and zipCode. Use
   this information to create a formatted address block
   that could be printed onto an envelope.*/

const firstName = 'John';
const lastName = 'Doe';
const streetAddress = '123 ABC St';
const city = 'Seattle';
const state = 'WA';
const zipCode = '98103';

const addressBlock = `${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`;
addressBlock;

/* 2. You are given a string in this format:
   firstName lastName(assume no spaces in either)
   streetAddress
   city, state zip(could be spaces in city and state)
 
   Write code that is able to extract the first name from this string into a variable.
   Hint: use indexOf, slice, and / or substring */

const newLineIndex = addressBlock.indexOf(' ');
const nameExtract = addressBlock.slice(0, newLineIndex);
nameExtract;

/**
 * FIND THE MIDDLE DATE
 */
/* On your own find the middle date(and time) between the following two dates:
   1/1/2020 00:00:00 and 4/1/2020 00:0008:00
  
   Look online for documentation on Date objects.

   Starting hint: */

const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);

const timeInMs = (endDate.getTime() - startDate.getTime()) / 2;
const middleDate = new Date(timeInMs + startDate.getTime());
middleDate; // Sat Feb 15 2020 11:30:00 GMT-0800 (Pacific Standard Time)
