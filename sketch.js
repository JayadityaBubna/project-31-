const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;
var ground;


function setup() {
  createCanvas(480,800);

  engine=Engine.create();
  world=engine.world;

  for(var i=0;i<=480;i=i+80){
    divisions.push(new Division(i,800-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40;j<=480;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=470;j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  if(frameCount%10===0){
    particles.push(new Particle(random(300/2-10,300/2+10),10,10));
  }
  ground=new Ground(240,790,480,20);

}

function draw() {
  background(0); 
  Engine.update(engine);

  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }

  ground.display();
  drawSprites();

}