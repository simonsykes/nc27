
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObj=new Roof(width/2,height/4,width/7,20);
	startX=width/2;
	startY=height/4;

	bob1=new Bob(startX-80,startY,40);
	bob2=new Bob(startX-40,startY,40);
	bob3=new Bob(startX,startY,40);
	bob4=new Bob(startX+40,startY,40);
	bob5=new Bob(startX+80,startY,40);

	rope1=new Rope(bob1.body,roofObj.body,-80,0);
	rope2=new Rope(bob2.body,roofObj.body,-40,0);
	rope3=new Rope(bob3.body,roofObj.body,0,0);
	rope4=new Rope(bob4.body,roofObj.body,+40,0);
	rope5=new Rope(bob5.body,roofObj.body,+80,0);

	Engine.run(engine);
	
} 


function draw() {
  rectMode(CENTER);
  background(250);
  roofObj.display();
  
  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();

  bob4.display();
  rope4.display();

  bob5.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}

function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position;
	roofBodyPosition=constraint.bodyB.position;
	roofBodyOffset=constraint.pointB;
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
	line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);
}

