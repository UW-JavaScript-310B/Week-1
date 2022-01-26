/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const area = function(diameter) {
    const areaAnswer = (((diameter / 2) ** 2) * Math.PI)
    console.log(areaAnswer)
};
area(13);
area(17);

// 2. What is the cost per square inch of each pizza?

const findPricePerSquareInch = function (price, num) {
    const pricePerSquareInch = (price / num)
    console.log(pricePerSquareInch)
};
findPricePerSquareInch(16.99, 13);
findPricePerSquareInch(19.99, 17);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
const randomCard = function() {
    const card = (Math.floor(Math.random() * 13) + 1)
    console.log(card)
};
randomCard();

// 4. Draw 3 cards and use Math to determine the highest
// card
const randomCards = function() {
    const cards = Array.from({length: 3}, () => (Math.floor(Math.random() * 13) + 1)); 
    console.log(cards)
    console.log(Math.max.apply(null, cards))
}
randomCards()

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
    
const firstName = "Evan"
const lastName = "Thomas"
const streetAddress = "1234 11th Ave SW"
const city = "Real City"
const state = "Real State"
const zipCode = "111111"
const fullAddress = 

`${firstName} ${lastName} 
${streetAddress}
${city}, ${state}, ${zipCode}`

console.log(fullAddress)


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
const sliceName = function() {
    const name = fullAddress.slice(0, 4)
    const fullName = fullAddress.slice(0, 13)
    console.log(name)
    console.log(fullName)
}

sliceName()

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1)
const endDate = new Date(2020, 3, 1);

const middleDateFunction = function() {
    const middleDate = new Date((startDate.getTime() + endDate.getTime()) / 2);
    console.log(middleDate)
}
console.log(startDate)
console.log(endDate)
middleDateFunction()
