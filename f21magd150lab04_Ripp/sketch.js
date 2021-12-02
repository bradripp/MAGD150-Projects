function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  stroke(165, 120, 100);
  strokeWeight(20)
  if (mouseX > 100 && mouseX < 400) { fill(255,255,153);
          }
  ellipse(250,250,350,350)
  noStroke()
   if (keyIsPressed === true) {
    fill(200,0,0);
  } else {
    fill(255);
  }
  let x = 150;
  while (x<400) {
    ellipse(x, 150, 25, 25);
    ellipse(x,200,25,25)
    ellipse(x,250,25,25)
    ellipse(x,300,25,25)
    ellipse(x,350,25,25)
    x=x+50
    print('move your mouse into the center of the circle and press any key for the pizza and pepperoni to appear')
     ellipse(mouseX, 300, 25, 25);
  }
}