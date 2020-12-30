
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, string1, string2, string3, string4, string5;

var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
 
	bob1 = new Bob(390,650,"purple");
	bob2 = new Bob(490,650,"blue");
	bob3 = new Bob(590,650,"green");
	bob4 = new Bob(690,650,"yellow");
	bob5 = new Bob(790,650,"red");
	string1 = new String(390,650, 390, 50);
	string2 = new String(490,650, 490, 50);
	string3 = new String(590,650, 590, 50);
	string4 = new String(690,650, 690, 50);
	string5 = new String(790,650, 790, 50);

	bob1.x = mouseX;
	bob2.y = mouseY;
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");


 

 
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();


}

function mouseDragged(){
	Matter.body.setPosition(this.body, {x:mouseX, y:mouseY});
}
	

