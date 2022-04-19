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
var RIGHT_ARROW = 60;
var LEFT_ARROW = 61;
var DOWN_ARROW = 62;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  
  if (KeyIsPressed(RIGHT_ARROW)) {
    spelerX = spelerX + 3;
  }
  if (KeyIsPressed(LEFT_ARROW)) {
    spelerX = spelerX - 3;
  }
  if (KeyIsPressed(DOWN_ARROW)) {
    spelerY = spelerY + 3;
  }
  if (KeyIsPressed(UP_ARROW)) {
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


  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health


};a
/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond

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
  
  
  
  // kogel

  // speler
  fill("yellow");
  ellipse(spelerX, spelerY, 100, 100);
  fill("black");
  ellipse(spelerX + 8, spelerY - 7, 10, 10);
  ellipse(spelerX - 8, spelerY - 7, 10, 10);  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
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
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
