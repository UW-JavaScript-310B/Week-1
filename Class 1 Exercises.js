/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
let smallPizza = 13;
let largePizza = 17;

function pizzaArea (pizzaSize){
    return Math.PI * ((pizzaSize / 2) ** 2);
}

let smallPizzaArea =  Math.round(pizzaArea(smallPizza)*100)/100;
let largePizzaArea = Math.round(pizzaArea(largePizza)*100)/100;


// 2. What is the cost per square inch of each pizza?

function cost (price,area){
    return price/area;
}

let smallPizzaCost = Math.round(cost(16.99, smallPizzaArea)*100)/100;
let largePizzaCost =  Math.round(cost(19.99, largePizzaArea)*100)/100;


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const card = Math.ceil(Math.random() * 13);
// 4. Draw 3 cards and use Math to determine the highest
// card
const card1 = Math.ceil(Math.random() * 13);
const card2 = Math.ceil(Math.random() * 13);
const card3 = Math.ceil(Math.random() * 13);

const max = Math.max(card1, card2, card3);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

    const firstName = "Himanshi";
    const lastName = "Gupta";
    const streetAddress = "123 4th lane SE"
    const city = "Seattle";
    const state = "WA";
    const zipCode = "98029";

    console.log(`${firstName} ${lastName} \n`+
    `${streetAddress} \n `+ 
    `${city}, ${state} ${zipCode}`);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let index = address.indexOf(' ');
let add = address.substring(0,index);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2020, 4, 1);
const startDate = new Date(2020, 1, 1);

const diff = (endDate.getTime() - startDate.getTime())/2;
const newDate = new Date(diff+startDate.getTime());