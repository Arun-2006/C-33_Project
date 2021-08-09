//Namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

//Variables
var particles=[];

var backgroundImg;
var divisionHeight=300;

var upground,leftground,rightground;
var bottomdivision;
var bg;
function preload() {
  bg=loadImage("snow1.jpg")
}
function setup() {
  //To create canvas
  //createCanvas(480,800);
  background(bg);
  engine = Engine.create();
  world = engine.world;
  bottomdivision=new Ground(240,795,width,10);
  
 upground=new Ground(width/2,2.5,width,5);
  leftground=new Ground(1,height/2,5,height);
 rightground=new Ground(479.5,height/2,5,height);
 
}

function draw() {
  //black background
  background(bg);  

  Engine.update(engine);

  //displaying ground
  bottomdivision.display();
  
  //Displaying particles after every 60 frames
  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  
  //Displaying particles
  for(var f=0; f<=particles.length-1; f=f+1)
  {
    particles[f].display();
  }
  upground.display();
  leftground.display()
 rightground.display();
}