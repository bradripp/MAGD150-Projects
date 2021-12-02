// The goal of this project is to mimic the scenery of a classic video game.
let angle = 0
let cloudx = 100
let cloudy= 100
function setup() {
  angleMode(DEGREES)
  createCanvas(700, 400);
}

function draw() {
  background(0,200,250);
  fill(10,200,50)
  rect(500,392,1000,100)
  Cloud(200,200)
  function Cloud(x,y) {
  fill(250)
  noStroke();
  ellipse(cloudx,cloudy,70,50);
  ellipse(cloudx+ 20,cloudy + 15,70,50);
  ellipse(cloudx + 15 ,cloudy +10,70,50)
  }
  fill(200,200,200)
  //There is a flag at the end of the course to symbolize the finish line.
  function flag (x,y,size){
  rect(x, y,10,100)
    fill(200,0,0)
  triangle(595, 250, 595, 300, 560, 300)
}
flag(600,300,300)
  function boxes (x,y,length,width){
  fill(165,142,100) 
    rect(0,0,20,20)}
  translate(150,300)
  rotate(angle)
  //There are also obstacles that are rotating on the course. The goal would be to go around those.
  rectMode(CENTER)
  boxes(100,270)
 angle = angle + 2
  translate(200,50)
  rectMode(CENTER)
   scale(1.5)
  boxes(0,0)
  //The colors chosen are to show a blue sky and bright green grass. Similar to classic video games.

}

