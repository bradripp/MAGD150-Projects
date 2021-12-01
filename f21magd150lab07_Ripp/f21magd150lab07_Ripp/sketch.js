//Creating the array
let leaf = [];

function setup() {
  createCanvas(400, 400);
//Creating the leaves in the following code.
  for (let i = 0; i < 25; i++) {
    leaf.push(new Leaves());
  }
}

function draw() {
  background(100, 100, 100);
  for (let i = 0; i < leaf.length; i++) {
    leaf[i].move();
    leaf[i].display();
    //the tree the leaves are coming from.
       fill('brown');
  rect(165,200,75,200);
  fill('green');
  ellipse(205,175,200,200);
  }
}

class Leaves {
  //The leaves are blowing in the wind at random spots.
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = 2;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, 20, 40);
  }
}