var x = 200;
var y = 100;
var movement = 8;
var size = 28;
var count = 0;
var amount = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(204, 204, 255);
  textSize(size);
  text('Myself', 10, 30);
  textSize(20);
  text('Laura E Grooms', 225, 375);
  circle(x, 100, 60);
  triangle(100, 250, 200, 130, 280, 250);
  rect(x, y, 20, 60);
  rect(225, 250, 20, 60);
  line(245, 200, 285, 100);
  line(145, 200, 85, 90);
  circle(190, y, 10);
  circle(210, y, 10);
  ellipse(x, 115, 30, 10);
  if(x >= 400)
    {
       movement*=-1;
    }
  if(x <= 0)
    {
        movement *= -1;
    }
     x += movement;
  if(y >= 400)
    {
       movement*=-1;
    }
  if(y <= 0)
    {
        movement *= -1;
    }
     y += movement;
  if(count >= 5)
  {
    amount *=-1;
    count = 0;
  }
  count++; 
  size += amount;  
}