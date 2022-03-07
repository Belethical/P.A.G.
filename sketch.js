//Global Variables

let gamestate = 3;
let template;
var pag;
let qButtons = [];
let questionList = [];
let sQuestions = [];
let rQuestions = [0,0,0]
let qCounter = 0;
let loadFileDone = false;
let spotifySelector;
let spotifyCode;
let randomString = [];
let x;
let choice;
var garfieldStrip;
var garfieldSelector;
var bgSelector;
var bg;
var qrCode;
var qrSelector;
var tarot;
var tarotSelector;
var tarotQR;

let questionFinished = false;
let artStart = false;





function setup() {

  createCanvas(1000, 800);
  pag = loadImage('Sprites/PAG.png'); //Loads PAGS sprite
  textFont('Syne Mono'); // Sets the Font
	 
	// Setting up Colours	 
  let p = color(199,36, 177);
  let g = color(128, 0, 255);
  let b = color(0,255, 255);
  let r = color(0,26, 255);
  let green = color(0, 181, 26);
  let orange = color(0,255,180);

  // Creating Button Objects, passing in an X and Y location, as well as a Colour and Text
  beginButton = new qButton(550, 40, g, 'Click to Start!');
  finalButton = new qButton(550, 20, g, 'Load Poster');
  colourButton = new qButton(300, 240, green, 'Change Colours');

  //Uses a function to setup my arrays
  loadArrays();

  //Uses a unique random number generator function to get 3 random numbers to decide the questions
  //The UniqueRandoms function was not wrote by me and I sourced it from Stack Overflow
  rQuestions = uniqueRandoms(3, 0, 11);

  for (var i = 0; i <= 2; i++) { //Uses the random numbers to pick questions from the list and put it in the sQuestions variable	
  	sQuestions[i] = questionList[rQuestions[i]];
  }

  //Creates question buttons
  qButtons[0] = new qButton(30,600, p, 'A');
  qButtons[1] = new qButton(30,700, g, 'C');
  qButtons[2] = new qButton(500,600, b, 'B');
  qButtons[3] = new qButton(500,700, r, 'D');
  
  template = randomInteger(1,5);

}

function mousePressed(){ //This section of code is ran when the mouse is pressed
	
	if (gamestate == 0) { //If the game is at the intro screen, then it will call a function on the intro button
		beginButton.specialClick();
	}

	for (var i = qButtons.length - 1; i >= 0; i--) { //This loop goes through all the question buttons and checks if they have been clicked
		qButtons[i].clicked();
		
	}

	if (qCounter == 4) { //This runs when the colour question is asked, and uses a function in the colourButton to randomise colours
		colourButton.colourClick();
	}

	
	if(gamestate == 2) { //This is run when the user is at the final screen before the poster to check if they have clicked the button
		finalButton.finalClick();
	}
	
}

function draw() {
  

if (gamestate == 0) { //gamestate 0 is the intro gamestate, this is where PAG introduces himself and a start button is displayed

	background(0);
	gamestate0();
	
	

} else if (gamestate == 1) { //gamestate 1 is the Quiz gamestate, this is where the user is asked questions and their answers are recorded

	background(0);
	gamestate1();


	
} else if (gamestate == 2) { //gamestate 2 is the loading screen before the poster where P.A.G explains how to save the poster.
	
	background(0);
	gamestate2();

} else if (gamestate == 3) { //gamestate 3 is where the poster is generated and displayed at an A4 size. It has to be displayed at this size so it can be downloaded at a high resolution
	gamestate3();
} 

}

function gamestate0() { // INTRO
	
	//Displays flavour text up the top
	fill(0, 181, 26);
	textSize(20);
	textAlign(LEFT);
	text('STARTING CUNTY PROGRAM...', 1, 20);
	text('FETCHING SPRITES...', 1, 50);
	text('TURNING P.A.G ON...', 1, 80);
	text('INJECTING CREATIVITY...', 1, 110);
	text('ADDING CHARM...', 1, 140);

	//Displays the Exposition Text
	fill(0, 181, 26);
	textSize(23);
	textAlign(LEFT);
	text("Hello, you can call me P.A.G!", 320, 350);
	text("P.A.G = Personalised Art Generator", 320, 400);
	text("I'm an AI that specialises in making custom Art", 320, 450);
	text("My Job is to generate art tailored just for you!", 320, 500);
	text("Each Poster I make is one of a kind", 320, 550);
	text("I love making mixtapes as well but thats off topic...", 320, 600);
	text("I'll ask you some questions to get to know you", 320, 650);
	text("Then i'll be ready to make you a personalised poster", 320, 700);
	text("When you're ready click the button to start!", 320, 750);

	//Displays PAGS sprite
	image(pag, 10, 300);
	pag.resize(300, 500);

	//displays the start button
	beginButton.display();
}

