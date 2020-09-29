const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var score = 0 
function preload(){

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  
  b1 = new Block(300,275,30,40);
  b2 = new Block(330,275,30,40);
  b3 = new Block(360,275,30,40);
  b4 = new Block(390,275,30,40);
  b5 = new Block(420,275,30,40);
  b6 = new Block(450,275,30,40);
  b7 = new Block(480,275,30,40);
  b8 = new Block(330,235,30,40);
  b9 = new Block(360,235,30,40);
  b10 = new Block(390,235,30,40);
  b11 = new Block(420,235,30,40);
  b12 = new Block(450,235,30,40);
  b13 = new Block(360,195,30,40);
  b14 = new Block(390,195,30,40);
  b15 = new Block(420,195,30,40);
  b16 = new Block(390,155,30,40);
  b17 = new Block(640,175,30,40);
  b18 = new Block(670,175,30,40);
  b19 = new Block(700,175,30,40);
  b20 = new Block(730,175,30,40);
  b21 = new Block(760,175,30,40);
  b22 = new Block(670,135,30,40);
  b23 = new Block(700,135,30,40);
  b24 = new Block(730,135,30,40);
  b25 = new Block(700,95,30,40);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(ball,{x:100,y:200});

}
function draw() {
  textSize (50);
  fill("black");
  text ("SCORE :"+score,width-700,95)
  background(56,44,44); 
 
  textSize(25);
  fill("orange");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,20,20);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("green");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("blue");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("red");
  b13.display();
  b14.display();
  b15.display();
  fill("grey");
  b16.display();
  fill("skyblue");
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  fill("turquoise");
  b22.display();
  b23.display();
  b24.display();
  fill("pink")
  b25.display();
  fill("gold");
 
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed (){
  if(keyCode === 32){
slingShot.attach(ball);
  }
}
