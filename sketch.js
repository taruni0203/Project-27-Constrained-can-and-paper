const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper,ground,middle;

function preload()
{
	img = loadImage("bin.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper(140,400);

	bottom = new Dustbin(1000,645,150,15);
	side1 = new Dustbin(915,550,15,170);
	side2 = new Dustbin(1085,550,15,170);


	ground = new Ground(600,660,width,20);

	launcher = new Launcher(paper.body,{x:155,y:400});

}


function draw() {
  rectMode(CENTER);
  background(175);
  
  bottom.display();
  side1.display();
  side2.display(); 
  imageMode(CENTER);
  image(img,1000,550,200,200);

  ground.display(); 
  paper.display();
  launcher.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}


