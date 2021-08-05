var bg
function preload() {
    bgImage=loadImage("images/track1.jpg");
   girl1Image=loadImage("images/g1.png");
   girl2Image=loadImage("images/g2.png");
   seatImage=loadImage("images/seats.jpg");
   rock1image=loadImage("images/stone1.png");
   rock2image=loadImage("images/stone2.png");
   rock3image=loadImage("images/stone3.png")
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
  invisibleground2=createSprite(880,550,2000,20);

  girl1=createSprite(100,310,20,20);
  girl1.addImage(girl1Image);
  girl1.scale=1.2;
  girl2=createSprite(100,450,20,20);
  girl2.addImage(girl2Image);
  

}
function draw() {
    background("grey");
  if(bg.x<80){
      bg.x=500;
  }
  if(keyDown("w")){
      girl1.velocityY=-10;
  }
  girl1.velocityY=girl1.velocityY+0.8;
  if(keyDown("s")){
    girl2.velocityY=-10;
}
girl2.velocityY=girl2.velocityY+0.8;
girl1.collide(invisibleground1);
girl2.collide(invisibleground2);
    drawSprites();
    spawnObstacles();
}

function spawnObstacles(){
    if(frameCount%100===0){
        obstacle=createSprite(1400,400,100,100);
        obstacle.velocityX=-4;
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
    }
}


