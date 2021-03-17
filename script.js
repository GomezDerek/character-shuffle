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

//specific image names
//equipment
var sword_img;
var spear_img;
var ring_img;
var necklace_img;
var book_img;
var leather_img;
var iron_img;
var sapphire_img;
var gold_img;

function preload() {
  UI_Template = loadImage(
    "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FBlank%20UI.png?v=1615957385261"
  );
  font = loadFont(
    "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Fmonaco.ttf?v=1615959404499"
  );
  
  sword_img = loadImage("");
  spear_img = loadImage("");
  ring_img = loadImage("");
  necklace_img = loadImage("");
  book_img = loadImage("");
  leather_img = loadImage("");
  iron_img = loadImage("");
  sapphire_img = loadImage("");
  gold_img = loadImage("");
  
}

function setup() {
  createCanvas(500, 500);
  noStroke();

  background("#facade");

  textFont(font);
  textAlign(LEFT, CENTER);
  
  image(UI_Template, 0, 0);
  drawLabels();
  useTempVariables();

}

function draw() {
  background("#facade");
  image(UI_Template, 0, 0);
  drawLabels();  

  drawVariableText();
  drawStatBars();
}

//draw stat labels (unchangeable)
function drawLabels() {
  //stats
  textSize(28);
  strokeWeight(1);
  text("ATTACK", 262, 80);
  text("DEFENSE", 262, 132.5);
  text("SPEED", 262, 185);
}

//assign these values in the meantime, before we implement the shuffle button
function useTempVariables() {
  NAME = generateName();
  CLASS = "CLASS";
  ABILITY = "ABILITY";
  ATTACK = Math.floor(Math.random() * 999);
  DEFENSE = Math.floor(Math.random() * 999);
  SPEED = Math.floor(Math.random() * 999);

  WEAPON = "WEAPON NAME";
  ARMOR = "ARMOR NAME";
  ACCESSORY = "ACCESSORY NAME";

  //images to be shuffled
  /*
  HEAD;
  EYES;
  TORSO;
  LEGS;
  */
}

//this will draw the updated values that are being shuffled
function drawVariableText() {
  textSize(43);
  text(NAME, 22.5, 42);

  fill("#FFFFFF88"); //switch colors for class and ability

  textSize(33);
  text(CLASS, 22.5, 77.4);
  text(ABILITY, 50, 100);

  fill("black"); //switch back to black

  text(28);
  text(ATTACK, 262, 102.5);
  text(DEFENSE, 262, 152.7);
  text(SPEED, 262, 205.9);

  text(WEAPON, 310, 275);
  text(ARMOR, 310, 321);
  text(ACCESSORY, 310, 367);
}

//the stat bars' length and color depend on the stat values
function drawStatBars() {
  let barWidth;
  let x = 300;

  //draw attack stat bar
  fill(assignBarColor(ATTACK));
  barWidth = (175 * ATTACK) / 999;
  rect(x, 95.4, barWidth, 16);

  //draw defense stat bar
  fill(assignBarColor(DEFENSE));
  barWidth = (175 * DEFENSE) / 999;
  rect(x, 146, barWidth, 16);

  //draw speed stat bar
  fill(assignBarColor(SPEED));
  barWidth = (175 * SPEED) / 999;
  rect(x, 199, barWidth, 16);

  fill("black"); //reset color
}

//pick a color for the stat bar depending on the stat value
function assignBarColor(statNum) {
  if (statNum <= 333) {
    return "red";
  } else if (statNum <= 666) {
    return "yellow";
  } else {
    return "green";
  }
}

//this shuffles the character's assets and everything else
function shuffleAll() {
  shuffleCharacter();

  //generate name
  NAME = generateName();

  //generate class
  CLASS = random(classes);

  //generate ability
  ABILITY = random(abilities);

  //generate stats
  ATTACK = Math.floor(Math.random() * 999);
  DEFENSE = Math.floor(Math.random() * 999);
  SPEED = Math.floor(Math.random() * 999);

  //generate equipment
  generateEquipment();
  
  //weapon

  
  
}

//TODO: add code to shuffle the character art
function shuffleCharacter() {}

function generateName() {
  let ranpre = Math.floor(Math.random() * pre.length);
  let ransuf = Math.floor(Math.random() * suf.length);
  let lnpre = Math.floor(Math.random() * lpre.length);
  let lnsuf = Math.floor(Math.random() * lsuf.length);

  let fullName = pre[ranpre] + suf[ransuf] + " " + lpre[lnpre] + lsuf[lnsuf];
  return fullName;
}

function generateEquipment() {
  
  //weapons
  //15% chance you have no weapon
  if(Math.random() * 10 < 1.5) {
    WEAPON_TYPE = "none";
    
  }
  else {
    let weaponTypes = ["sword", "spear"];
    WEAPON_TYPE = random(weaponTypes);
  }
  
  switch(WEAPON_TYPE) {
  case "sword":
    WEAPON = random(swords);
    break;
  case "spear":
    WEAPON = random(spears);
    break;
  case "none":
    WEAPON = "DEEZ HANDS";
    break;
  }
}

document.getElementById("shuffle-button").addEventListener("click", shuffleAll);
