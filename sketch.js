const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,box1,box2,box3;
var box1,box2,box3;
var dustbin,dustbinImage;
function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600,500);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    paper = new Paper(200,200,15);
    ground = Bodies.rectangle(800,495,width,20,{isStatic: true});
    World.add(world,ground);
    box1 = new Box(1200,475,200,20);
  	box2 = new Box(1100,370,20,200);
    box3 = new Box(1300,370,20,200);
    dustbin = createSprite(1200,360);
    dustbin.addImage(dustbinImage);
    dustbin.scale = 0.75;
  	Engine.run(engine);
}


function draw() {
  background("white");
  Engine.update(engine);
  rectMode(CENTER);
  fill(80,80,80);
  rect(ground.position.x,ground.position.y,width,20);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}

function keyPressed(){
   if(keyCode=== UP_ARROW)
   {
   Body.applyForce(paper.body,paper.body.position,{x:45,y:-60});
   }
} 
