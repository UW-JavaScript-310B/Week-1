/**
 * MATH
 */
// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
let Area1 = 3.14*(13/2)*(13/2);
console.log("Area of 13 inch pizza :"+Area1);
let radius2 = 17/2;
let Area2 = 3.14*radius2*radius2;
console.log("Area of 17 inch pizza :"+Area2);

// 2. What is the cost per square inch of each pizza?
console.log("Cost per inch for 13 inch pizza: "+(Area1/16.99));
console.log("Cost per inch for 17 inch pizza: "+(Area2/19.99));

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
console.log('Q3. Answer -> ' +Math.floor(Math.random()*12));

// 4. Draw 3 cards and use Math to determine the highest
// card
let card1 = Math.floor(Math.random()*12);
let card2 = Math.floor(Math.random()*12);
let card3 = Math.floor(Math.random()*12)
console.log("card1: "+card1);
console.log("card2: "+card2);
console.log("card3: "+card3);
console.log('Q4. Answer -> '+Math.max(card1,card2,card3));

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let firstname = 'Sonal';
let lastName = 'Gupta';
let streetAddress = 'testApartment';
let city = 'Seattle';
let state = 'WA';
let zipCode = 'testZIPCode';
let finalOutput = firstname+' '+lastName+'\n'+streetAddress+'\n'+city+', '+state+','+zipCode;
console.log('Q1. Answer -> '+finalOutput);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let inputString = "firstName lastName"+
                  "streetAddress"+
                  "city,state,zipCode";
let extractOuput = finalOutput.slice(0,5);
console.log('Q2. Answer -> '+extractOuput);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020,1,1);
const endDate = new Date(2019, 3, 1);
var midDate = new Date((startDate.getTime()+endDate.getTime())/2);
console.log('Answer -> '+midDate);