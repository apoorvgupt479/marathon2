
var o1,o2,o3,o4,o5,o6,o7,o8,o9,o0;
var mycar = cars[player.index - 1];


function createOb(){
var x = 0;
x-=300;
o1 = createSprite(x,50,10,150);
x-=300;
o2 = createSprite(x,50,10,150);
x-=300;
o3 = createSprite(x,50,10,150);
x-=300;
o4 = createSprite(x,50,10,150);
x-=300;
o5 = createSprite(x,50,10,150);
x-=300;
o6 = createSprite(x,50,10,150);
x-=300;
o7 = createSprite(x,50,10,150);
x-=300;
o8 = createSprite(x,50,10,150);
x-=300;
o9 = createSprite(x,50,10,150);
x-=300;
o0 = createSprite(x,50,10,150);

o1.shapeColor = "orange";
o2.shapeColor = "orange";
o3.shapeColor = "orange";
o4.shapeColor = "orange";
o5.shapeColor = "orange";
o6.shapeColor = "orange";
o7.shapeColor = "orange";
o8.shapeColor = "orange";
o9.shapeColor = "orange";
o0.shapeColor = "orange";
    
    
}
    
function collision(fixedRect){


  if(mycar.x-fixedRect.x<mycar.width/2+fixedRect.width/2 && 
    fixedRect.x-mycar.x<mycar.width/2+fixedRect.width/2   && 
    mycar.y-fixedRect.y<mycar.height/2+fixedRect.height/2 &&  
    fixedRect.y-mycar.y<mycar.height/2+fixedRect.height/2 && 
    player.isJumping === false) {

      player.disqualify = true;

  }}


function detection(){
    collision(o1);
    collision(o2);
    collision(o3);
    collision(o4);
    collision(o5);
    collision(o6);
    collision(o7);
    collision(o8);
    collision(o9);
    collision(o0);

    if(player.disqualify === true){
        console.error("Sorry, you could not jump the hurdle.You are disqualified.");
        text("check console", displayWidth/2,displayHeight/2);
    }}
