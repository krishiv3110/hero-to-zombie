var bg;
var ground1,ground2,ground3;
var ladder1,ladder2,ladder1img,ladder2img;
var box1,box2,box3,box4,box5,box6,box_img;
var hero,heroimg,heroForward;
var zombie1,zombie2;
var zombiemove,zombiemove_2;

function preload(){
 bg=loadImage("background2.png");
 ladder1img=loadImage("ladder.png");
 ladder2img=loadImage("ladder.png");
 heroimg=loadAnimation("hero_House/t_hero_standing.png");
 heroForward= loadAnimation("hero_House/hero1.png","hero_House/hero2.png","hero_House/hero3.png");
 zombiemove= loadAnimation("zombie_House/zo_Images/zo1.png","zombie_House/zo_Images/zo2.png","zombie_House/zo_Images/zo3.png","zombie_House/zo_Images/zo4.png","zombie_House/zo_Images/zo5.png","zombie_House/zo_Images/zo6.png","zombie_House/zo_Images/zo7.png","zombie_House/zo_Images/zo8.png");
 zombiemove_2=loadAnimation("zombie_House/r_zo_Images/r_zo1.png","zombie_House/r_zo_Images/r_zo2.png","zombie_House/r_zo_Images/r_zo3.png","zombie_House/r_zo_Images/r_zo4.png","zombie_House/r_zo_Images/r_zo5.png","zombie_House/r_zo_Images/r_zo6.png","zombie_House/r_zo_Images/r_zo7.png","zombie_House/r_zo_Images/r_zo8.png");
 box_img=loadImage("box.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

    ground1=createSprite(windowWidth/2,windowHeight-20,2000,15);
    ground1.shapeColor="black";
    ground2=createSprite(windowWidth/2,windowHeight-320,2000,15);
    ground2.shapeColor="black";
    ground3=createSprite(windowWidth/2,windowHeight-620,2000,15);
    ground3.shapeColor="black";

    ladder1=createSprite(windowWidth-50,windowHeight-170,10,25);
    ladder1.addImage("ladder1",ladder1img);
    ladder1.scale=0.7;
    ladder2=createSprite(windowWidth/10-140,windowHeight/2-22,10,25);
    ladder2.addImage("ladder2",ladder2img);
    ladder2.scale=0.7;

    hero=createSprite(windowWidth/10-120,windowHeight-110);
    hero.addAnimation("hero",heroimg);
    hero.scale=1;

    zombie1=createSprite(windowWidth-350,windowHeight/2+42,100,200);
    zombie1.addAnimation("zombie1", zombiemove);
    zombie1.velocityX=-4;

    zombie2=createSprite(windowWidth/2,windowHeight/2+42,100,200);
    zombie2.addAnimation("zombie2", zombiemove);
    zombie2.velocityX=-4;

    box1=createSprite(windowWidth/9,windowHeight/2+80,10,25);
    box1.addImage("box1",box_img);
    box1.scale = 0.07;

    box2=createSprite(windowWidth-230,windowHeight/2+80,10,25);
    box2.addImage("box2",box_img);
    box2.scale = 0.07;
}

function draw() {
 background(bg); 

  
console.log(windowHeight/3);



/// if(keyIsDown(RIGHT_ARROW))
/// if(keyIsPressed === true)

if(keyIsPressed === true){
  hero.x = hero.x + 5;
  hero.addAnimation("hero1",heroForward)
  hero.changeAnimation("hero1");
 


}
// else{
// hero.addImage("hero",heroimg);
// }


if(zombie1.isTouching(box1)){
  zombie1.velocityX=4;
  zombie1.addAnimation("zombie1", zombiemove_2);
}else if(zombie1.isTouching(box2)){
  zombie1.addAnimation("zombie1", zombiemove);
  zombie1.velocityX=-4;
}

if(zombie2.isTouching(box1)){
  zombie2.velocityX=4;
  zombie2.addAnimation("zombie2", zombiemove_2);
}else if(zombie2.isTouching(box2)){
  zombie2.addAnimation("zombie2", zombiemove);
  zombie2.velocityX=-4;
}

  drawSprites();
}







