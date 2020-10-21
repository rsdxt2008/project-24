
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3,paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(650, 550);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin (470, 490, 160, 20);
	
	dustbin2 = new Dustbin (550, 450, 20, 80);
	
	dustbin3 = new Dustbin (400, 450, 20, 80);
	
	paperObject= new Paper (120, 400,20);
	
	ground = new Dustbin(320, 500, 850, 10);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
ground.display();

  
  
 
}

function keyPressed(){
    if (keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:80});

    }

}

