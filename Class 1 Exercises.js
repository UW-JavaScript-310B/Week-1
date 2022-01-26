/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const pizzaList = [13, 17];

console.log("Get the radius of each pizza:\n")

for (let i = 0; i < pizzaList.length; i++) {
    let diameter =  pizzaList[i];              // Take the pizza diameter
    let radius = diameter / 2;                  // Divide it by 2 to get radius
    let pizzaArea = radius ** 2 * Math.PI      // Area of a circle is πr² - square radius, multiply by π.
    pizzaArea = pizzaArea.toFixed(2);         // Round off the nearest hundreth of an inch.

    console.log("The " + diameter + "\" pizza has an area of " + pizzaArea + "\".")
}

// 2. What is the cost per square inch of each pizza?
const pizzaListWithPrice = [[13, 16.99], [17, 19.99]];

console.log("Repeating the previous exercise with a few modifications...");
for (let i = 0; i < pizzaListWithPrice.length; i++) {
    let diameter =  pizzaListWithPrice[i][0];                // Take the pizza diameter, first value
    let radius = diameter / 2;                                  // Divide it by 2 to get radius
    let pizzaArea = radius ** 2 * Math.PI;                     // Area of a circle is πr² - square radius, multiply by π.
    pizzaArea = pizzaArea.toFixed(0);                         // Round to the nearest whole number
    let costPerInch = pizzaListWithPrice[i][1]/pizzaArea  // Divide price by area
    costPerInch = costPerInch.toFixed(3)                    // Round to the nearest thousandth of a dollar.

    console.log("The " + diameter + "\" pizza costs $" + costPerInch + " per square inch.");
}

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
function draw_random_card() {
    const cardList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];     // List card numbers
    const numberOfCards = cardList.length;                              // Find out how many in deck
    let indexOfCard = Math.random() * numberOfCards;                  // Math.random multiplied by number in deck
    indexOfCard = Math.floor(indexOfCard);                          // Get whole number, using Math.floor
    const pickedCards = cardList[indexOfCard];                        // Get the random card using random index
    
    return pickedCards;
}

// 4. Draw 3 cards and use Math to determine the highest
// card
const card1 = draw_random_card()    // Draw first out of three cards
const card2 = draw_random_card()    // Draw second out of three cards
const card3 = draw_random_card()    // Draw last out of three cards
    
const threeCards = [card1, card2, card3]   // Put the cards in a set

function card_name(cardArray){
    const highestCard = Math.max(cardArray);      // Find highest card
    
    switch(highestCard) {
        case 1:                                                 // If card is 1, then call it an Ace
            return "Highest card was an Ace, which is 1."
        case 11:                                                // If card is 11, then call it a Jack
            return "Highest card was a Jack, which is 11."
        case 12:                                                // If card is 12, then call it a Queen
            return "Highest card was a Queen, which is 12."
        case 13:                                                // If card is 13, then call it a King
            return "Highest card was a King, which is 13."
        default:                                                // Otherwise just put in number of card
            return "Highest card was " + highestCard + "."
    }
}

console.log(card_name(...threeCards));

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
const firstName = "Joe";
const lastName = "Biden";
const streetAddress = "1600 Pennsylvania Ave NW";
const city = "Washington";
const state = "DC";
const zipCode = "20500";

const completeAddress = firstName + " " + lastName + "\n" + streetAddress + "\n" + city + ", " + state + " " + zipCode;

console.log(completeAddress);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const addressOfThePresident = completeAddress;                  // Calling previously created and assigned variable

function find_first_name(addressHere) {
    const first_space = addressHere.indexOf(" ");              // Find the first space character
    const this_first_name = addressHere.slice(0, first_space); // First name found between 0 and first space
    console.log(this_first_name);                               // Prints out first name
}

// ***** Instructions only identify first name to be extracted. *****
find_first_name(addressOfThePresident);                          // Executes function

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const beginDate = new Date(2020, 0, 1, 0, 0, 0);
const endDate = new Date(2020, 3, 1, 0, 0, 0);

const calculatedDate = ((endDate.getTime() + beginDate.getTime()) / 2);
const writeDate = new Date(calculatedDate);
console.log(writeDate);