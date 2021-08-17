var ship;
var sea;

function preload(){
ship=createSprites(200,200,30,50);
ship.loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}
sea=loadImage("sea.png");

function setup(){
  createCanvas(400,400);
spriteName.addImage(sea);
}
if(sea.x<0){
sea.x=sea.width/2;
}
sea.velocityX=0.5;
function draw() {
  background("blue");
 drawSprites();

}