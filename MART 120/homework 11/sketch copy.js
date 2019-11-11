var x = 75;
var y = 75;
var diameter = 75;
var speed = 3;
var speedY = 5;
var squareX = 150;
var squareY = 150;
var mouseX = 0;
var mouseY = 0;

function setup() 
{
  createCanvas(800, 600);
}

function draw() 
{
  background(0);
  noStroke();
  fill(24, 100, 230);
  circle(x, y, diameter);

  if(x >= width-diameter/2 || x <= diameter/2)
  {
    speed *= -1;
  }
  else if(y >= height-diameter/2 || y <= diameter/2)
  {
    speedY *=-1;
  }
 
  x+= speed;
  y+= speedY;
  fill(224, 10, 23);
  square(squareX, squareY, 50);
  if(keyIsDown(LEFT_ARROW))
  {
    squareX-=10;
  }
  else if(keyIsDown(RIGHT_ARROW))
  {
    squareX+=10;
  }
  else if(keyIsDown(UP_ARROW))
  {
    squareY-=10;
  }
  else if(keyIsDown(DOWN_ARROW))
  {
    squareY+=10;
  }
  ellipse(mouseX, mouseY, 15, 50);
  
}

function keyPressed()
{
print(key, ' ', keyCode);
}

function mouseClicked()
{
  console.log("mouse clicked");
  circle(mouseX, mouseY, 100);
}

function mousePressed()
{
  console.log("mouse pressed");
  fill(0,244,20);
  circle(mouseX, mouseY, 45);
}

