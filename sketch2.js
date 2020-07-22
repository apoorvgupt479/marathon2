var canvas, backgroundImage;
var index = 0;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var playersAtEnd;
var form, player, game;
var mycar;
var item;

var intendedNumberOfPlayers = 2;
//max 5

var clock;

var o1,o2,o3,o4,o5,o6,o7,o8,o9,o0;
var x = 0;

var cars, car1, car2, car3, car4,car5;
var car1img, car2img, car3img, car4img, car5img, groundimg, trackimg;

function preload(){
	mario = loadImage("images/plyr1.png");
	mario2 = loadImage("images/plyr2.png");
	luigi = loadImage("images/plyr3.png");
	greenDino = loadImage("images/plyr4.png");
	blackDino = loadImage("images/plyr5.png");
	groundimg = loadImage("images/ground.png");
  trackimg = loadImage("images/track3.png");
  woman = loadImage("images/woman.jpeg");
   armor = loadImage("images/armor man.png");
    bird = loadImage("images/bird.jpeg");
    man = loadImage("images/man.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  mycar = cars[player.index - 1];
  player.disqualify = false;
}


function draw(){
  if(playerCount === intendedNumberOfPlayers){
    game.update(5);
  }
  if(gameState === 5){
	let go = createElement("Go");
	go.position(displayWidth/2-10,displayHeight/2-20);
	let starting = createButton("Start");
	starting.position(displayWidth/2-20,displayHeight/2);
	
	starting.mousePressed(() =>{
	gameState = 1;
	go.hide();
	starting.hide();
})


  }
  if(gameState === 1){
    clear();
    game.play();
    console.log(player.distance);
    createOb();
    detection();
	if(player.distance === -3780){
		player.score = 100;
		getRank();
		player.rank = playersAtEnd + 1;
		setRank();
		player.score = player.score + 250 - player.rank*50;
	}
	if(playersAtEnd === intendedNumberOfPlayers){
    game.update(2);
  }}if(gameState === 2){
text("gameOver",displayWidth/2-100,displayHeight/2-50);
text("Score = "+player.score,displayWidth/2-50,displayHeight/2+20);
let re = createButton("Restart");
re.position(displayWidth/2-15,displayHeight/3);
re.mousePressed(() =>{
	player.updateCount(0);
	game.update(0);
  game = new Game();
  game.getState();
  game.start();
  mycar = cars[player.index - 1];
  player.disqualify = false;
})
  }

  }


function jump() {
  player.isJumping = false;
  player.update();
}

function getRank(){
	  var rankCountRef = database.ref('carsAtEnd');
    rankCountRef.on("value",(data)=>{
      playersAtEnd = data.val();
    });
  }
function setRank(){
	  database.ref('/').update({
      carsAtEnd: player.rank
    });
  }
