/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
let p13price = 16.99;  // price of 13'' pizza
let p17price = 19.99; // price of 17'' pizza
let p13size = 13; //diameter of 13'' pizza
let p17size = 17 //diameter of 17'' pizza
let p13area = Math.PI * Math.sqrt(p13size/2);  //area of 13'' pizza
let p17area = Math.PI * Math.sqrt(p17size/2); //area of 17'' pizza
console.log('p13area: ' + p13area.toFixed(2)); // area of 13'' pizza is apprx 8.01
console.log('p17area: ' + p17area.toFixed(2));  // area of 17'' pizza is apprx 9.16
// 2. What is the cost per square inch of each pizza?
let p13costpersqrinc = p13price / p13area; // cost per square inch of 13'' pizza
let p17costpersqrinc = p17price / p17area; // cost per square inch of 17'' pizza
console.log('p13costpersqrinc: '+ p13costpersqrinc.toFixed(2)); // cost per square inch of 13'' pizza is appx 2.12
console.log('p17costpersqrinc: ' + p17costpersqrinc.toFixed(2)); // cost per square inch of 17'' pizza is appx 2.18
// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const min = 1;  //lower random limit
const max = 13; //upper random limit
let carddraw = Math.floor(Math.random() * (max - min + 1) + min); //get random number between lower and upper limit inclusive
if (carddraw == 1) {
 console.log('ace');  //if random number is 1 then print ace
}
else if (carddraw == 11) {
	console.log('jack'); //if random number is 111 then print jack
}
else
	console.log(carddraw); //else print random number

// 4. Draw 3 cards and use Math to determine the highest
// card
const min = 1; //lower limit random number
const max = 13; //higher limit random number
let cd1 = Math.floor(Math.random() * (max - min + 1) + min); //get first random number
let cd2 = Math.floor(Math.random() * (max - min + 1) + min); //get second random number 
let cd3 = Math.floor(Math.random() * (max - min + 1) + min); //get third random number

console.log(cd1 + ', ' + cd2 + ', ' + cd3);  // print out all three random numbers
// compare between three numbers and print out the highest
console.log('Highest Num: '+ Math.max(cd1,cd2,cd3));
/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
const firstName = 'Johnwithlongfirstname'; //declare firstname
const lastName = 'Steinbeck'; //declare lastname
const streetAddress = '14 Hacker Way'; // declare streetAddress
const city = 'MiddleOfNoWhere'; // declare city
const state = 'WA'; //declare state
const zipCode = '98828'; //declare zipCode

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let addressStr = firstName + ' ' + lastName; // construct AddressStr
addressStr = addressStr + '\n' + streetAddress + '\n' + city + ', ' + state + '.' + zipCode; //construct full address

console.log('AddressStr: \n'+ addressStr ); //display full address string
let fName = addressStr.slice(0,addressStr.indexOf(' ')); // declare and extract first name into fName
console.log('Extracted FirstName: ' + fName); // display extracted firstname
/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020,1,1); // declare startDate
const endDate = new Date(2020,4,1); //declare endDate
// declare midDate is the mid point between startDate and endDate
let midDate = new Date((startDate.getTime() +  endDate.getTime())/2);
//display middle date and time
console.log('midDate: ' + midDate);
