var bullet,car2,car3
var wall1,wall2,wall3;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1200,400);

  bullet =  createSprite(30, 100, 80, 30);
 bullet2 = createSprite(30,200,80,30);
  
 bullet3 = createSprite(30,300,50,20)
  thickness=random(22,83)
 
 wall1 =  createSprite(1100, 100, 30, 80);
 wall2 =  createSprite(1100, 200, 30, 80);
 wall3 =  createSprite(1100, 300, 30, 80);
 speed=random(223,320)
 weight=random(30,50)
}

function draw() {
  background("black");  
 bullet.velocityX=speed
 bullet2.velocityX=speed
 bullet3.velocityX=speed
 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
 if(hasColided(bullet,wall1)) {
   bullet.velocityX=0
   if(damage<10) {
     wall1.shapeColor="green"
   }
   if(damage>10) {
     wall1.shapeColor="red"
   }
 }

 if(hasColided(bullet2,wall2)) {
  bullet2.velocityX=0
  if(damage<10) {
    wall2.shapeColor="green"
  }
  if(damage>10) {
    wall2.shapeColor="red"
  }
}

if(hasColided(bullet3,wall3)) {
  bullet3.velocityX=0
  if(damage<10) {
    wall3.shapeColor="green"
  }
  if(damage>10) {
    wall3.shapeColor="red"
  }
}


   drawSprites()

 }

 
  
 

function hasColided(Ibullet,Iwall) {
  bulletre=Ibullet.x+Ibullet.width
  walledge=Iwall.x
  if(bulletre>=walledge) {
    return true;
  }
  return false;
}