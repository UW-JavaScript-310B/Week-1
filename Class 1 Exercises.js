/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

// Define variables
const pizzaThirteen = 13
const pizzaSeventeen = 17
const pizzaThirteenPrice = 16.99
const pizzaSeventeenPrice = 19.99

// Area for each pizza 
let pizzaThirteenArea = Math.PI * (pizzaThirteen / 2)**2
let pizzaSeventeenArea = Math.PI * (pizzaSeventeen / 2)**2

// Cost per sqin for each pizza
let costPerSqIn_pizzaThirteen = pizzaThirteenPrice / pizzaThirteenArea
let costPerSqIn_pizzaSeventeen = pizzaSeventeenPrice / pizzaSeventeenArea

// Display results in HTML page
document.getElementById("pizza13").textContent = `The area of pizza ${pizzaThirteen} inches is ${pizzaThirteenArea.toFixed(2)} square inch`
document.getElementById("pizza17").textContent = `The area of pizza ${pizzaSeventeen} inches is ${pizzaSeventeenArea.toFixed(2)} square inch`

// 2. What is the cost per square inch of each pizza?
document.getElementById("pizza13CostPerSqIn").textContent = `The cost per square inch of pizza ${pizzaThirteen} inches is ${costPerSqIn_pizzaThirteen.toFixed(2)} dollars`
document.getElementById("pizza17CostPerSqIn").textContent = `The cost per square inch of pizza ${pizzaSeventeen} inches is ${costPerSqIn_pizzaSeventeen.toFixed(2)} dollars`


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
let cardRandom = Math.ceil(Math.random()*13)
let card = ""

switch (cardRandom) {
  case 1:
    card = "Ace"
    break
  case 11:
    card = "Jack"
    break
  case 12:
    card = "Queen"
    break
  case 13:
    card = "King"
    break
  default:
    card = cardRandom.toString()
    break
}
  
// Show the result in HTML page
document.getElementById("card").textContent = `The card is ${card}`

// 4. Draw 3 cards and use Math to determine the highest card
let firstCard = Math.ceil(Math.random()*13)
let secondCard = Math.ceil(Math.random()*13)
let thirdCard = Math.ceil(Math.random()*13)
let maxCard = Math.max(firstCard, secondCard, thirdCard)

// Display the results in HTML page
document.getElementById("card1").textContent = `The first card is ${firstCard}`
document.getElementById("card2").textContent = `The second card is ${secondCard}`
document.getElementById("card3").textContent = `The third card is ${thirdCard}`
document.getElementById("maxCard").textContent = `The highest card is ${maxCard}`

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let firstName = "Duc"
let lastName = "Tran"
let streetAddress = "11112222 27th St SE"
let city = "Auburn"
let state = "Washington"
let zipCode = "98002"
let myAddress = `${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`

// Display my address in HTML page
document.getElementById("myAddress").textContent = myAddress


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let extractFirstName = myAddress.slice(0, myAddress.indexOf(" "))
// Display the extracted first name in HTML page
document.getElementById("firstName").textContent = `The string has been extracted from my house address is ${extractFirstName}`

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Declare variables
const startDate = new Date(2020, 0, 1)
const endDate = new Date(2020, 3, 1)
const midDate = new Date((startDate.getTime() + endDate.getTime())/2)
// Display start date, end date and middle date in HTML page
document.getElementById("startDate").textContent = `The start date is ${startDate.toLocaleString()}`
document.getElementById("endDate").textContent = `The end date is ${endDate.toLocaleString()}`
document.getElementById("midDate").textContent = `The middle date between ${startDate.toLocaleString()} and ${endDate.toLocaleString()} is ${midDate.toLocaleString()}`