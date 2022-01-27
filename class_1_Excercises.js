/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

//HW Variables for Math portion

//pizza 1: 13 inches for $16.99
const pizza1_diameter = 13;
const pizza1_price = 16.99;

//pizza 2: 17 inches for $19.99
const pizza2_diameter = 17;
const pizza2_price = 19.99;

//Pi variable
const pi = Math.PI;

//Variables for the areas of the pizzas
// area_of_cirlcle = pi * (diameter/2)**2
let pizza1_area = (pi*((pizza1_diameter/2)**2)).toFixed(2);
let pizza2_area = (pi*((pizza2_diameter/2)**2)).toFixed(2);

// 2. What is the cost per square inch of each pizza?
			// price per square inch
			let pizza1_sq_price = (pizza1_area/pizza1_price).toFixed(2)
			let pizza2_sq_price = (pizza2_area/pizza2_price).toFixed(2)
			
			//Answers + Clarification
			console.log(`
            // 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
            // What is the area for each of these pizzas?
            // (radius would be the listed size - i.e. 13" - divided by 2)
				Pizza 1: ${pizza1_diameter}" for $${pizza1_price}
				Pizza 2: ${pizza2_diameter}" for $${pizza2_price}

				Pizza 1 Area: ~ ${pizza1_area}in\u00B2
				Pizza 2 Area: ~ ${pizza2_area}in\u00B2
				
				Pizza 1 Price/in\u00B2: ~ $${pizza1_sq_price}
				Pizza 2 Price/in\u00B2: ~ $${pizza2_sq_price}
				`)


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const card_1 = Math.floor(Math.random()*13)
const card_2 = Math.floor(Math.random()*13)
const card_3 = Math.floor(Math.random()*13)

// 4. Draw 3 cards and use Math to determine the highest
// card
const maxCard = Math.max(card_1, card_2, card_3)

console.log(`
    card_1 = ${card_1}, 
    card_2 = ${card_2},
    card_3 = ${card_3}, 
    max = ${maxCard}`)
/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

    let senderFirstName = 'Carlos'
	let senderLastName ='Caceres'
	let senderStreet = '1234 5th Ave N'
	let senderCity = 'Seattle'
	let senderState = 'WA.'
	let senderZip = '67890'
	let outgoingFirstName = 'Micheal'
	let outgoingLastName = 'Scott'
	let outgoingStreet = '1725 Slough Avenue'
	let outgoingCity = 'Scranton'
	let outgoingState = 'PA'
	let outgoingZip = '12345'
	
    console.log(`
 ______________________________________________________________________________________________
|                                                                         PLACE STAMP HERE     |
|                                                                                              |
| ${senderFirstName} ${senderLastName}
| ${senderStreet}
| ${senderCity}, ${senderState} ${senderZip}
|                                                                                             |
|                                                                                             |
|                             ${outgoingFirstName} ${outgoingLastName}
|                             ${outgoingStreet}
|                             ${outgoingCity}, ${outgoingState} ${outgoingZip}
|                                                                                             |
|_____________________________________________________________________________________________|
				
`)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let this_string = `
			Carlos Caceres
			1234 567th St. NW
			Seattle, WA 8910`
let firstName = this_string.substring(4,10)
console.log(firstName)
/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
// MONTHPOSITION:
				// January = 0
				// December = 11
			// DATE FORMAT JS: new Date(YYYY, MONTHPOSITION, Day, UTChr, UTCmin, UTCsec, UTCmillisec)
			// ALWAYS take into account daylight savings
			
			// DST = 0
			let date1 = new Date(2020, 0, 1, 0,0,0,).getTime()
			
			// DST = +1
			let date2 = new Date(2020, 3, 1, 1,0,0).getTime()
			let mid = (date2 - date1)/2
			let midDate = date1 + mid
			let convertedMid = new Date (midDate)
			// let midOFF = midDate.getTimezoneOffset()
			
			console.log(`
				date1 : ${date1}
				date2 : ${date2}
				date2 - date1: ${mid}	
				
				
				midDate in MilliSeconds: ${midDate}
				midDate converted = ${convertedMid}
				
			`)
