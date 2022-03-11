//Global Variables

let gamestate = 0;
let template = 6;
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
//var computerFont;

var garfieldStrip;
var garfieldSelector;

var bgSelector;
var bg;

var qrCode;
var qrCode2;
var qrSelector;
var qrSelector2;

var tarot;
var tarotSelector;
var tarotQR;

let questionFinished = false;
let artStart = false;

let chosenColour = (58,137,134);





function setup() { //Runs Once at the start of the Webpage
  var canvas = createCanvas(1000, 800);
   
 
  pag = loadImage('Sprites/PAG.png');
  moon = loadImage('Sprites/moon.png');
  textFont('Syne Mono');
	 
  let p = color(199,36, 177);
  let g = color(128, 0, 255);
  let b = color(0,255, 255);
  let r = color(0,26, 255);
  let green = color(0, 181, 26);


  beginButton = new qButton(550, 40, g, 'Click to Start!');
  finalButton = new qButton(550, 20, g, 'Load Poster');
  colourButton = new qButton(260, 500, green, 'Randomise Colours');
  rgbButton = new qButton(260, 410, green, 'Submit RGB Values');

  loadArrays();

  rQuestions = uniqueRandoms(3, 0, 11 );

  for (var i = 0; i <= 2; i++) {	
  	sQuestions[i] = questionList[rQuestions[i]];
  }

  qButtons[0] = new qButton(30,600, p, 'A');
  qButtons[1] = new qButton(30,700, g, 'C');
  qButtons[2] = new qButton(500,600, b, 'B');
  qButtons[3] = new qButton(500,700, r, 'D');
  
  //template = randomInteger(1,5);

}

function mousePressed(){
	if (gamestate == 0) {
		beginButton.specialClick();
	}

	for (var i = qButtons.length - 1; i >= 0; i--) {
		qButtons[i].clicked();
		
	}

	if (qCounter == 4) {
		colourButton.colourClick();
	}

	
	if(gamestate == 2) {
		finalButton.finalClick();
	}
	
}

function draw() {
  

if (gamestate == 0) {
	// Intro
	background(0);
	gamestate0();
	
	

} else if (gamestate == 1) {
	// Questions
	background(0);
	gamestate1();


	
} else if (gamestate == 2) {
	// Draw Mode
	background(0);
	gamestate2();

} else if (gamestate == 3) {
	gamestate3();
} 

}




function gamestate0() {
	

	fill(0, 181, 26);
	textSize(20);
	textAlign(LEFT);
	text('STARTING PROGRAM...', 1, 20);
	text('FETCHING SPRITES...', 1, 50);
	text('TURNING P.A.G ON...', 1, 80);
	text('INJECTING CREATIVITY...', 1, 110);
	text('ADDING CHARM...', 1, 140);

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



	image(pag, 10, 300);
	pag.resize(300, 500);

	//rect(150, 600, 500, 100);
	beginButton.display();


}

