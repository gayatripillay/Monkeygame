var monkey , monkeyrunning;
var banana ,bananaimage;
var  obstacle, obstacleimage;
var foodgroup, obstaclegroup;
var  spawnObstacles,spawnFood;
var score

function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimage = loadImage("banana.png");
  obstaceimage = loadImage("obstacle.png");
 
}



function setup() {

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkeyrunning);
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  //console.log(ground.x)

  foodgroup = new Group();
  obstaclesgroup = new Group();

   var survivalTime=0;
  
 }


function draw() {
  
  background("white");
   
  if(ground.x<0) {
   ground.x=ground.width/2;
   }
   
  if(keyDown("space") ) {
     monkey.velocityY = -12;
    }
  
  
  
  spawnFood();
  spawnObstacles();
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  if(obstaclesgroup.isTouching(monkey))
  { ground.velocityX = 0;
   monkey.velocityY = 0;
   obstaclesgroup.setVelocityXEach(0);
   foodgroup.setVelocityXEach(0);
   obstaclesgroup.setLifetimeEach(-1);
   foodgroup.setLifetimeEach(-1);
  } stroke("black"); textSize(20);
  fill("black"); 
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
} function spawnFood()
{ 
  //write code here to spawn the Food
  
  if (frameCount % 80 === 0)
  { banana = createSprite(600,250,40,10);
   banana.y = random(120,200); banana.velocityX = -5;
   //assign lifetime to the variable banana.lifetime = 300;
   monkey.depth = banana.depth + 1;
   //add image of banana
   banana.addImage(bananaimage);
   banana.scale=0.05;
   //add each banana to the group FoodGroup.add(banana);
  } } 
function spawnObstacles() 
{ if(frameCount % 300 === 0) 
{ obstacle = createSprite(800,320,10,40);
 obstacle.velocityX = -6;
 //add image to the obstacle 
 obstacle.addImage(obstaceimage);
 obstacle.scale=0.15;
 //lifetime to the obstacle 
 obstacle.lifetime = 300;
 //add each obstacle to the group 
 obstaclesgroup.add(obstacle); } }