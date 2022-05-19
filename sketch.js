
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  createEdgeSprites;

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed

  if(keyIsDown(RIGHT_ARROW)) {
    box.x = box.x+5;
    background("red");
  }
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    box.x = box.x-5;
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.y = box.y-5;
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.y = box.y+5;
    background("green");
  }

  if(box.x>400 || box.x<0 || box.y>400 || box.y<0) {
    box.x = 200;
    box.y = 200;
  }
  
  drawSprites();
}

