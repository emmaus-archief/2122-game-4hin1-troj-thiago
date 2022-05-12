/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600 ; // x-positie van speler
var spelerY = 600 ; // y-positie van speler
var vijandX = 1000 ;
var vijandY = 400 ;
var RIGHT_ARROW = 39 ;
var LEFT_ARROW = 37 ;
var DOWN_ARROW = 40 ;
var UP_ARROW = 38 ;
var punten = 0 ;
var puntX = 800 ;
var puntY = 800 ;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  
  if (keyIsDown(RIGHT_ARROW)) {
    spelerX = spelerX + 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    spelerX = spelerX - 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    spelerY = spelerY + 3;
  }
  if (keyIsDown(UP_ARROW)) {
    spelerY = spelerY - 3;
  }
  // vijand

  // kogel
};


/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  if (spelerX > vijandX - 100 &&
      spelerX < vijandX + 100 &&
      spelerY > vijandY - 100 &&
      spelerY < vijandY + 120) {
       console.log("botsing");
      }

  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health
  function checkPunten() {
     if (spelerX > puntX - 10 &&
        spelerX < puntX + 10 &&
        spelerY > puntY - 10 &&
        spelerY < puntY + 10) {
        var punten = punten + 1;
        return punten;
        
        }
      
       
    
  }


};
/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("blue")
  rect(0, 0, 1280, 720)
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
  var move = function (){
    if (spelerX < vijandX){
      vijandX = vijandX - 1;
    }
    if (spelerX > vijandX){
      vijandX = vijandX + 1;
    }
    if (spelerY < vijandY){
      vijandY = vijandY - 1;
    }
    if (spelerY > vijandY){
      vijandY = vijandY + 1;
    }
  }
  
  
  
  // kogel

  // speler
  fill("yellow");
  ellipse(spelerX, spelerY, 100, 100);
  fill("black");
  ellipse(spelerX + 8, spelerY - 7, 10, 10);
  ellipse(spelerX - 8, spelerY - 7, 10, 10);  // punten en health
  
  fill("orange");
  ellipse(puntX, puntY, 20, 20);
  
  move();
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (verwerkBotsing === true) {
    return true;
  }
  else {return false;}
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver === true) {
    spelStatus === GAMEOVER
    }
  }
  if (spelStatus === GAMEOVER) {
   console.log("gameover")  
    

  }
}
