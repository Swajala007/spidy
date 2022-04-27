const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;


var bg_img;

var spidy;

var h1,h2,h3,h4;


function preload()
{
  bg_img = loadImage('rain.gif');
  spidy = loadImage('s1.png');
  tanker = loadImage('d1.png');
  tanker1 = loadImage('d2.png');
  water1 = loadImage('w3.png');
  h1 = loadImage('h1.png');
  h2 = loadImage('h2.png');
  h3 = loadImage('h3.png');
  h4 = loadImage('h4.png');
  r1 = loadImage('restart.png');

  spidy1 = loadAnimation('s1.png');
 
bk_song = loadSound("backgroundsound1.mpeg");
smile_song = loadSound("backgroundsound.mpeg");

// bk_song.looping = false;

 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  //bk_song.loop();
  //bk_song.setVolume(1);

  //smile_song.play();
  //smile_song.setVolume(0.2);

  spider = createSprite(600,320,100,100);
  spider.addImage(spidy);
  spider.addAnimation(spidy1);
  spider.scale = 0.8;
  

  tank = createSprite(50,200,100,100);
  tank.addImage(tanker);
  tank.scale = 3;

  tank1 = createSprite(190,400,100,100);
  tank1.addImage(tanker1);
  tank1.scale = 2;

  
  water = createSprite(320,400,200,100);
  water.addImage(water1);
  water.scale = 0.9;
  
 // heart_display = createSprite(820,50,100,100);
  //heart1.addImage(h1);
  //heart1.scale = 0.6;

  

  heart = createSprite(520,100,100,100);
  heart.addImage(h2);
  heart.scale = 0.2;

  
  heart3 = createSprite(1220,400,100,100);
  heart3.addImage(h2);
  heart3.scale = 0.2;

  heart4 = createSprite(1520,200,100,100);
  heart4.addImage(h2);
  heart4.scale = 0.2;


  heart1 = createSprite(200,600,100,100);
  heart1.addImage(h2);
  heart1.scale = 0.2;

  heart2 = createSprite(120,10,100,100);
  heart2.addImage(h2);
  heart2.scale = 0.2;

  restart = createSprite(650,300,10,10);
  restart.addImage(r1);
  restart.visible = false;

 
  
}

function draw() 
{
  background(bg_img);
  Engine.update(engine);

 /* if(gameState === PLAY){
    spider.visible = true;
    tank.visible = true;
    tank1.visible = true;
    heart.visible = true;
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    heart4.visible = true;
    restart.visible = false;


  }*/

  if(keyDown("UP_ARROW")){
    spider.velocityY = -0.9;
  }
  spider.velocityY = spider.velocityY+0.1;

  if(keyDown("LEFT_ARROW")){
    spider.velocityX = -0.9;
  }

  if(keyDown("RIGHT_ARROW")){
    spider.velocityX = 0.9;
  }

  if(spider.isTouching(heart)){
    heart.visible = false;

  }

  if(spider.isTouching(heart3)){
    heart3.visible = false;

  }

  if(spider.isTouching(heart4)){
    heart4.visible = false;

  }

  if(spider.isTouching(heart1)){
    heart1.visible = false;

  }

  if(spider.isTouching(heart2)){
    heart2.visible = false;
    /*smile_song.loop();
    bk_song.looping = false;
    bk_song.stop();
    smile_song.setVolume(1);*/
    smile_song.play();

  
   spider.y = 100;
   spider.x = 200;

   spider.velocityY = 2;
    spider.velocityX = 2;

  }

 

  drawSprites();

  if(spider.y > 800){
    stroke("yellow");
    fill("blue");
    textSize(40);
    text("You are failure",520,200);
    fill("white")
    text("TAP THE REFRESH BUTTON TO ACHIEVE YOUR GOAL",200,500);
   // gameState = END;
    restart.visible = true;
    smile_song.stop();
    bk_song.play();
  }

  
  textSize(20);
  fill("yellow");

  text("NOTHING IS IMPOSSIBLE",500,50);
  text("USE THE KEYS TO COLLECT THE HEARTS",450,80);
  text("PUT THE SPIDY IN THE AIR AS MUCH TIME AS YOU CAN",400,100);
}

