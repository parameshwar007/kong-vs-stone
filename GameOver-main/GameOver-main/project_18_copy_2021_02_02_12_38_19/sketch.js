var Monkey,Monkey_running
    
var ground,invisibleGround;

var bananaImage,backImage,banana;

var score=0;

var obstacleImage,obstacleGroup;

 var gameState=1;

function preload(){

Monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

backImage=loadImage("jungle.jpg");

bananaImage=loadImage("banana.png"); 
  
obstacleImage=loadImage("stone.png")  
}




function setup() {
createCanvas(400, 400);

Monkey=createSprite(50,180,20,50);
Monkey.addAnimation("running",Monkey_running)
Monkey.scale=0.5;

ground=createSprite(200,180,400,20);
ground.addImage("ground",backImage);
ground.x=ground.width/2;
ground.velocityX=-2;


invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;

obstacleGroup=createGroup();
bananaGroup=createGroup();
}
function draw() {
  background(220);
  text("score"+score,500,50);
  Monkey.collide(invisibleGround);
 
  if (gameState===1){
    score=score+Math.round(getFrameRate()/60);

    if(ground.x<0){
      ground.x=200;
    }
    if(keyDown("space")) {
        Monkey.velocityY = -10;
      }
    
      Monkey.velocityY = Monkey.velocityY + 0.8
    
      if(obstacleGroup.isTouching(Monkey)){
      gameState=2
      
      }
      
     if(bananaGroup.isTouching(Monkey)){
      
      switch(score){
     
     case 10:Monkey.scale=0.12;
          break;
      
     case 20:Monkey.scale=0.14;
          break;
      
     case 30:Monkey.scale=0.16
          break;
      
     case 40:Monkey.scale=0.18;
          break;
     default:break; 
     }
    } 
      
         
    if(bananaGroup.isTouching(Monkey)){  
      bananaGroup.destroyEach(); 
       }  
      
    spawnbananas();
    spawnObstacles(); 
      drawSprites();
    
  }
  else if(gameState===2){
    text("GAMEOVER",250,250)
  }
  }

function spawnbananas() {
  if (frameCount % 60 === 0) {
    banana.y =Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.3;
    banana.velocityX = -3;
    
     
    banana.lifetime =200;
    
  
    banana.depth = Monkey.depth;
    Monkey.depth = Monkey.depth + 1;
    bananaGroup.add(banana);
    
  }
  
}

function spawnObstacles() {
  if(frameCount % 80 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    obstacle.scale=0.6;
    obstacle.addImage(obstacleImage)
    var rand =Math.round(random(1,6));
    obstacleGroup.add(obstacle);
    }
      
    }













