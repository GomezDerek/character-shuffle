var UI_Template;
var font;

//text/numbers to be shuffled
var NAME;
var CLASS;
var ABILITY;
var ATTACK;
var DEFENSE;
var SPEED;
var WEAPON;
var ARMOR;
var ACCESSORY;

//images to be shuffled
var HEAD;
var EYES;
var TORSO;
var LEGS;
var WEAPON_TYPE;
var ARMOR_TYPE;
var ACCESSORY_TYPE;

function preload() {
  UI_Template = loadImage(
    "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FBlank%20UI.png?v=1615957385261"
  );
  font = loadFont(
    "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Fmonaco.ttf?v=1615959404499"
  );
}

function setup() {
  createCanvas(500, 500);

  textFont(font);
  textAlign(LEFT, CENTER);
}

function draw() {
  background("#facade");

  image(UI_Template, 0, 0);
  drawLabels();

  useTempVariables();
  drawVariableText();
}

function drawLabels() {
  //stats
  textSize(28);
  strokeWeight(1);
  text("ATTACK:", 262, 80);
  text("DEFENSE:", 262, 132.5);
  text("SPEED:", 262, 185);
  
  text("WEAPON NAME", 310, 275);
  text("ARMOR NAME", 310, 321);
  text("ACCESSORY NAME", 310, 367);
}

function useTempVariables() {
  NAME = "CHARACTER NAME";
  CLASS = "CLASS";
  ABILITY = "ABILITY";
  ATTACK = Math.floor(Math.random() * 999);
  DEFENSE = Math.floor(Math.random() * 999);
  SPEED = Math.floor(Math.random() * 999);
  //Weapon Name;
  

  //images to be shuffled
  /*
  HEAD;
  EYES;
  TORSO;
  LEGS;
  */
}

function drawVariableText() {
  textSize(43);
  text(NAME, 22.5, 42);

  fill("white"); //switch to white

  textSize(33);
  text(CLASS, 22.5, 77.4);
  text(ABILITY, 50, 100);

  fill("black"); //switch back to black

  text(28);
  text(ATTACK, 262, 102.5);
  text(DEFENSE, 262, 152.7);
  text(SPEED, 262, 205.9);
}

function drawStatBars() {
  let attackBar;
  let defenseBar;
  let 
  
}

