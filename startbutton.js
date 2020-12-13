class startButton {
	constructor(){
		this.x = 150;
		this.y = 600;
		this.w = 500;
		this.h = 100;

		this.clicked = function(){
			if((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h)) {
		
	}

	display(){
		rect(this.x, this.y, this.w, this.h);
	}

	clicked() {
		console.log('button clicked bb');
	}


}