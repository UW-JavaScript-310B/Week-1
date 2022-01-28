/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
let diameter13 = 13
let diameter17 = 17
let area13 = Math.pow(diameter13 / 2) * Math.PI
let area17 = Math.pow(diameter17 / 2) * Math.PI
console.log("Dia 13 inch = " + diameter13)
console.log("Dia 17 inch = " + diameter17)
console.log("Area 13 = " + area13)
console.log("Area 17 = " + area17)

// 2. What is the cost per square inch of each pizza?
let cost13 = 16.99
let cost17 = 19.99
let costPerSqIn13 = cost13 / area13
let costPerSqIn17 = cost17 / area17
console.log("Cost 13 inch = " + cost13)
console.log("Cost 17 inch = " + cost17)
console.log("Cost 13 per sq inch = " + costPerSqIn13)
console.log("Cost 17 per sq inch = " + costPerSqIn17)
// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
let card = Math.ceil(Math.random() * 13)
console.log("Card = " + card)
// 4. Draw 3 cards and use Math to determine the highest
// card
let card1 = Math.ceil(Math.random() * 13)
let card2 = Math.ceil(Math.random() * 13)
let card3 = Math.ceil(Math.random() * 13)
console.log("Card1 = " + card1)
console.log("Card2 = " + card2)
console.log("Card3 = " + card3)
let highestCard = Math.max(Math.max(card1, card2), card3)
console.log("Highest Card = " + highestCard)


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let firstName = "Bob"
let lastName = "Smith"
let streetAddress = "123 1st Ave"
let city = "Anytown"
let state = "NY"
let zipCode = "00234"
console.log("firstName = " + firstName)
console.log("lastName = " + lastName)
console.log("Street Address = " + streetAddress)
console.log("City = " + city)
console.log("State = " + state)
console.log("zipCode = " + zipCode)
let formattedAddress = `${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`
console.log(formattedAddress)


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

let endOfFirstName = formattedAddress.indexOf(' ')
let firstName2 = formattedAddress.substring(0, endOfFirstName)
console.log("First Name2 = " + firstName2)


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1, 0, 0, 0)
const endDate = new Date(2020, 3, 1, 0, 0, 0)
console.log("Start Date: " + startDate)
console.log("End Date: " + endDate)
let d = startDate.getMilliseconds() + ((endDate - startDate) / 2)
let midDate = new Date(d)
console.log("Mid Date: " + midDate)