function gamestate1(){

	image(pag, 10, 250);
	pag.resize(200, 350);

	for (var i = qButtons.length - 1; i >= 0; i--) {
		qButtons[i].display();

		//if a button has been clicked, update the buttons text
		if (questionFinished = false) {
			qCounter = 0;
			questionFinished = true;			
		}
	}

	if (qCounter == 0) {
		//question 1

		fill(0, 181, 26);
		textAlign(CENTER);
		text(sQuestions[0][0], 500, 80);

		
		text(sQuestions[0][1], 500, 200);
		text(sQuestions[0][2], 500, 300);
		text(sQuestions[0][3], 500, 400);
		text(sQuestions[0][4], 500, 500);
		

	} else if (qCounter == 1) {
		//question 2

		fill(0, 181, 26);
		textAlign(CENTER);
		text(sQuestions[1][0], 500, 80);

		fill(0, 181, 26);
		text(sQuestions[1][1], 500, 200);
		text(sQuestions[1][2], 500, 300);
		text(sQuestions[1][3], 500, 400);
		text(sQuestions[1][4], 500, 500);

	} else if (qCounter == 2) {


		fill(0, 181, 26);
		textAlign(CENTER);
		text(sQuestions[2][0], 500, 80);

		fill(0, 181, 26);
		text(sQuestions[2][1], 500, 200);
		text(sQuestions[2][2], 500, 300);
		text(sQuestions[2][3], 500, 400);
		text(sQuestions[2][4], 500, 500);

		console.log(template);
		console.log(qCounter);

	} else if (qCounter == 3) {


		console.log(template);
		console.log(qCounter);

		if (template == 1) { //Garfield Template

			fill(0, 181, 26);
			text("What is your opinion on Garfield?", 500, 80);

			text("A: I love Garfield", 500, 200);
			text("B: I Detest Garfield", 500, 300);
			text("C: He's whatever", 500, 400);
			text("D: Who's Garfield?", 500, 500);

		} else if (template == 2) {

			fill(0, 181, 26);

			text("What do you think about Tarot Cards?", 500, 80);
			textSize(35);
			text("A: Kind of Useless", 500, 200);
			text("B: They can be used to reflect", 500, 300);
			text("C: They can be fun to use", 500, 400);
			text("D: I wouldn't mess with them", 500, 500);



		} else if (template == 3) {

			fill(0, 181, 26);

			text("Do you enjoy virtual rabbit holes?", 500, 80);
			textSize(35);
			text("A: Depends on the topic", 500, 200);
			text("B: Not really", 500, 300);
			text("C: I can fall in one hours", 500, 400);
			text("D: No idea", 500, 500);


			
		} else if (template == 4) {

			fill(0, 181, 26);

			text("Are you enjoying this quiz?", 500, 80);
			textSize(35);
			text("A: Of course!", 500, 200);
			text("B: Absolutely", 500, 300);
			text("C: I'm having a great time", 500, 400);
			text("D: P.A.G IS THE BEST!!!!!", 500, 500);


			
		} else if (template == 5) {

			fill(0, 181, 26);

			text("Pick a music genre!", 500, 80);
			textSize(35);
			text("A: House", 500, 200);
			text("B: Disco", 500, 300);
			text("C: 80s Music", 500, 400);
			text("D: Something different", 500, 500);
			
		} else if (template == 6) {

			fill(0, 181, 26);

			text("What do you think of the Moon?", 500, 80);
			textSize(35);
			text("A: Not Much", 500, 200);
			text("B: It's Beautiful", 500, 300);
			text("C: The stars are better", 500, 400);
			text("D: It seems lonely", 500, 500);
		}



	} else if (qCounter == 4) {

		fill(0, 181, 26);
		text("Alright, last one!", 500, 80);
		textSize(25);
		text("Click on the button thats colour appeals to you the most", 500, 130);
		 
		text("If you don't like these colours, click this new button to change them!", 500, 170);
		text("I can't guarantee that they will be pretty ones...", 500, 210);

		
		/*
		input1 = createInput();
        input1.position(390, 260);
        text("R", 380, 279); 

        input2 = createInput();
        input2.position(390, 310);
       	text("G", 380, 329);

        input3 = createInput();
        input3.position(390, 360);
        text("B", 380, 379); 
        */

        colourButton.display();
		rgbButton.display(); 
		

		if (template == 3 && choice == 'B') {

			template = 4;

		}


	} 


}


function gamestate2(){

	//input3.hide;
	pag.resize(300, 500);
	image(pag, 10, 300);
	finalButton.colour = chosenColour;
	finalButton.display();
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
	text("P.S you might have to zoom out your browser to see it all, sorry!!", 320, 730);


} 

