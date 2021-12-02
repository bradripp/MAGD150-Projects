var x = 70
var y = 350
var w = 60
var h = 30
var p = 300
var o = 367
var i = 35
var u = 35
var distance 
var b = 200
  rx=0;
  ry=0;
  rxSpeed=2;
  rySpeed=2;

function setup(){
 createCanvas(500,500);
 background(255);
 stroke(0);
 noFill();
}

function draw(){
 background(255);
  
    rect(50,100,300,300)
  fill(255)
  rect(100,125,200,200)
  line(150,100,50,10)
   line(200,100,250,10)
  fill(b, 100, 80)
  {rect(x,y,w,h);
  distance =dist(mouseX, mouseY, 100, 100)
  if(distance<0){
    b=0}
 fill(255);
 if(mouseIsPressed){
  if(mouseX>x && mouseX <x+w && mouseY>y && mouseY <y+h){
   print("Press the power button with the mouse to turn the screen off");
 
  }
 }{
   
    fill(b, 20, 80)
  {ellipse(p,o,i,u)
   distance =dist(mouseX, mouseY, 330, 390)
  if(distance<50){
    b=0
     }
     fill(255);
 if(mouseIsPressed){
  if(mouseX>p && mouseX <p+i && mouseY>o && mouseY <o+u){
   print('change the color of the square by pressing the circle')
    fill(0);
  }
  }
  }
  {
  rect (rx+100,ry+125,50,50);
     }
    fill(225)
  rx+= rxSpeed;
  ry+= rySpeed;
  
  if (rx<=0 || rx+50 >= 200){
    rxSpeed *= -1;
  }
  
  if (ry<=0 || ry+50 >= 200){
    rySpeed *=-1;}
  }
  {
  distance =dist(mouseX, mouseY, 300, 300)
  if(distance<0){
    b=0
     }
  }
   
let s = 'Square'
let t = 'Power'
text(t,82,360,15,15)
text(s,280,360, 15,15)
  }
}