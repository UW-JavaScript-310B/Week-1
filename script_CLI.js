// This is how log symbols are brought into the script ie 'success', 'info' {i}, 'warning' and 'error'
//
// npm install log-symbols

// Usage:
// import logSymbols from 'log-symbols';

//to call them in the console ie: console.log(logSymbols.symbolName, 'string'/var)  

// When writing a Node APP theres limit to event listners ie ' if ' statements 
// Increase the even listener

// const eventListener = require('events').EventEmitter.prototype._maxListeners = 100;




// const { Console } = require('console');
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

// to write symbols in the console use unicode
// ie check mark unicode u+2713 => JS console log \u2713

function helloJS(){
	console.log(`
				Main Menu

		Choose one of the following options:

	MATH / Numbers

	\u2713	1. View Answers to Homework (Pizza Question) 
	\u2713	2. Check your Pizza
	\u2713	3. Bet High (miniGame)
	\u2713	4. Draw 3 Card and find Max HW (Bet High: Explained)
		

	String / Addresses

	\u2713	5. Format Mail
	\u2713	6. Extracting from a string HW 

	Date

	\u2713	7. Middle Date #HW Answer
	\u2717	8. Check Two Dates

	0. EXIT

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

							// You can write the question inside the prompt but you can't have store in a'var'
							// Just write the question inside {curly brackets}  
							return setTimeout(() => {inquirer.prompt({
																		type: 'input', 
																		name:'leave', 
																		message: 'Pres ENTER to return to Menu'
																		}).then(answers=>{
																			if(answers['leave']==""){
																				helloJS()
																			}else{
																				helloJS()
																			}
																		})},1000)
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
		// BET High mini Game
		if(parseInt(answers['options'])==3){ 
			console.log(`
				Congrats! The House has awarded you $3 to Play!
        	
						Game Rules:
						
					1. Place bet on 1 of 3 cards
					2. Minimum Bet: $1
					3. Max Bet: ALL IN

        `)
		// Game Variables
			let playerMoney = 3;
			let houseWinnings =3;
			const card_1 = Math.floor(Math.random()*13)
			const card_2 = Math.floor(Math.random()*13)
			const card_3 = Math.floor(Math.random()*13)
			const cardList = [card_1, card_2, card_3]

			// Question Variable
			let gamble = [
				{
					type:'input',
					name: 'bet',
					message: `Place your BET`
					
				},
				{
					type:'input',
					name:'card',
					message:`Pick 1 of the 3 Cards by Inputting the card #`
				}
			]
			// Call the question
			inquirer.prompt(gamble).then(answers=>{

				// Validation_1
				if(parseInt(answers['bet']) > playerMoney || parseInt(answers['card']) > 3){
					// Validation_1 == Fail
					console.log(`
					
					\u26A0ERROR:
						Choose a Card 1, Card 2 or Card 3
						Enter a Bet less than your Bank.

							Players Bank = $${playerMoney}
							Your bet = $${answers['bet']}
							Choosen Card = Card #${answers['card']}
					`)
					
					// Call question Again
					inquirer.prompt(gamble).then(answers => {
						// Validation_2
						if(parseInt(answers['bet'])> playerMoney || parseInt(answers['card']) > 3){
							// Validation_2 == Fail
							console.log(`
					Sorry It seems you don't understand the rules
							`)
							setTimeout(() => {console.log(`
					WE ARE RETURNING TO THE MAIN MENU
							`)}, 1000)
							setTimeout(() => {helloJS()}, 1500)
						}
						// Validation_2 == Passed
						else{
							let cardList_string = cardList.toString()
							var winner = Math.max(card_1, card_2, card_3)
							var test = cardList_string.indexOf(winner.toString())
							
							// card_1 == winner
							// location: (Validation_1== Fail, Validation_2 == Passed)
							if(test == 0){
								// user placed bet on {card_1}
								if(parseInt(answers['card'])==1){
									playerMoney+=parseInt(answers['bet'])
									houseWinnings-=parseInt(answers['bet'])
									// WINNING
									// GAME OVER
									// ALL IN BET on card_1 && Beating The House
									if(houseWinnings == 0){
										setTimeout(()=>{console.log(`
										.`)},1000);
										setTimeout(()=>{console.log(`
										.`)},2000);
										setTimeout(()=> {console.log(`
										Flipping Card 3: ${card_3}`)},3000)
										setTimeout(()=> {console.log(`
										Fliping Card 2: ${card_2}`)},4000)
										setTimeout(()=> {console.log(`
										.`)},5000)
										setTimeout(()=> {console.log(`
										.`)},6000)
										setTimeout(()=> {console.log(`
										Flipping Card 1: ${card_1}`)},7000)
										setTimeout(()=>{console.log(`YOU BEAT THE HOUSE! 
										`)},8000)
										setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
									}
									// WINNING 
									// playerMoney+=answers['bet'] && houseWinnings-=answers['bet'] 
									else{
										setTimeout(()=>{console.log(`
										.`)},1000);
										setTimeout(()=>{console.log(`
										.`)},2000);
										setTimeout(()=> {console.log(`
										Flipping Card 3: ${card_3}`)},3000)
										setTimeout(()=> {console.log(`
										Fliping Card 2: ${card_2}`)},4000)
										setTimeout(()=> {console.log(`
										.`)},5000)
										setTimeout(()=> {console.log(`
										.`)},6000)
										setTimeout(()=> {console.log(`
										Flipping Card 1: ${card_1}`)},7000)
										setTimeout(()=> {console.log(`
										CONGRATS YOU HAVE WON 
										YOUR WINNINGS WERE OF: $${parseInt(answers['bet'])}
										YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
										setTimeout(() => {console.log(`
										.
										.
										.
										THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
										ONE SINGLE FUNCTION AND NOW I CAN'T CALL IT BACK lol
										.
										.
										.
										`)}, 9000)
										setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
									}
								}
								// LOOSING
								// card_1 == winner
								// user = (answers['card'] == {card_2 || card_3})
								else{
										playerMoney-=parseInt(answers['bet'])
										houseWinnings+=parseInt(answers['bet'])
										// LOOSING
										// GAME OVER
										// ALL IN BET && LOOSING to The House
										if(playerMoney===0){
											setTimeout(()=>{console.log(`
											.`)},1000);
											setTimeout(()=>{console.log(`
											.`)},2000);
											setTimeout(()=> {console.log(`
											Flipping Card 3: ${card_3}`)},3000)
											setTimeout(()=> {console.log(`
											Fliping Card 2: ${card_2}`)},4000)
											setTimeout(()=> {console.log(`
											.`)},5000)
											setTimeout(()=> {console.log(`
											.`)},6000)
											setTimeout(()=> {console.log(`
											Flipping Card 1: ${card_1}`)},7000)
											setTimeout(()=>{console.log(`
											The House WINS`)},8000)
											setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
											}
										// LOOSING
										// playerMoney-=answers['bet'] && houseWinnings+=answers['bet'] 
										else{
												setTimeout(()=>{console.log(`
												.`)},1000);
												setTimeout(()=>{console.log(`
												.`)},2000);
												setTimeout(()=> {console.log(`
												Flipping Card 3: ${card_3}`)},3000)
												setTimeout(()=> {console.log(`
												Fliping Card 2: ${card_2}`)},4000)
												setTimeout(()=> {console.log(`
												.`)},5000)
												setTimeout(()=> {console.log(`
												.`)},6000)
												setTimeout(()=> {console.log(`
												Flipping Card 1: ${card_1}`)},7000)
												setTimeout(()=> {console.log(`
												CONGRATS YOU HAVE LOST 
												YOU LOST: $${parseInt(answers['bet'])}
												YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
												setTimeout(() => {console.log(`
												.
												.
												.
												THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
												ONE SINGLE FUNCTION BUT NOW I CAN'T CALL IT BACK lol
												.
												.
												.
												`)}, 9000)
												setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
											}
								}
							}
							// card_2 == winner
							// location: (Validation_1==Fail, Validation_2==Passed)
							if(test == 2){
								
								// user placed bet on {card_2}
								if(parseInt(answers['card'])==2){
									playerMoney+=parseInt(answers['bet'])
									houseWinnings-=parseInt(answers['bet'])
									// WINNING
									// GAME OVER
									// ALL IN BET on card_2 && Beating The House
									if(houseWinnings == 0){
										setTimeout(()=>{console.log(`
										.`)},1000);
										setTimeout(()=>{console.log(`
										.`)},2000);
										setTimeout(()=> {console.log(`
										Flipping Card 3: ${card_3}`)},3000)
										setTimeout(()=> {console.log(`
										Fliping Card 1: ${card_1}`)},4000)
										setTimeout(()=> {console.log(`
										.`)},5000)
										setTimeout(()=> {console.log(`
										.`)},6000)
										setTimeout(()=> {console.log(`
										Flipping Card 2: ${card_2}`)},7000)
										setTimeout(()=>{console.log(`YOU BEAT THE HOUSE! 
										`)},8000)
										setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
									}
									// WINNING 
									// playerMoney+=answers['bet'] && houseWinnings-=answers['bet'] 
									else{
										setTimeout(()=>{console.log(`
										.`)},1000);
										setTimeout(()=>{console.log(`
										.`)},2000);
										setTimeout(()=> {console.log(`
										Flipping Card 3: ${card_3}`)},3000)
										setTimeout(()=> {console.log(`
										Fliping Card 1: ${card_1}`)},4000)
										setTimeout(()=> {console.log(`
										.`)},5000)
										setTimeout(()=> {console.log(`
										.`)},6000)
										setTimeout(()=> {console.log(`
										Flipping Card 2: ${card_2}`)},7000)
										setTimeout(()=> {console.log(`
										CONGRATS YOU HAVE WON 
										YOUR WINNINGS WERE OF: $${parseInt(answers['bet'])}
										YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
										setTimeout(() => {console.log(`
										.
										.
										.
										THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
										ONE SINGLE FUNCTION AND NOW I CAN'T CALL IT BACK lol
										.
										.
										.
										`)}, 9000)
										setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
									}
								}
								// LOOSING
								// card_2 == winner
								// user = (answers['card'] == {card_1 || card_3})
								else{
										playerMoney-=parseInt(answers['bet'])
										houseWinnings+=parseInt(answers['bet'])
										// LOOSING
										// GAME OVER
										// ALL IN BET && LOOSING to The House
										if(playerMoney===0){
											setTimeout(()=>{console.log(`
											.`)},1000);
											setTimeout(()=>{console.log(`
											.`)},2000);
											setTimeout(()=> {console.log(`
											Flipping Card 3: ${card_3}`)},3000)
											setTimeout(()=> {console.log(`
											Fliping Card 1: ${card_1}`)},4000)
											setTimeout(()=> {console.log(`
											.`)},5000)
											setTimeout(()=> {console.log(`
											.`)},6000)
											setTimeout(()=> {console.log(`
											Flipping Card 2: ${card_2}`)},7000)
											setTimeout(()=>{console.log(`
											The House WINS`)},8000)
											setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
											}
										// LOOSING
										// playerMoney-=answers['bet'] && houseWinnings+=answers['bet'] 
										else{
												setTimeout(()=>{console.log(`
												.`)},1000);
												setTimeout(()=>{console.log(`
												.`)},2000);
												setTimeout(()=> {console.log(`
												Flipping Card 3: ${card_3}`)},3000)
												setTimeout(()=> {console.log(`
												Fliping Card 1: ${card_1}`)},4000)
												setTimeout(()=> {console.log(`
												.`)},5000)
												setTimeout(()=> {console.log(`
												.`)},6000)
												setTimeout(()=> {console.log(`
												Flipping Card 2: ${card_2}`)},7000)
												setTimeout(()=> {console.log(`
												CONGRATS YOU HAVE LOST 
												YOU LOST: $${parseInt(answers['bet'])}
												YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
												setTimeout(() => {console.log(`
												.
												.
												.
												THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
												ONE SINGLE FUNCTION BUT NOW I CAN'T CALL IT BACK lol
												.
												.
												.
												`)}, 9000)
												setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
											}
								}
							}
							// card_3 = winner
							// location: (Validation_1==Fail, Validation_2==Passed)
							if(test == 4){
								
								// user placed bet on {card_3}
								if(parseInt(answers['card'])==3){
									playerMoney+=parseInt(answers['bet'])
									houseWinnings-=parseInt(answers['bet'])
									// WINNING
									// GAME OVER
									// ALL IN BET on card_3 && Beating The House
									if(houseWinnings == 0){
										setTimeout(()=>{console.log(`
										.`)},1000);
										setTimeout(()=>{console.log(`
										.`)},2000);
										setTimeout(()=> {console.log(`
										Flipping Card 1: ${card_1}`)},3000)
										setTimeout(()=> {console.log(`
										Fliping Card 2: ${card_2}`)},4000)
										setTimeout(()=> {console.log(`
										.`)},5000)
										setTimeout(()=> {console.log(`
										.`)},6000)
										setTimeout(()=> {console.log(`
										Flipping Card 3: ${card_3}`)},7000)
										setTimeout(()=>{console.log(`YOU BEAT THE HOUSE! 
										`)},8000)
										setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
									}
									// WINNING 
									// playerMoney+=answers['bet'] && houseWinnings-=answers['bet'] 
									else{
										setTimeout(()=>{console.log(`
										.`)},1000);
										setTimeout(()=>{console.log(`
										.`)},2000);
										setTimeout(()=> {console.log(`
										Flipping Card 1: ${card_3}`)},3000)
										setTimeout(()=> {console.log(`
										Fliping Card 2: ${card_2}`)},4000)
										setTimeout(()=> {console.log(`
										.`)},5000)
										setTimeout(()=> {console.log(`
										.`)},6000)
										setTimeout(()=> {console.log(`
										Flipping Card 3: ${card_3}`)},7000)
										setTimeout(()=> {console.log(`
										CONGRATS YOU HAVE WON 
										YOUR WINNINGS WERE OF: $${parseInt(answers['bet'])}
										YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
										setTimeout(() => {console.log(`
										.
										.
										.
										THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
										ONE SINGLE FUNCTION AND NOW I CAN'T CALL IT BACK lol
										.
										.
										.
										`)}, 9000)
										setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
									}
								}
								// LOOSING
								// card_3 == winner
								// user = (answers['card'] == {card_1 || card_2})
								else{
										playerMoney-=parseInt(answers['bet'])
										houseWinnings+=parseInt(answers['bet'])
										// LOOSING
										// GAME OVER
										// ALL IN BET && LOOSING to The House
										if(playerMoney===0){
											setTimeout(()=>{console.log(`
											.`)},1000);
											setTimeout(()=>{console.log(`
											.`)},2000);
											setTimeout(()=> {console.log(`
											Flipping Card 1: ${card_1}`)},3000)
											setTimeout(()=> {console.log(`
											Fliping Card 2: ${card_2}`)},4000)
											setTimeout(()=> {console.log(`
											.`)},5000)
											setTimeout(()=> {console.log(`
											.`)},6000)
											setTimeout(()=> {console.log(`
											Flipping Card 3: ${card_3}`)},7000)
											setTimeout(()=>{console.log(`
											The House WINS`)},8000)
											setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
											}
										// LOOSING
										// playerMoney-=answers['bet'] && houseWinnings+=answers['bet'] 
										else{
												setTimeout(()=>{console.log(`
												.`)},1000);
												setTimeout(()=>{console.log(`
												.`)},2000);
												setTimeout(()=> {console.log(`
												Flipping Card 1: ${card_1}`)},3000)
												setTimeout(()=> {console.log(`
												Fliping Card 2: ${card_2}`)},4000)
												setTimeout(()=> {console.log(`
												.`)},5000)
												setTimeout(()=> {console.log(`
												.`)},6000)
												setTimeout(()=> {console.log(`
												Flipping Card 3: ${card_3}`)},7000)
												setTimeout(()=> {console.log(`
												CONGRATS YOU HAVE LOST 
												YOU LOST: $${parseInt(answers['bet'])}
												YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
												setTimeout(() => {console.log(`
												.
												.
												.
												THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
												ONE SINGLE FUNCTION BUT NOW I CAN'T CALL IT BACK lol
												.
												.
												.
												`)}, 9000)
												setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
											}
								}
							}
							
						}
					})
				}
				// Validation_1 = PASSED
				else{
					let cardList_string = cardList.toString()
					var winner = Math.max(card_1, card_2, card_3)
					var test = cardList_string.indexOf(winner.toString())
					
					// card_1 == winner
					// location: (Validation_1== Fail, Validation_2 == Passed)
					if(test == 0){
						// user placed bet on {card_1}
						if(parseInt(answers['card'])==1){
							playerMoney+=parseInt(answers['bet'])
							houseWinnings-=parseInt(answers['bet'])
							// WINNING
							// GAME OVER
							// ALL IN BET on card_1 && Beating The House
							if(houseWinnings == 0){
								setTimeout(()=>{console.log(`
								.`)},1000);
								setTimeout(()=>{console.log(`
								.`)},2000);
								setTimeout(()=> {console.log(`
								Flipping Card 3: ${card_3}`)},3000)
								setTimeout(()=> {console.log(`
								Fliping Card 2: ${card_2}`)},4000)
								setTimeout(()=> {console.log(`
								.`)},5000)
								setTimeout(()=> {console.log(`
								.`)},6000)
								setTimeout(()=> {console.log(`
								Flipping Card 1: ${card_1}`)},7000)
								setTimeout(()=>{console.log(`YOU BEAT THE HOUSE! 
								`)},8000)
								setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
							}
							// WINNING 
							// playerMoney+=answers['bet'] && houseWinnings-=answers['bet'] 
							else{
								setTimeout(()=>{console.log(`
								.`)},1000);
								setTimeout(()=>{console.log(`
								.`)},2000);
								setTimeout(()=> {console.log(`
								Flipping Card 3: ${card_3}`)},3000)
								setTimeout(()=> {console.log(`
								Fliping Card 2: ${card_2}`)},4000)
								setTimeout(()=> {console.log(`
								.`)},5000)
								setTimeout(()=> {console.log(`
								.`)},6000)
								setTimeout(()=> {console.log(`
								Flipping Card 1: ${card_1}`)},7000)
								setTimeout(()=> {console.log(`
								CONGRATS YOU HAVE WON 
								YOUR WINNINGS WERE OF: $${parseInt(answers['bet'])}
								YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
								setTimeout(() => {console.log(`
								.
								.
								.
								THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
								ONE SINGLE FUNCTION AND NOW I CAN'T CALL IT BACK lol
								.
								.
								.
								`)}, 9000)
								setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
							}
						}
						// LOOSING
						// card_1 == winner
						// user = (answers['card'] == {card_2 || card_3})
						else{
								playerMoney-=parseInt(answers['bet'])
								houseWinnings+=parseInt(answers['bet'])
								// LOOSING
								// GAME OVER
								// ALL IN BET && LOOSING to The House
								if(playerMoney===0){
									setTimeout(()=>{console.log(`
									.`)},1000);
									setTimeout(()=>{console.log(`
									.`)},2000);
									setTimeout(()=> {console.log(`
									Flipping Card 3: ${card_3}`)},3000)
									setTimeout(()=> {console.log(`
									Fliping Card 2: ${card_2}`)},4000)
									setTimeout(()=> {console.log(`
									.`)},5000)
									setTimeout(()=> {console.log(`
									.`)},6000)
									setTimeout(()=> {console.log(`
									Flipping Card 1: ${card_1}`)},7000)
									setTimeout(()=>{console.log(`
									The House WINS`)},8000)
									setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
									}
								// LOOSING
								// playerMoney-=answers['bet'] && houseWinnings+=answers['bet'] 
								else{
										setTimeout(()=>{console.log(`
										.`)},1000);
										setTimeout(()=>{console.log(`
										.`)},2000);
										setTimeout(()=> {console.log(`
										Flipping Card 3: ${card_3}`)},3000)
										setTimeout(()=> {console.log(`
										Fliping Card 2: ${card_2}`)},4000)
										setTimeout(()=> {console.log(`
										.`)},5000)
										setTimeout(()=> {console.log(`
										.`)},6000)
										setTimeout(()=> {console.log(`
										Flipping Card 1: ${card_1}`)},7000)
										setTimeout(()=> {console.log(`
										CONGRATS YOU HAVE LOST 
										YOU LOST: $${parseInt(answers['bet'])}
										YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
										setTimeout(() => {console.log(`
										.
										.
										.
										THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
										ONE SINGLE FUNCTION BUT NOW I CAN'T CALL IT BACK lol
										.
										.
										.
										`)}, 9000)
										setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
									}
						}
					}
					// card_2 == winner
					// location: (Validation_1==Fail, Validation_2==Passed)
					if(test == 2){
						
						// user placed bet on {card_2}
						if(parseInt(answers['card'])==2){
							playerMoney+=parseInt(answers['bet'])
							houseWinnings-=parseInt(answers['bet'])
							// WINNING
							// GAME OVER
							// ALL IN BET on card_2 && Beating The House
							if(houseWinnings == 0){
								setTimeout(()=>{console.log(`
								.`)},1000);
								setTimeout(()=>{console.log(`
								.`)},2000);
								setTimeout(()=> {console.log(`
								Flipping Card 3: ${card_3}`)},3000)
								setTimeout(()=> {console.log(`
								Fliping Card 1: ${card_1}`)},4000)
								setTimeout(()=> {console.log(`
								.`)},5000)
								setTimeout(()=> {console.log(`
								.`)},6000)
								setTimeout(()=> {console.log(`
								Flipping Card 2: ${card_2}`)},7000)
								setTimeout(()=>{console.log(`YOU BEAT THE HOUSE! 
								`)},8000)
								setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
							}
							// WINNING 
							// playerMoney+=answers['bet'] && houseWinnings-=answers['bet'] 
							else{
								setTimeout(()=>{console.log(`
								.`)},1000);
								setTimeout(()=>{console.log(`
								.`)},2000);
								setTimeout(()=> {console.log(`
								Flipping Card 3: ${card_3}`)},3000)
								setTimeout(()=> {console.log(`
								Fliping Card 1: ${card_1}`)},4000)
								setTimeout(()=> {console.log(`
								.`)},5000)
								setTimeout(()=> {console.log(`
								.`)},6000)
								setTimeout(()=> {console.log(`
								Flipping Card 2: ${card_2}`)},7000)
								setTimeout(()=> {console.log(`
								CONGRATS YOU HAVE WON 
								YOUR WINNINGS WERE OF: $${parseInt(answers['bet'])}
								YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
								setTimeout(() => {console.log(`
								.
								.
								.
								THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
								ONE SINGLE FUNCTION AND NOW I CAN'T CALL IT BACK lol
								.
								.
								.
								`)}, 9000)
								setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
							}
						}
						// LOOSING
						// card_2 == winner
						// user = (answers['card'] == {card_1 || card_3})
						else{
								playerMoney-=parseInt(answers['bet'])
								houseWinnings+=parseInt(answers['bet'])
								// LOOSING
								// GAME OVER
								// ALL IN BET && LOOSING to The House
								if(playerMoney===0){
									setTimeout(()=>{console.log(`
									.`)},1000);
									setTimeout(()=>{console.log(`
									.`)},2000);
									setTimeout(()=> {console.log(`
									Flipping Card 3: ${card_3}`)},3000)
									setTimeout(()=> {console.log(`
									Fliping Card 1: ${card_1}`)},4000)
									setTimeout(()=> {console.log(`
									.`)},5000)
									setTimeout(()=> {console.log(`
									.`)},6000)
									setTimeout(()=> {console.log(`
									Flipping Card 2: ${card_2}`)},7000)
									setTimeout(()=>{console.log(`
									The House WINS`)},8000)
									setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
									}
								// LOOSING
								// playerMoney-=answers['bet'] && houseWinnings+=answers['bet'] 
								else{
										setTimeout(()=>{console.log(`
										.`)},1000);
										setTimeout(()=>{console.log(`
										.`)},2000);
										setTimeout(()=> {console.log(`
										Flipping Card 3: ${card_3}`)},3000)
										setTimeout(()=> {console.log(`
										Fliping Card 1: ${card_1}`)},4000)
										setTimeout(()=> {console.log(`
										.`)},5000)
										setTimeout(()=> {console.log(`
										.`)},6000)
										setTimeout(()=> {console.log(`
										Flipping Card 2: ${card_2}`)},7000)
										setTimeout(()=> {console.log(`
										CONGRATS YOU HAVE LOST 
										YOU LOST: $${parseInt(answers['bet'])}
										YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
										setTimeout(() => {console.log(`
										.
										.
										.
										THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
										ONE SINGLE FUNCTION BUT NOW I CAN'T CALL IT BACK lol
										.
										.
										.
										`)}, 9000)
										setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
									}
						}
					}
					// card_3 = winner
					// location: (Validation_1==Fail, Validation_2==Passed)
					if(test == 4){
						
						// user placed bet on {card_3}
						if(parseInt(answers['card'])==3){
							playerMoney+=parseInt(answers['bet'])
							houseWinnings-=parseInt(answers['bet'])
							// WINNING
							// GAME OVER
							// ALL IN BET on card_3 && Beating The House
							if(houseWinnings == 0){
								setTimeout(()=>{console.log(`
								.`)},1000);
								setTimeout(()=>{console.log(`
								.`)},2000);
								setTimeout(()=> {console.log(`
								Flipping Card 1: ${card_1}`)},3000)
								setTimeout(()=> {console.log(`
								Fliping Card 2: ${card_2}`)},4000)
								setTimeout(()=> {console.log(`
								.`)},5000)
								setTimeout(()=> {console.log(`
								.`)},6000)
								setTimeout(()=> {console.log(`
								Flipping Card 3: ${card_3}`)},7000)
								setTimeout(()=>{console.log(`YOU BEAT THE HOUSE! 
								`)},8000)
								setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
							}
							// WINNING 
							// playerMoney+=answers['bet'] && houseWinnings-=answers['bet'] 
							else{
								setTimeout(()=>{console.log(`
								.`)},1000);
								setTimeout(()=>{console.log(`
								.`)},2000);
								setTimeout(()=> {console.log(`
								Flipping Card 1: ${card_3}`)},3000)
								setTimeout(()=> {console.log(`
								Fliping Card 2: ${card_2}`)},4000)
								setTimeout(()=> {console.log(`
								.`)},5000)
								setTimeout(()=> {console.log(`
								.`)},6000)
								setTimeout(()=> {console.log(`
								Flipping Card 3: ${card_3}`)},7000)
								setTimeout(()=> {console.log(`
								CONGRATS YOU HAVE WON 
								YOUR WINNINGS WERE OF: $${parseInt(answers['bet'])}
								YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
								setTimeout(() => {console.log(`
								.
								.
								.
								THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
								ONE SINGLE FUNCTION AND NOW I CAN'T CALL IT BACK lol
								.
								.
								.
								`)}, 9000)
								setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
							}
						}
						// LOOSING
						// card_3 == winner
						// user = (answers['card'] == {card_1 || card_2})
						else{
								playerMoney-=parseInt(answers['bet'])
								houseWinnings+=parseInt(answers['bet'])
								// LOOSING
								// GAME OVER
								// ALL IN BET && LOOSING to The House
								if(playerMoney===0){
									setTimeout(()=>{console.log(`
									.`)},1000);
									setTimeout(()=>{console.log(`
									.`)},2000);
									setTimeout(()=> {console.log(`
									Flipping Card 1: ${card_1}`)},3000)
									setTimeout(()=> {console.log(`
									Fliping Card 2: ${card_2}`)},4000)
									setTimeout(()=> {console.log(`
									.`)},5000)
									setTimeout(()=> {console.log(`
									.`)},6000)
									setTimeout(()=> {console.log(`
									Flipping Card 3: ${card_3}`)},7000)
									setTimeout(()=>{console.log(`
									The House WINS`)},8000)
									setTimeout(() => {console.log(`GAME OVER`), helloJS()}, 9000)
									}
								// LOOSING
								// playerMoney-=answers['bet'] && houseWinnings+=answers['bet'] 
								else{
										setTimeout(()=>{console.log(`
										.`)},1000);
										setTimeout(()=>{console.log(`
										.`)},2000);
										setTimeout(()=> {console.log(`
										Flipping Card 1: ${card_1}`)},3000)
										setTimeout(()=> {console.log(`
										Fliping Card 2: ${card_2}`)},4000)
										setTimeout(()=> {console.log(`
										.`)},5000)
										setTimeout(()=> {console.log(`
										.`)},6000)
										setTimeout(()=> {console.log(`
										Flipping Card 3: ${card_3}`)},7000)
										setTimeout(()=> {console.log(`
										CONGRATS YOU HAVE LOST 
										YOU LOST: $${parseInt(answers['bet'])}
										YOUR NEW BANK IS OF: $${playerMoney}`)},8000)
										setTimeout(() => {console.log(`
										.
										.
										.
										THOUGHT IT WOULD BE FUN TO WRITE AN APP FROM 
										ONE SINGLE FUNCTION BUT NOW I CAN'T CALL IT BACK lol
										.
										.
										.
										`)}, 9000)
										setTimeout(() => {console.log(`THEREFORE GAME OVER`), helloJS()}, 10000)
									}
						}
					}
					
				}

			})
		}
		if(parseInt(answers['options'])==4){
			setTimeout(()=> {console.log(`
			                Draw 3 Cards & Find Max HW  + Bet High:Explained
			`)}, 1000)
			setTimeout(()=> {console.log(`
				Create Variables to have it return a random number between 1 and 13
				ex: 
					const randomNum = Math.floor(Math.random()*13)
					
					console.log(randomNum)
			`)}, 2000)
			setTimeout(()=> {console.log(`
						7
			`)}, 3000)
			setTimeout(()=> {console.log(`
				Now Create 3 Random cards:
			`)}, 4000)
			setTimeout(()=> {console.log(`
					const card_1 = Math.floor(Math.random()*13)
			`)}, 4500)
			setTimeout(()=> {console.log(`
					const card_2 = Math.floor(Math.random()*13)
			`)}, 5000)
			setTimeout(()=> {console.log(`
					const card_3 = Math.floor(Math.random()*13)
			`)}, 5500)
			setTimeout(()=> {console.log(`
				.
				.
				alright now these Variable are immutable, they can only be change if function gets called AGAIN
				.
				.
			`)}, 6000)
			setTimeout(()=> {console.log(`
				Now using the Math.max method we will find the max of the 3
			`)}, 7000)
			setTimeout(()=> {console.log(`
				When we console.log the variables we can see their value

					console.log(card_1, card_2, card_3)
			`)}, 8000)
			setTimeout(()=> {console.log(`
					output: 3,1,7
			`)}, 9000)
			setTimeout(()=> {console.log(`
				Now Using Math.max method we can find the max of those 3 variables
			`)}, 10000)
			setTimeout(()=> {console.log(`
					console.log(Math.max(card_1, card_2, card_3))
			`)}, 11000)
			setTimeout(()=> {console.log(`
						output: 7
			`)}, 12000)
			setTimeout(()=> {console.log(`
				Now lets use that information to build a mini game inside the console
			`)}, 13000)
			setTimeout(()=> {console.log(`
					Lets create the variables
			`)}, 14000)
			setTimeout(()=> {console.log(`
						const max = Math.max(card_1, card_2, card_3)
						const cardList = [card_1, card_2, card_3]
			`)}, 15000)
			setTimeout(()=> {console.log(`
					Now were going to turn the {cardList} and {max} into a string to use indexOf() to find the max again
			`)}, 16000)
			setTimeout(()=> {console.log(`
						const cardList_string = cardList.toString()

						const max_string = max.toString()
			`)}, 17000)
			setTimeout(()=> {console.log(`
					Lets see what it looks like
			`)}, 18000)
			setTimeout(()=> {console.log(`
						console.log('
							cardList.toString() : $ {cardList_string}

							max.toString()	: $ {max_string}
						')
			`)}, 19000)
			setTimeout(()=> {console.log(`
						output: 
						
						cardList.toString() : '3,1,7'

						max.toString()	: '7'
			`)}, 20000)
			setTimeout(()=> {console.log(`
					Now lets find the position of of the {max} inside the string using indexOf()
			`)}, 21000)
			setTimeout(()=> {console.log(`
						const maxPostion_in_string = cardList_string.indexOf(max_string)	
			`)}, 22000)
			setTimeout(()=> {console.log(`
					Lets see it	
			`)}, 23000)
			setTimeout(()=> {console.log(`
						console.log(maxPosition_in_string)
			`)}, 24000)
			setTimeout(()=> {console.log(`
						output: 4
			`)}, 25000)
			setTimeout(()=> {console.log(`
					WHY?	
			`)}, 26000)
			setTimeout(()=> {console.log(`
                    __________________________________
                    | Postion:      0   1   2   3  4   |
                    |               -   -   -   -  -   |
                    | max_string:   3   ,   1   ,  7   |
                    |__________________________________|	
			`)}, 27000)
			setTimeout(()=> {console.log(`
					That means that the commas are also taking a space
			`)}, 28000)
			setTimeout(()=> {console.log(`
					Now we know that on a given string with 3 cards

					card_1 = Position(0)
					card_2 = Position(2)
					card_3 = Position(4)
			`)}, 29000)
			setTimeout(()=> {console.log(`
							Now we can build the 'Bet High' Game
			`)}, 30000)
			setTimeout(()=> {console.log(`
    Tools needed:
			`)}, 31000)
			setTimeout(()=> {console.log(`
		Inquirer.JS => (doc) => https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f => ~$ npm install inquirer
			`)}, 32000)
			setTimeout(()=> {console.log(`
					This will create a { package-lock.json } and a { package.json } file in your directory
			`)}, 33000)
			setTimeout(()=> {console.log(`
					Now we can ask questions on the CLI aka intake information from the CLI
			`)}, 34000)
			setTimeout(()=> {console.log(`
						Lets create the question:
			`)}, 35000)
			setTimeout(()=> {console.log(`

								const inquirer = require('inquirer')
								
								let userQUestion =[
									{
										type:'input',                 #this may very based on neededs ie.
										name:'{name of question}'     #use single word names for easy access
										message:'{Here you will write the question}    
									}
								]

			`)}, 36000)
			setTimeout(()=> {console.log(`
					To ask it:

								inquirer.prompt(userQuestion)

					to access answer:
								
								inquirer.promt(userQuestion).then(answers)
					
					This then creates a accessible var answers
								
								inquirer.prompt(userQuestion).then(answeres =>{
									console.log(answers['{name of question}'])
								})
								

			`)}, 37000)
			setTimeout(() => {console.log(`
					Heres the pizza example:
						
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
							
							let area = (pi*(size/2)**2);
							let price_per_sq = (price/area);
		
			`)}, 38000)
			setTimeout(()=>{console.log(`

											easy enough
			`)},39000)

			setTimeout(()=>{console.log(`
						GAME SCRIPT:

						// Game Variables
						let playerMoney = 3;
						let houseWinnings =3;
						const card_1 = Math.floor(Math.random()*13)
						const card_2 = Math.floor(Math.random()*13)
						const card_3 = Math.floor(Math.random()*13)
						const cardList = [card_1, card_2, card_3]
						let cardList_string = cardList.toString()
						var winner = Math.max(card_1, card_2, card_3)
						var test = cardList_string.indexOf(winner.toString())
						
						// Question Variable
						let gamble = [
							{
								type:'input',
								name: 'bet',
								message: 'Place your BET'
								
							},
							{
								type:'input',
								name:'card',
								message:'Pick 1 of the 3 Cards by Inputting the card #'
							}
						]
						
						// Call the question
						inquirer.prompt(gamble).then(answers=>{
							if(parseInt(answers['bet']) > playerMoney || parseInt(answers['card']) > 3){
								
								**** LOGIC ****
							}else{
								**** LOGIC ****s
							}
						})

			`)}, 40000)
			setTimeout(()=>{console.log(`
								THANK YOU FOR COMING TO MY TED TALK...lol \u270C`)}, 41000)
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
			}, 42000)

		}
		if(parseInt(answers['options']) == 5){
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
		if(parseInt(answers['options'])==6){
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
		if(answers['options']==7){
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
			let midDate = new Date(date1 + mid )
			let midOFF = midDate.getTimezoneOffset()
			console.log(`
				date1 : ${date1}
				date2 : ${date2}
				date2 - date1: ${mid}	
				
				midDate: ${midDate}

				off: ${midOFF}
				
			`)
		}
		if(answers['options']==8)
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
			\u26A0ERROR OPTION UNAVAILABLE TRY AGAIN`)},2500)
			return setTimeout(() => {helloJS()},3000)
		}
		//Edge Case Control-2 if Enter is accidently tapped AKA anything thats NaN but Also control 0 as an Input
		if(!answers['options']){
			// Check to See if you Want to Exit the APP by converting NaN to 0 
			if(answers['options'].toString()=='0'){
				setTimeout(() => {console.log(`
				YOU ARE NOW LEAVING THE APP`)}, 1000);
				setTimeout(() => {inquirer.prompt(
					{
						type:'input', 
						name:'exit-confirmation', 
						message:'Press ENTER to EXIT or Press 1 to RETURN'
					}).then(answers =>{
								if(answers['exit-confirmation']==""){
									process.exit;
								}else{
									helloJS()
								}
										})}, 1500);
			}else{
				console.log(`
				ENTER A VALID VALUE`)
				setTimeout(() => {helloJS()}, 1000)
			}
		}
	})
}

helloJS();