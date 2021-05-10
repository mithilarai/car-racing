var gameState = 0;
var playerCount;
var game, player, form;
var players;

var car1, car2, car3, car4;
var cars = [];

var track, car1_img, car2_img, car3_img, car4_img;

function preload() {
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}
function setup() {
  database = firebase.database();

  console.log(database);
  createCanvas(displayWidth - 30, displayHeight - 120);
  game = new Game();


  game.readGameState();

  game.start();
}

function draw() {


  if (playerCount === 4) {

    game.writeGamestate(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }

  if (gameState === 2) {
    game.end();
  }
}

