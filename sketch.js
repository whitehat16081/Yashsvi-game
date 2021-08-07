var bg
var score1=0
var score2=0
var gameState=0;
var player1name,player2name;
function preload() {
    bgImage=loadImage("images/track1.jpg");
   girl1Image=loadImage("images/g1.png");
   girl2Image=loadImage("images/g2.png");
   seatImage=loadImage("images/seats.jpg");
   rock1image=loadImage("images/stone1.png");
   rock2image=loadImage("images/stone2.png");
   rock3image=loadImage("images/stone3.png")
   toffee1Image=loadImage("images/toffee1.png")
   toffee2Image=loadImage("images/toffee2.png")
   toffee3Image=loadImage("images/toffee3.png")
}

function setup(){
    createCanvas(1370,620);
    bg=createSprite(370,210);
    bg.addImage(seatImage);
    bg.velocityX=-3;
    bg.scale=1.4;

    ground=createSprite(880,480,2000,280);
  ground.shapeColor="brown"; 
  //ground.velocityX=-3;
  line1=createSprite(880,480,2000,20);
  line1.shapeColor="white";

  invisibleground1=createSprite(880,410,2000,20);
  invisibleground1.visible=false;
  invisibleground2=createSprite(880,570,2000,20);
  invisibleground2.visible=false;
  girl1=createSprite(80,310,20,20);
  girl1.debug=false;
  girl1.setCollider("rectangle",0,0,100,120);
  girl1.addImage(girl1Image);
  girl1.scale=1.2;
  girl2=createSprite(150,450,20,20);
  girl2.addImage(girl2Image);
  girl2.debug=false;
  girl2.setCollider("rectangle",0,0,100,150);
obstacleGroup=new Group();
toffeeGroup=new Group();
form1=new Form1();
form2=new Form2();
}

function draw() {
    background("grey");
    if(gameState===0){
        console.log(gameState)
        //form2.hide();
      form1.display();
      
      }
      if(gameState===1){
        console.log(gameState)
        form2.display();
      }
      
      
      if (gameState === 2){
  if(bg.x<80){
      bg.x=500;
  }
  if(keyDown("w")){
      girl1.velocityY=-10;
  }
  girl1.velocityY=girl1.velocityY+0.8;
  if(keyDown("p")){
    girl2.velocityY=-10;
}
girl2.velocityY=girl2.velocityY+0.8;
girl1.collide(invisibleground1);
girl2.collide(invisibleground2);

    drawSprites();
    spawnObstacles();
    spawnToffee();
    if(girl1.isTouching(obstacleGroup)||girl2.isTouching(obstacleGroup)){
        obstacleGroup.setVelocityXEach(0);
        bg.velocityX=0;
        textSize(60);
        fill("white");
        textFont("Comic Sans MS");
        text("Game Over!",500,310);
        
        
    }
textSize(20);
fill("white");
textFont("Comic Sans MS");
text(player1name +"'s Score: "+ score1, 100,50);
text(player2name +"'s Score: "+ score2, 900,50);
}
}

function spawnObstacles(){

    if(frameCount%160===0){
        obstacle=createSprite(1400,400,100,100);
        obstacle.debug=true;
        obstacle.velocityX=-6;
        obstacle.scale=0.2;
        obstacle.y=Math.round(random(400,500));
        var rand=Math.round(random(1,3));
        switch(rand){
             case 1: obstacle.addImage(rock1image);
             break;
             case 2: obstacle.addImage(rock2image);
             break;
             case 3: obstacle.addImage(rock3image);
             break;
             default: break;

        }
        obstacleGroup.add(obstacle);
    }
}
function spawnToffee(){

    if(frameCount%100===0){
        toffee=createSprite(1400,400,100,100);
        toffee.debug=true;
        toffee.velocityX=-6;
        toffee.scale=0.3;
        toffee.y=Math.round(random(400,500));
        var rand=Math.round(random(1,3));
        switch(rand){
             case 1: toffee.addImage(toffee1Image);
             break;
             case 2: toffee.addImage(toffee2Image);
             break;
             case 3: toffee.addImage(toffee3Image);
             break;
             default: break;

        }
        toffeeGroup.add(toffee);
    }
}


