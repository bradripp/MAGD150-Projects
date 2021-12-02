function preload(){
//The preload text text and font used in the poster.
	gothic = loadFont("LetterGothicStd.otf");
  bold = loadFont("20db.otf")
  july = loadStrings('filename.txt');
}
function setup() {
 let c = createCanvas(600, 900);
  //The two images used in the poster.
  img = loadImage('1-2-spider-man-download-png.png'); // Load the image
  dock = loadImage('pngegg.png')
  img.filter(GRAY)
}

function draw() {
   background(200,0,0)
  //The filters that are used on the images.
   dock.filter(POSTERIZE)
    tint(0, 153, 204, 126)
  image(img, 100, 100, img.width / 4, img.height / 4);
  image(dock, 50,400, dock.width / 2, dock.height /2);
    textSize(50);
  textAlign(CENTER)
  
  textFont(gothic); 
  //The text used in the poster.

  text("WHO WILL TAKE ON SPIDER-MAN?", 0,0,width, height);
  textFont(bold); 
  text(july,0,800,width, height);
  saveCanvas('myCanvas', 'pdf');
}