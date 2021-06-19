var canvas, backgroundImage
var form
var distance = 0;
var gameState = "start" ;
var spaceBackground 
var spaceBackgroundImage
var spaceship
var asteroid
function preload(){
  spaceBackgroundImage = loadAnimation("images/background1.png","images/background2.png","images/background3.png","images/background4.png")
  healthbar0image = loadImage("images/0healthBar.png")
  healthbar1image = loadImage("images/1healthBar.png")
  healthbar2image = loadImage("images/2healthBars.png")
  healthbar3image = loadImage("images/3healthBars.png")





}

function setup(){
  canvas = createCanvas(windowWidth , windowHeight);
asteroidGroup = new Group()
   form = new Form();
 spaceBackground = createSprite(windowWidth/2,windowHeight/2);
 spaceBackground.addAnimation("background1image",spaceBackgroundImage);
 spaceBackground.visible=false;
 spaceBackground.scale=3;

 spaceship=createSprite(windowWidth/2,windowHeight-150);
 spaceship.visible=false;

 healthbar =  createSprite(windowWidth-50,50);
 healthbar.addImage(healthbar3image);
 healthbar.visible=false;

}

 
 function draw(){
  if(gameState === "start"){
    if(mousePressedOver(form.play)){
      gameState="play"
      console.log("gameState changed to play")
    }
  }

  



if(gameState=== "play"){
  form.title.visibble=false;
  form.play.visible=false;
  spaceBackground.visible=true;
  spaceship.visible=true;
  healthbar.visible=true;


if(keyDown("right")){
 spaceship.x=spaceship.x+5;
}
if(keyDown("left")){
  spaceship.x= spaceship.x-5;
}
asteroid=new Asteroid()
asteroid.spawn();
if(spaceship.isTouching(asteroidGroup)){
  gameState="lostlife"
  console.log("collision")
}
}
drawSprites();
 }
 