function gamestate1(){ //QUIZ

	//displays PAGS sprite
	image(pag, 10, 250);
	pag.resize(200, 350);

	//This loop goes through each button and displays them, on the first loop it sets the qCounter to 0;

	for (var i = qButtons.length - 1; i >= 0; i--) {
		qButtons[i].display();

		if (questionFinished = false) {
			qCounter = 0;
			questionFinished = true;			
		}
	}

	if (qCounter == 0) { 	//Displays the first question
		
		//Displays Question
		fill(0, 181, 26);
		textAlign(CENTER);
		text(sQuestions[0][0], 500, 80);

		//Displays Answers
		text(sQuestions[0][1], 500, 200);
		text(sQuestions[0][2], 500, 300);
		text(sQuestions[0][3], 500, 400);
		text(sQuestions[0][4], 500, 500);
		

	} else if (qCounter == 1) { 	//Displays the second question
		
		//Displays Question
		fill(0, 181, 26);
		textAlign(CENTER);
		text(sQuestions[1][0], 500, 80);

		//Displays Answers
		fill(0, 181, 26);
		text(sQuestions[1][1], 500, 200);
		text(sQuestions[1][2], 500, 300);
		text(sQuestions[1][3], 500, 400);
		text(sQuestions[1][4], 500, 500);

	} else if (qCounter == 2) { 	//Displays the third question

		//Displays Question
		fill(0, 181, 26);
		textAlign(CENTER);
		text(sQuestions[2][0], 500, 80);

		//Displays Answers
		fill(0, 181, 26);
		text(sQuestions[2][1], 500, 200);
		text(sQuestions[2][2], 500, 300);
		text(sQuestions[2][3], 500, 400);
		text(sQuestions[2][4], 500, 500);


	} else if (qCounter == 3) { //Displays the fourth question, this changes depends on the template chosen

		if (template == 1) { //Garfield Template

			//Displays Question
			fill(0, 181, 26);
			text("What is your opinion on Garfield?", 500, 80);

			//Displays Answers
			text("A: I love Garfield", 500, 200);
			text("B: I Detest Garfield", 500, 300);
			text("C: He's whatever", 500, 400);
			text("D: Who's Garfield?", 500, 500);

		} else if (template == 2) { //Tarot Card Template

			//Displays Question
			fill(0, 181, 26);
			text("What do you think about Tarot Cards?", 500, 80);

			//Displays Answers
			textSize(35);
			text("A: Kind of Useless", 500, 200);
			text("B: They can be used to reflect", 500, 300);
			text("C: They can be fun to use", 500, 400);
			text("D: I wouldn't mess with them", 500, 500);

		} else if (template == 3) { //Rabbit Hole Template

			//Displays Question
			fill(0, 181, 26);
			text("Do you enjoy virtual rabbit holes?", 500, 80);
			
			//Displays Answers
			textSize(35);
			text("A: Depends on the topic", 500, 200);
			text("B: Not really", 500, 300);
			text("C: I can fall in one hours", 500, 400);
			text("D: No idea", 500, 500);

		} else if (template == 4) { //Minimalist Template

			//Displays Question
			fill(0, 181, 26);
			text("Are you enjoying this quiz?", 500, 80);
			
			//Displays Answers
			textSize(35);
			text("A: Of course!", 500, 200);
			text("B: Absolutely", 500, 300);
			text("C: I'm having a great time", 500, 400);
			text("D: P.A.G IS THE BEST!!!!!", 500, 500);

		} else if (template == 5) { //Music Genre Template

			//Displays Question
			fill(0, 181, 26);
			text("Pick a music genre!", 500, 80);
			
			//Displays Answers
			textSize(35);
			text("A: House", 500, 200);
			text("B: Disco", 500, 300);
			text("C: 80s Music", 500, 400);
			text("D: Something different", 500, 500);
		} 



	} else if (qCounter == 4) { //The User gets to choose the colour of their poster here

		//Displays Text
		fill(0, 181, 26);
		text("Alright, last one!", 500, 80);
		textSize(25);
		text("Click on the button thats colour appeals to you the most", 500, 130);
		text("If you don't like these colours, click this new button to change them!", 500, 170);
		text("I can't guarantee that they will be pretty ones...", 500, 210);
		
		//Displays colour randomiser button
		colourButton.display();

		if (template == 3 && choice == 'B') { // if the user responded to the rabbit holes question that they don't enjoy them, the template is changed to a different one
			template = 4;
		}
	}
}

