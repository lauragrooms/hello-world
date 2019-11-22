var x = 75;
var y = 75;
var diameter = 75;
var speed = 3;
var speedY = 5;
var squareX = 150;
var squareY = 150;
var mouseX = 0;
var mouseY = 0;
var circleX = 40;
var circleY = 35;
var x2 = 40
var y2 = 40
var diameter2 = 50
var speed2 = 7;
var speedY2 = 9;

function setup() 
{
  createCanvas(800, 600);
}

function draw() 
{
  background(0);
  noStroke();
  myCircle();
  moveCircle();
  mySquare();
  myKeys();
  myElipse();
  myRect();
  myText();
  myCircle2();
  moveCircle2();
}
  
function myText()
{
  if(squareX>740&&squareX<800&&squareY>560&&squareY<600)
  {
    console.log("am i here...");
    text("YOU WIN!!!!!",width/2,height/2);
  }
}
  
function myKeys()
  {
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
}

function myRect()
{
  fill(160, 18, 240);
  rect(690,510,100,80);
}

function myElipse()
{
  ellipse(mouseX, mouseY, 15, 50);
}

function myCircle()
{
  fill(24, 100, 230);
  circle(x, y, diameter);
}

function myCircle2()
{
  fill(124, 100, 230);
  circle(x2, y2, diameter2);
}

function mySquare()
{
  fill(224, 10, 23);
  square(squareX, squareY, 50);
}

function moveCircle()
{
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
}

function moveCircle2()
{
  if(x2 >= width-diameter2/2 || x2 <= diameter2/2)
  {
    speed2 *= -1;
  }
  else if(y2 >= height-diameter2/2 || y2 <= diameter2/2)
  {
    speedY2 *=-1;
  }
 
  x2+= speed2;
  y2+= speedY2;
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