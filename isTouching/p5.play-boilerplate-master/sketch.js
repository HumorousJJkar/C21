var fixedRect, movingRect, gameObject1, gameObject2;

function setup() {
  createCanvas(1200,1000);
  fixedRect = createSprite(200, 400, 50, 80);
  fixedRect.shapeColor="black";
  movingRect = createSprite(400, 400, 80, 30);
  movingRect.shapeColor="black";

  gameObject1 = createSprite(960, 540, 50, 50);
  gameObject1.shapeColor="Cyan";
  gameObject2 = createSprite(960,600,50,50);
  gameObject2.shapeColor="yellow"
}

function draw() {
  background(255,0,0);  
  
    if(isTouching(movingRect, gameObject2)){
      gameObject2.shapeColor="White";
      movingRect.shapeColor="White";
    }
    else{
      gameObject2.shapeColor="yellow";
      movingRect.shapeColor="black";

    }

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  console.log(movingRect.x-gameObject2.x);

 
  drawSprites();
}

