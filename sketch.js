
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperSprite, paperBody; 

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);
	

	paperSprite=createSprite(30, 500, 20,20);





	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	box1 = createSprite(600, 665, 285, 20);
	box1.shapeColor =color(255,0,0);
	box2 = createSprite(450, 625, 20, 100);
	box2.shapeColor = color(255,0,0);
	box3 = createSprite(750,625, 20, 100);
	box3.shapeColor = color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(width/2 , 200 , 20 , {restitution : 1, isStatic:true});
	World.add(world, paperBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperSprite.x = 50;
 paperSprite.y= 50;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {

Matter.Body.setStatic(paperBody,false)
paperSprite.velocityX = 3;
paperSprite.velocityY = 0.5;
	restitution : 0.8
	friction : 5.0

 
    
  }
}





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