function gamestate2(){ //OUTRO

	//Displays PAGS sprite
	pag.resize(300, 500);
	image(pag, 10, 300);

	//Displays the load poster button in the Users chosen colour
	finalButton.colour = chosenColour;
	finalButton.display();
	
	//Displays Outro Text
	fill(0, 181, 26);
	textSize(30);
	textAlign(LEFT);
	text("Thanks for answering my questions!", 320, 350);
	text("Based on your personality profile", 320, 400);
	text("I've made you a poster you can print out!", 320, 450);
	text("It's got stuff I picked just for you!", 320, 500);
	text("I'm still learning how to do this...", 320, 550);
	text("But I think you'll love it (｡◕‿◕｡)", 320, 600);
	text("You can save the poster on the next page", 320, 650);
	text("Don't forget to scan the codes!", 320, 700);
	textSize(18);
	text("P.S you might have to zoom out your browser to see it all, sorry!!!", 320, 730);



}

function gamestate3() { //POSTER GENERATION
	
	//Loads the files needed for the poster depending on the template and the Quiz Results
	if (loadFileDone == false) {
		loadFiles();
		loadFileDone = true;
		console.log("filesloaded");
		x = randomInteger(0,randomString.length -1); // Chooses the Index for the random string to be used
	}

	//Variables used to do text repitition in loops
	var textRepeatSize;
	var textDownSize;
	
	//Canvas is changed to A4 paper size
	resizeCanvas(2480, 3508);
	background('white');


	if (template == 1) { //Garfield Template
			
			//Sizes and places the different sprites
			garfieldStrip.resize(2100, 640);
			image(garfieldStrip, 200, 700);

			spotifyCode.resize(2480, 600);
			image(spotifyCode, 0,0);

			qrCode.resize(705, 705);
			image(qrCode, 895, 670);

			textRepeatSize = 120;
			textDownSize = 1550;

			//Places the random text so that it slowly gets smaller as it reaches the bottom of the page
			fill(chosenColour);
			textAlign(CENTER);
			textSize(textRepeatSize);
			text(randomString[x], 1240 , textDownSize);

			textSize(textRepeatSize - 10);
			text(randomString[x], 1240 , textDownSize + 200);

			textSize(textRepeatSize - 20);
			text(randomString[x], 1240 , textDownSize + 400);

			textSize(textRepeatSize - 30);
			text(randomString[x], 1240 , textDownSize + 600);

			textSize(textRepeatSize - 40);
			text(randomString[x], 1240 , textDownSize + 800);

			textSize(textRepeatSize - 50);
			text(randomString[x], 1240 , textDownSize + 1000);

			textSize(textRepeatSize - 60);
			text(randomString[x], 1240 , textDownSize + 1200);

			textSize(textRepeatSize - 70);
			text(randomString[x], 1240 , textDownSize + 1400);

			textSize(textRepeatSize - 80);
			text(randomString[x], 1240 , textDownSize + 1600);

		} else if (template == 2) { //TAROT CARD TEMPLATE

			textDownSize = 1700;
			textRepeatSize = 110;
			
			//Outside Rectangle 
			rect(0,0, 2480, 3508);

			//White rectangle on the inside to create a frame
			fill('white');
			rect(50, 50, 2350, 3400);

			//Space for tarot card made into the frame
			fill(chosenColour);
			rect(700, 0, 1000, 1500);

			//Tarot card and other sprites resized and displayed
			tarot.resize(800, 1200);
			image(tarot, 800, 50);

			qrCode.resize(500, 500);
			image(qrCode, 125, 100);

			//The TarotQR is a QR code that matches the tarot card given on the poster
			tarotQR.resize(500, 500);
			image(tarotQR, 1800,100);

			spotifyCode.resize(900, 200);
			image(spotifyCode, 750, 1260);

			//a loop for placing the randomt text string
			for (var i = 8; i >= 0; i--) {
				fill(chosenColour);
				textAlign(CENTER);
				textSize(textRepeatSize);
				text(randomString[x], 1235, textDownSize);
				textDownSize = textDownSize + 200;
			}

			//Resets textDownSize before the next loop
			textDownSize = 1800;

		} else if (template == 3) { //RABBIT HOLE TEMPLATE

			//Sizes and palces the background art
			bg.resize(2500, 3528);
			image(bg, 0,0);

			//Displays and resizes the codes
			qrCode.resize(800,800);
			image(qrCode, 850, 1650);

			fill(chosenColour);
			rect(550, 120,  1400, 400);

			spotifyCode.resize(1300, 300);
			image(spotifyCode, 600, 165);	
			
		} else if (template == 4) { //MINIMALIST TEMPLATE

			//draws circles
			fill(chosenColour);
			circle(-100,2700, 1800);
			circle(2580, 700, 1800);

			tint(chosenColour); // tints the spotify code to the users chosen colour

			//sizes and places spotify code
			spotifyCode.resize(2480, 500);
			image(spotifyCode, 0, 3020);

			tint(290, 300); //reverts the tint back to normal

			//sizes and places qr code
			qrCode.resize(800,800);
			image(qrCode, 50, 50);

			//draws the random text in the center
			textSize(115);
			textAlign(CENTER);
			text(randomString[x], 1240, 1700);
			//reverts the tint
			tint(290, 0);

		} else if (template == 5) { //MUSIC GENRE TEMPLATE

			//Loads the Background, changes depending on the Users genre choice
			image(bg, 0,0);

			//tints the spotify code to the users chosen colour
			tint(chosenColour);
			spotifyCode.resize(1700, 400);
			image(spotifyCode, 780, 1790);

			tint(290,300);

			//if the user choose the genre 'something different' a special QR code is also added
			if (choice == 'D') {
				qrCode.resize(790, 830);
				image(qrCode, 1340, 400);
			}
}

function loadFiles() { //Loads the files needed for the poster

	if (template == 1) { //Garfield Template

		garfieldSelector = 'Sprites/garfield (' + randomInteger(1,11) + ').jpg'; //Creates a random garfield comic filepath
		garfieldStrip = loadImage(garfieldSelector); //loads the selected comic
		
		spotifySelector = 'Sprites/spotify (' + randomInteger(1,85) + ').jpeg'; //Creates a random spotify code filepath
		spotifyCode = loadImage(spotifySelector); //loads the selected song

		//In the garfield template, all users are given the same Garfield QR code
		qrCode = loadImage('Sprites/garfieldQR.png'); //loads the garfield QR code

		} else if (template == 2) { //Tarot Card Template

			var c = randomInteger(1,10); //Random Number to decide the tarot card

			//Tarot card is selected using the random number
			tarotSelector = 'Sprites/tarot (' + c + ').png'; //Creates a random tarot card filepath
			tarot = loadImage(tarotSelector); //Loads the tarot card

			spotifySelector = 'Sprites/spotify (' + randomInteger(1,85) + ').jpeg'; //Creates a random spotify code filepath
			spotifyCode = loadImage(spotifySelector); //loads the selected song

			//This QR code uses a special set of QR codes that are associated with each card
			//The random number that was used for the tarot card is used here to get the QR code that matches that card
			qrSelector = 'Sprites/qr-code (' + c + ').png';
			tarotQR = loadImage(qrSelector);

			//Random QR code generated
			qrSelector = 'Sprites/qrcode (' + randomInteger(1,28) + ').png'; //Creates random QR code filepath
			qrCode = loadImage(qrSelector); //Loads QR code

		} else if (template == 3) { //RABBIT HOLE TEMPLATE


			spotifySelector = 'Sprites/spotify (' + randomInteger(1,85) + ').jpeg'; //Creates a random spotify code filepath
			spotifyCode = loadImage(spotifySelector); //loads the selected song

			qrSelector = 'Sprites/qrcode (' + randomInteger(1,28) + ').png'; //Creates random QR code filepath
			qrCode = loadImage(qrSelector); //Loads QR code


			bgSelector = 'Sprites/spiral (' + randomInteger(1,8) + ').jpg'; //creates a filepath for a random colour variation of the Spiral Art
			bg = loadImage(bgSelector); //Loads the Art
			
		} else if (template == 4) { //MINIMALIST TEMPLATE

			spotifySelector = 'Sprites/spotify (' + randomInteger(1,85) + ').jpeg';  //Creates a random spotify code filepath
			spotifyCode = loadImage(spotifySelector); //loads the selected song

			qrSelector = 'Sprites/qrcode (' + randomInteger(1,28) + ').png'; //Creates random QR code filepath
			qrCode = loadImage(qrSelector); //Loads QR code

			//Loads Paper texture
			bgSelector	= 'Sprites/paperTexture.jpg';
			bg = loadImage(bgSelector);
			
		} else if (template == 5) { //MUSIC GENRE TEMPLATE

			if(choice == 'A') { //Loads the House Music Variation if the user picked it
				//Loads the associated background
				bgSelector = 'Sprites/house.jpg';
				bg = loadImage(bgSelector);

				//Creates a song code for that genre
				spotifySelector = 'Sprites/houseSong.jpeg';
				spotifyCode = loadImage(spotifySelector);

			} else if(choice == 'B') { //Loads the Disco Music Variation if the user picked it
				//Loads the associated background
				bgSelector = 'Sprites/disco.jpg';
				bg = loadImage(bgSelector);

				//Creates a song code for that genre
				spotifySelector = 'Sprites/discoSong.jpeg';
				spotifyCode = loadImage(spotifySelector);

			} else if(choice == 'C') { //Loads the 80's Music Variation if the user picked it
				//Loads the associated background
				bgSelector = 'Sprites/80.jpg';
				bg = loadImage(bgSelector);

				//Creates a song code for that genre
				spotifySelector = 'Sprites/80song.jpeg';
				spotifyCode = loadImage(spotifySelector);

			} else if(choice == 'D') { //Loads the Different Music Variation if the user picked it
				//Loads the associated background
				bgSelector = 'Sprites/different.jpg';
				bg = loadImage(bgSelector);

				//Creates a song code for that genre
				spotifySelector = 'Sprites/differentSong.jpeg';
				spotifyCode = loadImage(spotifySelector);

				//Creates a QR code 
				qrSelector = 'Sprites/differentQR.png';
				qrCode = loadImage(qrSelector);
			}
		}
	}

}

