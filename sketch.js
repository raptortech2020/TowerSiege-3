const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var bg = "morning.jpg";
var backgroundImg;

function preload(){

  getBackgroundImg();
}

function setup() {
  createCanvas(1270,610);
  engine = Engine.create();
  world = engine.world;

  ground = new Stand(635,580,width,20);
  stand1 = new Stand(535,430,250,15);
  stand2 = new Stand(932,275,190,15);

  block1 = new Block(442,410,30,40,0);
  block2 = new Block(473,410,30,40,0);
  block3 = new Block(504,410,30,40,0);
  block4 = new Block(535,410,30,40,0);
  block5 = new Block(566,410,30,40,0);
  block6 = new Block(597,410,30,40,0);
  block7 = new Block(628,410,30,40,0);

  block8 = new Block(472,380,30,40,0);
  block9 = new Block(503,380,30,40,0);
  block10 = new Block(534,380,30,40,0);
  block11 = new Block(565,380,30,40,0);
  block12 = new Block(596,380,30,40,0);

  block13 = new Block(502,350,30,40,0);
  block14 = new Block(533,350,30,40,0);
  block15 = new Block(564,350,30,40,0);

  block16 = new Block(532,320,30,40,0);

  block17 = new Block(870,255,30,40,0);
  block18 = new Block(901,255,30,40,0);
  block19 = new Block(932,255,30,40,0);
  block20 = new Block(963,255,30,40,0);
  block21 = new Block(994,255,30,40,0);

  block22 = new Block(900,225,30,40,0);
  block23 = new Block(931,225,30,40,0);
  block24 = new Block(962,225,30,40,0);

  block25 = new Block(930,195,30,40,0);

  polygon = new Polygon(150,300,40,50,0);

  slingShot  = new SlingShot(polygon.body, {x:150,y:300});


}

function draw() {
  if(backgroundImg)
  background(backgroundImg); 

  Engine.update(engine); 
  rectMode(CENTER);
  textSize(20);


  fill("orange");
  text("Press Space to get a second chance", 150,100);
  text("SCORE: "+ score, 758,48);
  drawSprites();


  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  polygon.display();

  slingShot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(polygon.body, {x:150, y:300})
		slingShot.attach(polygon.body);
	}
}

async function getBackgroundImg(){

  var response = await fetch("https://worldtimeapi.org/api/timezone/America/chicago");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  bg = "morning.jpg";

  if(hour >= 6 && hour <= 18){
    bg = "morning.jpg";
  }
  else{
    bg = "night.jpg";
  }
  backgroundImg = loadImage(bg);
}