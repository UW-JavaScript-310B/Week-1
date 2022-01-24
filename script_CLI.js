// When writing a Node APP theres limit to event listners ie ' if ' statements 
// Increase the even listener

const eventListener = require('events').EventEmitter.prototype._maxListeners = 100;




//Terminal Viewing
// console.log(`
// Hello, Welcome`);

//Variables required to have user input via Browser
//npm install promt-sync  

//const prompt = require('prompt-sync')
//const input = prompt("");

//Variables for User input via CLI
//npm install inquirer 

const inquirer = require('inquirer');

// The following is expected: 
// 	let variable_name = [
	// 		{	
	//		type: 'input',
	// 		name: '{anything_relevant}'
	//  	message '{anything, this is what displays in the CLI}
	// 		} 
	//	]


function helloJS(){
	console.log(`
				Main Menu

		Choose one of the following options:

	MATH / Numbers

		1. View Answers to Homework (Pizza Question)
		2. Check your Pizza
		3. Bet High #Single Player, Play againts the house (Draw 3 Cards HW) 
		

	String / Addresses

		4. Format Mail
		5. Extracting from a string HW 

	Date

		6. Middle Date #HW Answer
		7. Check Two Dates

		8. Exit

`)
	//The question
	let navigation_options = [
		{
			type:'number',
			name: 'options',
			message: 'Enter Navigation Option',
		}
	]

	// Prompt the question to be answered
	inquirer.prompt(navigation_options).then(answers => {
		
		// Conditions Based on Anwsers
		if(parseInt(answers['options']) == 1){
		
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

			// price per square inch
			let pizza1_sq_price = (pizza1_area/pizza1_price).toFixed(2)
			let pizza2_sq_price = (pizza2_area/pizza2_price).toFixed(2)
			
			//Answers + Clarification
			console.log(`
				Pizza 1: ${pizza1_diameter}" for $${pizza1_price}
				Pizza 2: ${pizza2_diameter}" for $${pizza2_price}

				Pizza 1 Area: ~ ${pizza1_area}in\u00B2
				Pizza 2 Area: ~ ${pizza2_area}in\u00B2
				
				Pizza 1 Price/in\u00B2: ~ $${pizza1_sq_price}
				Pizza 2 Price/in\u00B2: ~ $${pizza2_sq_price}
				`)
			let hw_navigation_options = [
					{
						type:'input',
						name: 'options',
						message: "These are only aproximation if you'd like the full exact float value Enter 1 or Enter any key to return to Main Menu",
					}
				]
				inquirer.prompt(hw_navigation_options).then(answers => {
					if(answers['options']=="1"){

						// area per pizza - Exact
						let pizza1_area = (pi*((pizza1_diameter/2)**2));
						let pizza2_area = (pi*((pizza2_diameter/2)**2));
						
						// price per square inch updated - Exact
						let pizza1_sq_price = (pizza1_area/pizza1_price)
						let pizza2_sq_price = (pizza2_area/pizza2_price)
						
						//Exact answers 
						console.log(`
							
							Exact Values

							Pizza 1: ${pizza1_diameter}" for $${pizza1_price}
							Pizza 2: ${pizza2_diameter}" for $${pizza2_price}

							Pizza 1 Area: ${pizza1_area}in\u00B2
							Pizza 2 Area: ${pizza2_area}in\u00B2
							
							Pizza 1 Price/in\u00B2: $${pizza1_sq_price}
							Pizza 2 Price/in\u00B2: $${pizza2_sq_price}
							`)
							return setTimeout(() => {helloJS()},2500)
						}
					else {
					return helloJS();
					}
						
				}
				)}

		// Check Your Pizza
		if(parseInt(answers['options'])==2){
			
			// Multiple Questions are allowed Since it's Inside a List!
			let pizzaInfo = [
				{
					type: 'input',
					name: 'size',
					message:'Enter the size AKA the diameter of your pizza in inches'
				},
				{
					type: 'input',
					name: 'price',
					message:'Enter price of your pizza in USD'
				}
			]
			inquirer.prompt(pizzaInfo).then(answers =>{
				
				// Pizza info being stored in variables 
				let size = answers['size'];
				let price = answers['price']
				let pi = Math.PI;
				
				// Pizza Aprox Values
				let area_aprox = (pi*(size/2)**2).toFixed(2);
				let price_aprox = (price/area_aprox).toFixed(2);

				// Pizza Exact Values
				let area_exact = (pi*(size/2)**2);
				let price_exact = (price/area_exact);

				console.log(`
					Your Pizza was $${price} for ${size}",
					
					It's aproximately ${area_aprox}in\u00B2 
					for a value of $${price_aprox}/in\u00b2

						or 
					
					Exact area of ${area_exact}in\u00B2 
					for an exact value of $${price_exact}/in\u00B2
				`)
				return setTimeout(() => {helloJS()},5000)
			});
		}
		if(parseInt(answers['options'])==3){ 
			console.log(`
Congrats! The House has awarded you $3 to Play!
        	
			Game Rules:
        	1. Place bet on 1 of 3 cards
        	2. Minimum Bet: $1
        	3. Max Bet: ∞
        	4. ALL bets must be whole dollars
        	5. Suits are accounted for:
            		Spades > Hearts > Diamonds > Clubs
        	6. Win Big!
        `)
		// Game Variables
			const playerMoney = 3;
			const houseWinnings =0;
			const card_1 = Math.floor(Math.random()*13)
			const card_2 = Math.floor(Math.random()*13)
			const card_3 = Math.floor(Math.random()*13)

			// Question Variable
			let gamble = [
				{
					type:'input',
					name: 'bet',
					message: `Place your BET 
(if your bet is a float Value we will round up!)`
					
				},
				{
					type:'input',
					name:'card',
					message:`Pick 1 of the 3 Cards by Inputting the card #`
				}
			]
			// Call the question
			inquirer.prompt(gamble).then(answers=>{

				// BET can't be greater than personal bank
				if(parseInt(answers['bet']) > playerMoney){
					console.log(`
					
					!ERROR YOUR BET IS HIGHER THAN YOUR BANK
					
					`),
					setTimeout(() => {console.log('You must place new BET and choose New Card')},1000)
					
					// ask the question again 
					inquirer.prompt(gamble).then(answers => {
						if(parseInt(answers['bet'])> playerMoney){
							console.log(`
					Sorry It seems you don't understand the rules
							`)
							setTimeout(() => {console.log(`
					WE ARE RETURNING TO THE MAIN MENU
							`)}, 1000)
							setTimeout(() => {helloJS()}, 1500)
						}else{
							console.log('aqui')
						}
					})
				}
				if(parseInt(answers['card']) > 3 ){
					console.log(`
					
					!ERROR THERE IS ONLY 3 CARDS AVAILABLE
					
					`)
					setTimeout(() => {console.log('You must place new BET and choose New Card')}, 1000)
				}
				else{
					console.log('here')
				}
			})
		}
		if(parseInt(answers['options']) == 4){
			console.log(`
			WELCOME LETS FORMAT YOUR MAIL`)
			let mailFormat = [
				{
					type:'input',
					name:'senderFirstName',
					message: 'Enter you First Name'
				},
				{
					type:'input',
					name:'senderLastName',
					message: 'Enter your Last Name'
				},
				{
					type:'input',
					name: 'senderStreet',
					message: 'Enter your Street Address'
				},
				{
					type:'input',
					name:'senderCity',
					message:'Enter your City'
				},
				{
					type:'input',
					name:'senderState',
					message: 'Enter Your State'
				},
				{
					type:'input',
					name:'senderZip',
					message:'Enter your Zip Code'
				},
				{
					type:'input',
					name:'break4OutGoing',
					message:'Press Enter to start the Out Going mail Address'
				},
				{
					type:'input',
					name:'outgoingFirstName',
					message:'Reciever First Name'
				},
				{
					type:'input',
					name:'outgoingLastName',
					message:'Reciever Last Name'
				},
				{
					type:'input',
					name:'outgoingStreet',
					message:'Reciever Street Address'
				},
				{
					type:'input',
					name:'outgoingCity',
					message:'Reciever City'
				},
				{
					type:'input',
					name:'outgoingState',
					message:'Reciever State'
				},
				{
					type:'input',
					name:'outgoingZip',
					message:'Reciever Zip'
				}
			]
			inquirer.prompt(mailFormat).then(answers => {
				let senderFirstName = answers['senderFirstName']
				let senderLastName =answers['senderLastName']
				let senderStreet = answers['senderStreet']
				let senderCity = answers['senderCity']
				let senderState = answers['senderState']
				let senderZip = answers['senderZip']
				let outgoingFirstName = answers['outgoingFirstName']
				let outgoingLastName = answers['outgoingLastName']
				let outgoingStreet = answers['outgoingStreet']
				let outgoingCity = answers['outgoingCity']
				let outgoingState = answers['outgoingState']
				let outgoingZip = answers['outgoingZip']
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
				setTimeout(() => (helloJS()), 3000);
			})
		}
		if(parseInt(answers['options'])==5){
			let this_string = `
			Carlos Caceres
			1234 567th St. NW
			Seattle, WA 8910`
			setTimeout(() => {console.log(`
					EXTRACTING FIRST NAME HW`)}, 500)
			setTimeout(() => {console.log(`
			
This will be the variable being used
			
			let this_string = '
			Carlos Caceres
			1234 567th St. NW
			Seattle WA 8910'
			`)}, 1000)
			setTimeout(() => {console.log(`console.log(this_string):
			${this_string}`)}, 2000)
			setTimeout(() => {console.log(`
I will be using indexOf() and substring() to pull the First Name and store it in a variable`)}, 2500)
			setTimeout(() => {console.log(`
			console.log(this_string.indexOf('Carlos'))`)}, 3000)
			setTimeout(() => {console.log(`
			output: 5`)}, 3500)
			setTimeout(() => {console.log(`
We now know that 'Carlos' starts at the 5th Position`)}, 4000)
			setTimeout(() => {console.log(`
Now we can use that to our advantage with substring()`)}, 5000)
			setTimeout(() => {console.log(`
When using the substring you have give it a starting and end point
			
			ex: this_string.substring(startingPosition, endPosition)`)}, 6000)
			setTimeout(() => {console.log(`
Therefore startingPosition = 4, since the first position is 0 the 5th is 4
There's 6 letters in the name 'Carlos' 
Therefore endPosition =10
	
			console.log(this_string.substring(4,10))
	
			output: Carlos
			`)}, 7000)
			let firstName = this_string.substring(4,10)
			setTimeout(() => {console.log(`
Now we're going to store it in a variable
			
			let firstName = this_string.substring(4,10)
			
			console.log( $ {firstName} ) #Remeber to actually unite the '$' with the {curly brackets} when printing in console
			Output: ${firstName}`)}, 8000)
			
			setTimeout(() => {console.log(`
THANK YOU
			`)}, 9000)
			let returnMenu = [
				{
					type:'input',
					name:'return',
					message:'Press Enter to return to Main Menu'
				}
			]
			setTimeout(() => {
				inquirer.prompt(returnMenu).then(answers => {
					if(answers['return']==""){
						helloJS()
					}else{
						helloJS()
					}
				})
			}, 10000)
		}
		
		//Edge Case Control-1 if the value enter is greater than 7
		if(parseInt(answers['options']) > 8){
			console.log(`
			Checking`)
			setTimeout(() => {console.log(`
			.`)},1000)
			setTimeout(() => {console.log(`
			.`)},1500)
			setTimeout(() => {console.log(`
			.`)},2000)
			setTimeout(() => {console.log(`
			!ERROR OPTION UNAVAILABLE TRY AGAIN`)},2500)
			return setTimeout(() => {helloJS()},3000)
		}
		//Edge Case Control-2 if Enter is accidently tapped AKA anything thats NaN
		if(!answers['options']){
			console.log(`
			ENTER A VALID VALUE`)
			setTimeout(() => {helloJS()}, 1000)
		}
		// Exit the APP
		if(answers['options']==8){
			console.log(`
			GOODBYE
			`)
			process.exit;
		}
	})
}

helloJS();