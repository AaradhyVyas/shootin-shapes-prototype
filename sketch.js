function setup(){

  createCanvas (windowWidth, windowHeight);

  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);


 bow = createSprite(200,370,70,70);
  bow.visibility = false;
  
   zoom = createSprite(200, 370,20,20);
zoom.shapeColor=("red");
}


function draw(){
  
  background("black");

  // glowRect(width/4, height/2, 300, 1, 10, color(255, 100));
  // glowRect(width/2+55, height/2, 200, 3, 7, color(27, 42, 97, 100));//color name: 洒落柿(しゃれがき)
  // glowRect(width*3/4, height/2, 100, 6, 10, color(3, 48, 93, 100));//color name: 甚三紅(じんざもみ)

  
  zoom.velocityX=0;
  zoom.velocityY=0;
  
if (keyDown(UP_ARROW)) {
    zoom.velocityY=-9;
  }
  
   if (keyDown(DOWN_ARROW)) {
    zoom.velocityY=8;
  }
  
   if (keyDown(LEFT_ARROW)) {
    zoom.velocityX=-8;
  }
  
  if (keyDown(RIGHT_ARROW)) {
    zoom.velocityX=7;
  }
  
  if (keyDown("space")) {
    createArrow();
  }
  
  bow.y = zoom.y;
  bow.x = zoom.x;
  
  drawSprites();
}

function createArrow() {
  var arrow= createSprite(200,370, 120, 120);
  //arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  // arrowGroup.add(arrow);
  return arrow;
   
}

function glowRect(x, y, size, depth, blurriness, rectColor){
  noFill();
  stroke(rectColor);
  strokeWeight(size/12);

  glow(rectColor, blurriness);

  for(let i=0; i<depth; i++){
    rect(x, y, size, size, size/10);
  }
}

function glow(glowColor, blurriness){
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = blurriness;
  drawingContext.shadowColor = glowColor;
}