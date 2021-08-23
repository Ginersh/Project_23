const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player;
var computerPlayer;
var playerBase;
var computerBase;

function preload() {
computerBase = loadImage("./assets/base2.png");
playerBase = loadImage("./assets/base1.png");
computerPlayer = loadImage("./assets/player.png");
player = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
playerBase = new playerBase(300,random(450,height - 300),180,150);
player = new player(300,playerBase.body.position.y - 153,50,180);
computerBase = new computerBase(900,random(450,height - 900),180,150);
computerPlayer = new computerPlayer(900,computerBase.body.position.y - 153,50,180);

 }

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerBase.display();
  computerBase.display();

   //display Player and computerplayer
  player.display();
  computerPlayer.display();

}
