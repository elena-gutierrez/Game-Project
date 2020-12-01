//create a variable called b to hold one ball

function setup() {
  createCanvas(800, 400);


}


function draw(){
	background(220);


}

class Ball {
  constructor(x,y,color){
   this.x = 10;
       this.y = 10;
          this.color = 'blue';
          this.outline= 'orange';
   }
   drawBall(){
       	   stroke(0);
       	   fill(this.color);
            ellipse(this.x,this.y,10,10);
   	}
   moveBall(){
   	   this.x = this.x+2;
   	   this.y = this.y+.5;
   	}
}
