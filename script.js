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
var WEAPON_IMG;
var ARMOR_IMG;
var ACCESSORY_IMG;

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
var hand_img;

function preload() {
  UI_Template = loadImage(
    "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FBlank%20UI.png?v=1615957385261"
  );
  font = loadFont(
    "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Fmonaco.ttf?v=1615959404499"
  );
  
  sword_img = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Fsword_02b.png?v=1615980533861");
  spear_img = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Fstaff_01e.png?v=1615980573580");
  ring_img = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Fring_02b.png?v=1615980624386");
  necklace_img = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Fnecklace_02b.png?v=1615980664799");
  book_img = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Fbook_01g.png?v=1615980684120");
  leather_img = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Farmor_01a.png?v=1615981168385");
  iron_img = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Farmor_01b.png?v=1615981172839");
  sapphire_img = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Farmor_01c.png?v=1615981172555");
  gold_img = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Farmor_01d.png?v=1615981172706");
  hand_img = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Fgloves_01a.png?v=1615980491585");
  
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
  drawIcons();
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
  
  generateEquipment();
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
  let weaponType;
  //15% chance you have no weapon
  if(Math.random() * 10 < 1.5) {
    weaponType = "none";
    
  }
  else {
    let weaponTypes = ["sword", "spear"];
    weaponType = random(weaponTypes);
  }
  
  switch(weaponType) {
  case "sword":
    WEAPON = random(swords);
    WEAPON_IMG = sword_img;
    break;
  case "spear":
    WEAPON = random(spears);
    WEAPON_IMG = spear_img;
    break;
  case "none":
    WEAPON = "DEEZ HANDS";
    WEAPON_IMG = hand_img;
    break;
  }
}

function drawIcons() {
  //weapon
  WEAPON_IMG.resize(36, 36);
  image(WEAPON_IMG, 258, 258);
  
}

document.getElementById("shuffle-button").addEventListener("click", shuffleAll);
