
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
function preload(){
 dustbin=loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(800, 600);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	Base= Bodies.rectangle(650,570,200,20,{isStatic:true})
	World.add(world, Base);
	rwall= Bodies.rectangle(750,530,20,100,{isStatic:true})
	World.add(world, rwall);
	lwall= Bodies.rectangle(550,530,20,100,{isStatic:true})
	World.add(world, lwall);
	baluno=new ball(250,0)
	floruno=new floor(600,590)
}


function draw() {
  rectMode(CENTER);
  background("black");
  drawSprites();
  fill("purple")
  rect(Base.position.x,Base.position.y,200,20)
  rect(rwall.position.x,rwall.position.y,20,100)
  rect(lwall.position.x,lwall.position.y,20,100)
  baluno.display()
  floruno.display()
  image(dustbin,550,365,200,200)
}
function keyPressed(){
	if (keyCode===RIGHT_ARROW)
	{
		Matter.Body.applyForce(baluno.ball,baluno.ball.position,{x:50,y:0})
	}
	
	if (keyCode===LEFT_ARROW)
	{
		Matter.Body.applyForce(baluno.ball,baluno.ball.position,{x:-50,y:0})
	}
	
	if (keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(baluno.ball,baluno.ball.position,{x:0,y:-50})
	}

	if (keyCode===DOWN_ARROW)
	{
		Matter.Body.applyForce(baluno.ball,baluno.ball.position,{x:0,y:50})
	}
}