//Function used the create a random number inbetween a range of numbers
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Function sourced from stack overflow that generates a specified amount of unique random numbers between a range of numbers
function uniqueRandoms(qty, min, max){
  var rnd, arr=[];
  do { do { rnd=Math.floor(Math.random()*max)+min }
      while(arr.includes(rnd))
      arr.push(rnd);
  } while(arr.length<qty)
  return arr;
}

function loadArrays(){ //Function used to populate arrays

//Question Array
questionList = 
[
["How was your day?", "A: It's been great!","B: Could be better", "C: Could be worse", "D: Not very good"],
["Are you a Dog or a Cat person?", "A: Dogs reign supreme", "B: Cats reign supreme", "C: They both suck", "D: It's a tie"],
["What is your favourite season?", "A: Summer", "B: Winter", "C: Autumn" , "D: Spring"],
["Do you enjoy engaging with art?", "A: Not really", "B: Of Course!" , "C: Depends on the Art" , "D: Art is stupid"],
["What do you think about house music?",  "A: It slaps", "B: Its Okay","C: I hate it", "D: Depends on my mood"],
["Do you believe in Horoscopes?",  "A: Not at all", "B: Somewhat","C: Quite Strongly", "D: I find them entertaining"],
["How would you describe yourself?",  "A: Smart", "B: Charismatic","C: Creative", "D: Rebellious "],
["Is your glass half empty or half full?",  "A: half empty", "B: half full","C: my cup runneth over", "D: my cup needs a refill"],
["What was more entertaining as a child?" , "A: Board Games", "B: Sports" , "C: Video Games", "D: Outdoor Adventures"],
["Do you enjoy horror movies?" , "A: Not really", "B: All the time" , "C: Rarely", "D: Maybe at Halloween"],
["Do you like the moon?" , "A: It's pretty", "B: I prefer the sun" , "C: Not really", "D: I love the moon"],
["Where did House music originate?" , "A: New York", "B: Chicago" , "C: Oregon", "D: California"],
];

//Random Poster Text Array
randomString = 
[
	"Groove is in the Heart",
	"The Moon is Mysterious",
	"Starry Nights & Moonlight",
	"Shot in the Dark",
	"Every Cloud has a Silver Lining",
	"Every problem obfuscates a solution",
	"Deja vu?",
	"a place that exists only in moonlight",
	"a wave machine hidden inside the sea",
	"What looms ahead?",
	"Closet full of skeletons",
	"Don't Forget!",
	"Chase the White Rabbit",
	"You are made of Stardust",
	"Follow your Heart",
	"When will it be enough?",
	"a leopard cannot change its spots",
	"Curiosity fuels the Cat",
	"Rock the Boat",
	"great oaks grow from little acorns",
	"absence makes the heart grow fonder",
	"feed the fire",
	"after the storm, the flowers bloom",
	"don't lose that spark",
	"nothing lasts forever",
	"how long is forever?",
	"Trust your senses",
	"Awaken your Hidden Power",
	"drowning in moonlight"
];

}

