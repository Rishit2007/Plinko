const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];


function setup() {
  createCanvas(495,800);
  engine = Engine.create();
   world = engine.world;


 ground1 = new Ground(240,790,600,25);

 division1 = new Division(5,600,10,355);
 division2 = new Division(60,600,10,355);
 division3 = new Division(115,600,10,355);
 division4 = new Division(170,600,10,355);
 division5 = new Division(225,600,10,355);
 division6 = new Division(280,600,10,355);
 division7 = new Division(335,600,10,355);
 division8 = new Division(390,600,10,355);
 division9 = new Division(445,600,10,355);
 division10 = new Division(490,600,10,355);

 for (var i = 30;i<250; i=i+45){
   plinkos.push(new Plinko(i,30))
 }

 
 for (var q = 15;q<270; q=q+35){
  plinkos.push(new Plinko(q,70))
}

for (var w = 30;w<250;w=w+45){
  plinkos.push(new Plinko(w,110))
}

for (var e = 15;e<270;e=e+35){
  plinkos.push(new Plinko(e,150))
}


 Engine.run(engine);
}



function draw() {
  background("black");
  Engine.update(engine);
  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();
  division10.display();


  for(var j = 0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  
  if(frameCount%60==0){
    particles.push(new Particles(random(width/2-150,width/2+150),10,10));
  }

  for (var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  

}



  
  
