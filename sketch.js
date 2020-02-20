
var r ;
var g ;
var b;
var ball; 

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
createCanvas(600,600);
ball = createSprite(200,200,30,30);
ball.shapeColor = "pink";

r = 0;
g = 50;
b = 200;
  createCanvas(1200,400);
}


function draw(){
  background = (0,0,0);
ball.x = World.mouseX;
ball.y = World.mouseY;

if(ball.x >= 150) {
  background = r;
}

if(ball.x >= 300) {
  background = g;
}

if(ball.x >= 400) {
  background = b;
}



  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();
}