var bg,form,system,code,security,changeCave;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  changeCave = loadImage("aladdin_cave2.jpg")
}

function setup() {
  createCanvas(1500,600);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background


  if(score === 3) {
    clear()
    background(changeCave)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
  fill("red")
  //text(mouseX + "," +mouseY,mouseX,mouseY);

}