class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
	car5 = createSprite(900,200);
	
	car1.addImage("1car",getItem(1));
	car2.addImage("2car",getItem(2));
	car3.addImage("3car",getItem(3));
	car4.addImage("4car",getItem(4));
	car5.addImage("5car",getItem(5));
	
	car1.scale = 0.5;
	car2.scale = 0.5;
	car3.scale = 0.5;
	car4.scale = 0.5;
	car5.scale = 0.5;
	
    cars = [car1, car2, car3, car4, car5];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      background("red");
     //image(trackimg,1000,-displayHeight*4,displayWidth*2,displayHeight*5);
    image(trackimg,1900,0,displayWidth*2,displayWidth/2);
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = -1000;
      var y = 100;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y + 150;
        //use data form the database to display the cars in y direction
        x = displayWidth - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
		mycar = cars[player.index - 1];

        if (index === player.index){
          if(player.isJumping === true){
            fill("brown");
          }else{
            fill("purple");
          }
			ellipse(x,y,70,65);
			
          cars[index - 1].shapeColor = "red";
          camera.position.y = displayHeight/2;
          camera.position.x = cars[index-1].x;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -= 10
      player.update();
    }
	if(keyDown(32) && player.index !== null){
      player.isJumping = true;
      player.update();
    }
	if(player.isJumping === true){
    player.setScale = 0.7;
    fill("violet");
		setTimeout(jump,500);
	  }
  drawSprites();
}}
