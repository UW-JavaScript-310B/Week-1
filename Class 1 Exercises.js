//=======My correction for wrong answers for my first try: Begin=================================================================
// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
let areaFor17in = Math.PI * (17/2)**2 // areaFor16in = 226.98006922186255 square inches
// 2. What is the cost per square inch of each pizza?
let costPerUnitFor17in = 19.99 /areaFor17in //result is 0.08806940657181973
/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.
const startDate = new Date("2020-01-01");
const endDate = new Date("2020-04-01");
var midpoint = new Date((startDate.getTime() + endDate.getTime()) / 2); // result is Sat Feb 15 2020 04:00:00 GMT-0800 (Pacific Standard Time)
//=======My correction for wrong answers for my first try: End=================================================================
//Yuhong Wang's answer to Week-1 Homework
/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

let areaFor13in = Math.PI * (13/2)**2 // areaFor13in = 132.73228961416876 square inches
let areaFor16in = Math.PI * (16/2)**2 // areaFor16in = 201.06192982974676 square inches

// 2. What is the cost per square inch of each pizza?
let costPerUnitFor13in = 16.99 / areaFor13in // result is 0.12800201103580125
let costPerUnitFor16in = 19.99 /areaFor16in //result is 0.09942210351271837

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
let val = Math.round(Math.random() * 13)

// 4. Draw 3 cards and use Math to determine the highest
// card
let val1 = Math.round(Math.random() * 13)
let val2 = Math.round(Math.random() * 13)
let val3 = Math.round(Math.random() * 13)
Math.max(val1, val2, val3)

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let firstName = "John"
let lastName = "Smith"
let streetAddress = "123 Main St."
let city = "Seattle"
let state = "WA"
let zipCode = "98109"
let formatedAddressBlock = `${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`
console.log(formatedAddressBlock)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let listOfStr = formatedAddressBlock.split(' ');
let extractedFirstName = listOfStr[0];

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
//const endDate = new Date(2019, 3, 1);
const beginDate = new Date(2020, 1, 1)
const endDate = new Date(2020, 4, 1)
let diff = endDate - beginDate
const midDate = new Date(beginDate +  (diff/2)) //midDate = Sat Feb 01 2020 00:00:00 GMT-0800 (Pacific Standard Time) {}
