const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var engine,world;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car.PNG");
  car2_img = loadImage("images/car2o.PNG");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 60, displayHeight-170);
  engine = Engine.create();
  world = engine.world;
  database = firebase.database();
  net1= new Basket( 50,50,20,30)
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
    net1.display();

   drawSprites();

}
