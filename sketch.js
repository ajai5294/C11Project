var pathImg;
var path;
var boyImg;
var boysprite;
var rightboundary;
var leftboundary;
function preload(){
  //pre-load images
 pathImg = loadImage("path.png")
boyImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4;
  path.scale = 1.2;
boysprite = createSprite (180,314,30,30)
boysprite.scale = 0.08
boysprite.addAnimation("boy Running",boyImg)
rightboundary = createSprite(410,0,100,800)
rightboundary.visible = false
leftboundary = createSprite(10,0,100,800)
leftboundary.visible = false
}

function draw() {
  background(0);
  boysprite.x = World.mouseX 
  edges=createEdgeSprites()
  boysprite.collide(edges[3])
  boysprite.collide(leftboundary)
  boysprite.collide(rightboundary)
  if (path.y>400){
    path.y = height/2
  }
  drawSprites()
}
