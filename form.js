class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
	this.reset = createButton("reset");
	this.choose = createSelect();
	this.choose.position = (displayWidth/2,displayHeight/2-100);
	this.choose.option('mario');
	this.choose.option('luigi');
	this.choose.option('mario2');
	this.choose.option('greenDino');
	this.choose.option('blackDino');
	this.choose.option('man');
	this.choose.option('womman');
	this.choose.option('bird');
	this.choose.option('armorMan');
	this.choose.changed(mySelectEvent);
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("High Jump Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
	  
	  this.reset.position(displayWidth-100,20);
	  
    });
	
	
this.reset.mousePressed(() =>{
	player.updateCount(0);
	game.update(0);
})
	
  }
  
  mySelectEvent() {
  item = this.choose.value();
}
 updateItem(){
    database.ref('players/player'+this.index).update({
      item:item 
    });
  }
}
