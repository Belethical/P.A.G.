class qButton {
	constructor(xpos, ypos, colour, textt){
		//Constructs Object
		this.x = xpos;
		this.y = ypos;
		this.w = 430;
		this.h = 80;
		this.text = textt;
		this.colour = colour;


		this.display = function(){
			
			//Draws the Button for display
			fill(this.colour);
			rect(this.x, this.y, this.w, this.h);
			textSize(40);
			textAlign(CENTER);
			fill(0,0,0);
			text(this.text, this.x + this.w/2 , this.y + this.h/2 + 15 );
		
		}


		this.clicked = function(){ //this is ran whenever a mouse click is registered
			if((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h)) {
				console.log(this.x); //This code figures out if the mouse is located within the Question Box
			
				if (qCounter == 4) { //If the question is the colour one, the colour is taken and the gamestate moved on
					chosenColour = this.colour;
					gamestate = 2;

				}

				if(qCounter == 3){ //Records the Question that was picked on question 3, it can be A, B, C, or D
					choice = this.text;
				}
				//Adds a counter to the question counter
				qCounter = qCounter + 1;
			}	
		}

		this.specialClick = function(){ // this function is ran for the start button and changes the game to its next state
			if((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h)) {

				gamestate = 1;
			}

		}

		this.finalClick = function(){ // this function is ran when the button to load the poster is clicked.
			if((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h)) { 
				gamestate = 3;
			}
		}

		this.colourClick = function(){ //runs when the generate new colours button is pressed
			if((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h)) { 
				for (var i = qButtons.length - 1; i >= 0; i--) { //Loops through all the buttons and gives them a random colour

					var r = random(255);
					var b = random(255); 
					var g = random(255);
					qButtons[i].colour = color(r,g,b);
				}
			}
		}
	}
}