function gamestate3() {
	

	if (loadFileDone == false) {
		loadFiles();
		loadFileDone = true;
		console.log("filesloaded");
		x = randomInteger(0,randomString.length -1);
		
		
	}

	var textRepeatSize;
	var textDownSize;
	
	
	resizeCanvas(2480, 3508);
	background('white');


	if (template == 1) { //Garfield Template

			garfieldStrip.resize(2100, 640); // loads and places the selected garfield strip
			image(garfieldStrip, 200, 700);

			spotifyCode.resize(2480, 600); // loads and places the selected spotify code
			image(spotifyCode, 0,0);

			qrCode.resize(705, 705); // loads and places the selected 
			image(qrCode, 895, 670);

			textRepeatSize = 120;
			textDownSize = 1550;

			

			

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

			

			
			

		} else if (template == 2) {

			textDownSize = 1700;
			textRepeatSize = 110;
			//chosenColour = color(58,137, 134);

			
			rect(0,0, 2480, 3508);

			fill('white');
			rect(50, 50, 2350, 3400);

			fill(chosenColour);
			rect(700, 0, 1000, 1500);


			tarot.resize(800, 1200); // loads and places the selected tarot card
			image(tarot, 800, 50);

			qrCode.resize(500, 500); // loads and places the selected QR Code
			image(qrCode, 125, 100);

			tarotQR.resize(500, 500); // loads and places the selected tarot explanation QR code
			image(tarotQR, 1800,100);

			spotifyCode.resize(900, 200); // loads and places the selected
			image(spotifyCode, 750, 1260);

			for (var i = 8; i >= 0; i--) {
				fill(chosenColour);
				textAlign(CENTER);
				textSize(textRepeatSize);
				text(randomString[x], 1235, textDownSize);
				textDownSize = textDownSize + 200;
			}

			textDownSize = 1800;



		} else if (template == 3) {


			bg.resize(2500, 3528); //Scales the selected background
			image(bg, 0,0);

			qrCode.resize(800,800); // loads and places the selected QR code
			image(qrCode, 850, 1650);

			fill(chosenColour); // creates rectangle from chosen colour
			rect(550, 120,  1400, 400);

			spotifyCode.resize(1300, 300); // loads and places the selected spotify code
			image(spotifyCode, 600, 165);	



			
		} else if (template == 4) {



			//draws circles in chosen colour
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

			tint(290, 0);

			
		} else if (template == 5) {

			
			image(bg, 0,0); //Places Background

			tint(chosenColour);
			spotifyCode.resize(1700, 400);
			image(spotifyCode, 780, 1790);

			tint(290,300);

			if (choice == 'D') {
				qrCode.resize(790, 830);
				image(qrCode, 1340, 400);
			}

} else if (template== 6) {

	textRepeatSize = 120;
	textDownSize = 1450;

	image(moon, 675,100);
	textAlign(CENTER);
	textSize(115);
	fill(chosenColour);
	
	spotifyCode.resize(1400, 350);
	image(spotifyCode, 550, 3050);

	qrCode.resize(450,450);
	image(qrCode, 100, 450);

	qrCode2.resize(450,450);
	image(qrCode2, 1950, 450 );

	
	text(randomString[x], 1240 , textDownSize);

	
	text(randomString[x], 1240 , textDownSize + 200);

	
	text(randomString[x], 1240 , textDownSize + 400);


	text(randomString[x], 1240 , textDownSize + 600);

	text(randomString[x], 1240 , textDownSize + 800);


	text(randomString[x], 1240 , textDownSize + 1000);

	text(randomString[x], 1240 , textDownSize + 1200);

	
	text(randomString[x], 1240 , textDownSize + 1400);

	
	tint(chosenColour);
	qrCode.resize(450,450);
	image(qrCode, 100, 450);

	qrCode2.resize(450,450);
	image(qrCode2, 1950, 450 );

	



}


function loadFiles() {

	if (template == 1) { //Garfield Template

		garfieldSelector = 'Sprites/garfield (' + randomInteger(1,11) + ').jpg';

		garfieldStrip = loadImage(garfieldSelector);
		

		spotifySelector = 'Sprites/spotify (' + randomInteger(1,85) + ').jpeg';
		spotifyCode = loadImage(spotifySelector);

		//qrSelector = 'Sprites/qrcode (' + randomInteger(1,28) + ').png';
		qrCode = loadImage('Sprites/garfieldQR.png');

		} else if (template == 2) {

			var c = randomInteger(1,10);

			tarotSelector = 'Sprites/tarot (' + c + ').png';
			tarot = loadImage(tarotSelector);

			spotifySelector = 'Sprites/spotify (' + randomInteger(1,85) + ').jpeg';
			spotifyCode = loadImage(spotifySelector);


			qrSelector = 'Sprites/qr-code (' + c + ').png';
			tarotQR = loadImage(qrSelector);

			qrSelector = 'Sprites/qrcode (' + randomInteger(1,28) + ').png';
			qrCode = loadImage(qrSelector);

		} else if (template == 3) {

			spotifySelector = 'Sprites/spotify (' + randomInteger(1,85) + ').jpeg';
			spotifyCode = loadImage(spotifySelector);

			qrSelector = 'Sprites/qrcode (' + randomInteger(1,28) + ').png';
			qrCode = loadImage(qrSelector);

			bgSelector = 'Sprites/spiral (' + randomInteger(1,8) + ').jpg';
			bg = loadImage(bgSelector);


			
		} else if (template == 4) {

			spotifySelector = 'Sprites/spotify (' + randomInteger(1,85) + ').jpeg';
			spotifyCode = loadImage(spotifySelector);

			qrSelector = 'Sprites/qrcode (' + randomInteger(1,28) + ').png';
			qrCode = loadImage(qrSelector);

			bgSelector	= 'Sprites/paperTexture.jpg';
			bg = loadImage(bgSelector);


			
		} else if (template == 5) {

			if(choice == 'A') {
				bgSelector = 'Sprites/house.jpg';
				bg = loadImage(bgSelector);

				spotifySelector = 'Sprites/houseSong.jpeg';
				spotifyCode = loadImage(spotifySelector);

			} else if(choice == 'B') {
				bgSelector = 'Sprites/disco.jpg';
				bg = loadImage(bgSelector);

				spotifySelector = 'Sprites/discoSong.jpeg';
				spotifyCode = loadImage(spotifySelector);

			} else if(choice == 'C') {
				bgSelector = 'Sprites/80.jpg';
				bg = loadImage(bgSelector);

				spotifySelector = 'Sprites/80song.jpeg';
				spotifyCode = loadImage(spotifySelector);

			} else if(choice == 'D') {
				bgSelector = 'Sprites/different.jpg';
				bg = loadImage(bgSelector);

				spotifySelector = 'Sprites/differentSong.jpeg';
				spotifyCode = loadImage(spotifySelector);

				qrSelector = 'Sprites/differentQR.png';
				qrCode = loadImage(qrSelector);

			}
		} else if (template == 6) { // Moon Template File Loading

			spotifySelector = 'Sprites/moonSong.jpeg';
			spotifyCode = loadImage(spotifySelector);

			qrSelector = 'Sprites/qrcode (' + randomInteger(1,28) + ').png';
			qrCode = loadImage(qrSelector);

			qrSelector2 = 'Sprites/qrcode (' + randomInteger(1,28) + ').png';
			qrCode2 = loadImage(qrSelector2);

		}
	}

}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function uniqueRandoms(qty, min, max){
  var rnd, arr=[];
  do { do { rnd=Math.floor(Math.random()*max)+min }
      while(arr.includes(rnd))
      arr.push(rnd);
  } while(arr.length<qty)
  return arr;
}

