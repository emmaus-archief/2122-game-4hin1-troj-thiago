// Globale Variabelen
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600 ; 
var spelerY = 600 ;
var vijandX = 1000 ;
var vijandY = 400 ;
var RIGHT_ARROW = 39 ;
var LEFT_ARROW = 37 ;
var DOWN_ARROW = 40 ;
var UP_ARROW = 38 ;
var punten = 0 ;
var puntX = 800 ;
var puntY = 800 ;
var snelheid = 3;
var vertraging = 0.5;
var punten = 0;
var tijd = 0;

while (spelStatus === SPELEN) {
    tijd = tijd + 1;
    
  };
  console.log("tijd")


/**
Updatet globale variabelen met posities van speler en vijand 
*/

var beweegAlles = function () {
  // beweging van speler 
  if (keyIsDown(RIGHT_ARROW)) {
    spelerX = spelerX + snelheid;
  }
  if (keyIsDown(LEFT_ARROW)) {
    spelerX = spelerX - snelheid;
  }
  if (keyIsDown(DOWN_ARROW)) {
    spelerY = spelerY + snelheid;
  }
  if (keyIsDown(UP_ARROW)) {
    spelerY = spelerY - snelheid;
  }

  //muur
  if (spelerX < 0 +60) {
    spelerX = 60;}
    if (spelerX > 0+ 1225){
      spelerX=1225;}
    if(spelerY<0+60){
      spelerY=60;}
    if(spelerY>0+670){
      spelerY=670;}
    
  
  // Beweging van vijand
    if (spelerX < vijandX){
      vijandX = vijandX - snelheid * vertraging;
    }
    if (spelerX > vijandX){
      vijandX = vijandX + snelheid * vertraging;
    }
    if (spelerY < vijandY){
      vijandY = vijandY - snelheid * vertraging;
    }
    if (spelerY > vijandY){
      vijandY = vijandY + snelheid * vertraging;
    }
  snelheid = snelheid + 0.0005

  if (vertraging < 0.70){
    vertraging = vertraging + 0.00001
  }
};

var gameOverScherm = function (){
  fill("black")
  rect(0, 0, 1280, 720)
  fill("white")
  textSize(75);
  text("Game Over", 400, 200);
  text("druk op spatie om door te gaan", 100, 500);}
/**
 * Checkt botsingen
 */

  
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (spelerX > vijandX - 100 &&
      spelerX < vijandX + 100 &&
      spelerY > vijandY - 95 &&
      spelerY < vijandY + 115) {
       console.log("botsing");
      }
  if (spelerX < vijandX - 100 &&
      spelerX > vijandX + 100 &&
      spelerY < vijandY - 95 &&
      spelerY > vijandY + 115) {
    return false;
      }
};
/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("blue")
  rect(0, 0, 1280, 720)

  //tekst
  
  fill("black");
  textSize(75);
  text("gebruik de pijlen om te bewegen", 100, 200); 
  text("als je geraakt wordt ben je af", 100, 500);
  
  // speler
  fill("yellow");
  ellipse(spelerX, spelerY, 100, 100);
  fill("black");
  ellipse(spelerX + 10, spelerY - 7, 10, 10);
  ellipse(spelerX - 10, spelerY - 7, 10, 10); 
  
  
  
  // vijand
  noStroke()
  fill("red");
  ellipse(vijandX, vijandY, 100, 100);
  ellipse(vijandX - 24, vijandY + 50, 45, 40);
  ellipse(vijandX, vijandY + 50, 45, 40);
  ellipse(vijandX + 27, vijandY + 50, 45, 40);
  rect(vijandX - 49, vijandY + 6, 100, 50);
  fill("black");
  ellipse(vijandX + 15, vijandY - 7, 15, 15);
  ellipse(vijandX - 15, vijandY - 7, 15, 15);

  
  

   
  
};

/**
 checkt of er een botsing was
 */
var checkGameOver = function () {
  if (spelerX > vijandX - 100 &&
      spelerX < vijandX + 100 &&
      spelerY > vijandY - 95 &&
      spelerY < vijandY + 115) {
       return true;
      }
  if (spelerX < vijandX - 100 &&
      spelerX > vijandX + 100 &&
      spelerY < vijandY - 95 &&
      spelerY > vijandY + 115) {
    return false;
      }         
    
     
  
};



/**
 * setup
 */
function setup() {
  
  createCanvas(1280, 720);

 
  background('blue');
}
/**
de uitgevoerde code
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
  }
  if (checkGameOver() === true)
  {
    spelStatus = GAMEOVER;
  }
  if (spelStatus === GAMEOVER) {
   console.log("gameover");
    gameOverScherm()
    if (keyIsDown(32)){
      spelStatus = SPELEN
      spelerX = 600 ; 
      spelerY = 600 ;
      vijandX = 1000 ;
      vijandY = 400 ;    }
    
    

  }
}