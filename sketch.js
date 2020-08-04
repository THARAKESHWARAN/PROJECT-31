const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  for(var i = 0; i < canvas.width+5; i = i+80){
    divisions.push(new Division(i));
  }

  for(var j = 15; j < canvas.width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 40; j < canvas.width; j = j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 15; j < canvas.width; j = j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 40; j < canvas.width; j = j+50){
    plinkos.push(new Plinko(j,375));
  }

  ground = new Ground(canvas.width/2, 790, canvas.width, 20);

  Engine.run(engine);

}

function draw() {

  background(0); 
  rectMode(CENTER);
  Engine.update(engine);

  if(frameCount % 60 === 0){
    particles.push(new Particle())
  }

  for(var a = 0; a < divisions.length; a++){
    divisions[a].display();
  }

  for(var b=0; b < plinkos.length; b++){
    plinkos[b].display();
  }

  for(var c=0; c < particles.length; c++){
    particles[c].display();
  }

  ground.display();
   
  drawSprites();
}