function loadArrays(){

questionList = 
[
["How was your day?", "A: It's been great!","B: Could be better", "C: Could be worse", "D: Not very good"],
["Are you a Dog or a Cat person?", "A: Dogs reign supreme", "B: Cats reign supreme", "C: They both suck", "D: It's a tie"],
["What is your favourite season?", "A: Summer", "B: Winter", "C: Autumn" , "D: Spring"],
["Do you enjoy engaging with art?", "A: Not really", "B: Of Course!" , "C: Depends on the Art" , "D: Art is stupid"],
["What do you think about house music?",  "A: It slaps", "B: It's Okay","C: I hate it", "D: Depends on my mood"],
["Do you believe in Horoscopes?",  "A: Not at all", "B: Somewhat","C: Quite Strongly", "D: I find them entertaining"],
["How would you describe yourself?",  "A: Smart", "B: Charismatic","C: Creative", "D: Rebellious "],
["Is your glass half empty or half full?",  "A: half empty", "B: half full","C: my cup runneth over", "D: my cup needs a refill"],
["What was more entertaining as a child?" , "A: Board Games", "B: Sports" , "C: Video Games", "D: Outdoor Adventures"],
["Do you enjoy horror movies?" , "A: Not really", "B: All the time" , "C: Rarely", "D: Maybe at Halloween"],
["Do you like the moon?" , "A: It's pretty", "B: I prefer the sun" , "C: Not really", "D: I love the moon"],
["Where did House music originate?" , "A: New York", "B: Chicago" , "C: Oregon", "D: California"],
["Do you feel fufilled?", "A: I'd say so", "B: One day I will" , "C: Not yet", "D: I'm not sure"],
["What kind of music do you enjoy?", "A: Pop Music", "B: Electronic Music", "C: Classical Music", "D: Something else"],
["Do you consider yourself an Artist?", "A: I do", "B: I don't" , "C: I'm not sure" , "D: I would like to"],
["Are you a good listener?", "A: Yes" ,"B: No" , "C: I don't know" , "D: I try my best"],
["Are you afraid of dying?", "A: Yes", "B: No" , " "]
];

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
	"drowning in moonlight",
	"trust your instincts",
	"isn't the moon beautiful?",
	"even the stars have scars",
	"how would it feel to hold a star?",
	"00111100 00110011",
	""
];

}

