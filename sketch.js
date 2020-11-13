var PLAY = 1;
var END = 0;
var gameState = PLAY;
var climberImage,climber;
var door,doorImage;
var ghostImage,ghoast;
var towerImage,tower;
var spookySound;
var doorGroup,climberGroup,invisibleBlockGroup;
var invisibleBlock
var gameOver,gameOverImage

function preload() {
climberImage = loadImage("climber.png")  
doorImage = loadImage("door.png")
ghostImage = loadImage("ghost-standing.png")
towerImage = loadImage("tower.png")
gameOverImage = loadImage("game over.png")  

spookySound = loadSound("spooky.wav")  
}

function setup() {
createCanvas(600,600)
  
tower = createSprite(300,300)  
tower.addImage(towerImage)  
tower.velocityY = 2  

ghost = createSprite(200,200,50,50)
ghost.addImage(ghostImage)  
ghost.scale = 0.3;
  


doorGroup = new Group()  
climberGroup = new Group()    
}

function draw() { 
  
 
  if(gameState === PLAY){
     
     if (tower.y>400)  {
tower.y=300    
    }
  
if (keyDown("left_arrow")) {
ghost.x = ghost.x-3    
    }
if (keyDown("right_arrow")) {
ghost.x = ghost.x+3    
    } 
if (keyDown("space")) {
ghost.velocityY = -5  
}  
ghost.velocityY = ghost.velocityY +0.8
 if (climberGroup.isTouching(ghost)) {
  ghost.velocityY = 0         
      }
}
  
  if (doorGroup.isTouching(ghost)) {
  ghost.lifeTime = 0 
    tower.velocityY = 0   
  gameOver = createSprite(300,300)
    gameOver.scale = 0.3
gameOver.addImage(gameOverImage)      
     }
  if(doorGroup.isTouching(ghost)){
    gameState = END;
  }
  if(gameState === END){ 
  tower.velocityY = 0;
    ghost.velocityY = 0;
  ghost.velocityX = 0;
    door.velocityY = 0;
  climber.velocityY = 0;

  }
  
  
spawnDoors();  
  
drawSprites()  
}

function spawnDoors() {
if (frameCount %240 === 0) {
door = createSprite(200,-50)
door.addImage(doorImage);  
door.velocityY = 2;
door.lifetime = 600;  
door.x = Math.round(random(120,400))    
doorGroup.add(door)
  
climber = createSprite(200,10)
climber.addImage(climberImage);
climber.velocityY = 2;
climber.lifetime = 600;  
climber.x = door.x  
 climberGroup.add(climber) 
  
ghost.depth = door.depth 
  ghost.depth = ghost.depth+1
}  
  
}


