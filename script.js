var UI_Template;
var font;

//text/numbers to be shuffled
var NAME;
var CLASS;
var ABILITY;
var ATTACK;
var DEFENSE;
var SPEED;

//images to be shuffled
var HEAD;
var EYES;
var TORSO;
var LEGS;

function preload() {
  UI_Template = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FBlank%20UI.png?v=1615957385261");
  font = loadFont('https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2Fmonaco.ttf?v=1615959404499');
}

function setup() {
  createCanvas(500, 500);
  
  textFont(font);
  //textSize(fontsize);
  textAlign(LEFT, CENTER);
}

function draw() {
  background("#facade");
  
  image(UI_Template, 0, 0);
  drawTemplateText();
  drawTemporaryShuffle();
}

function drawLabels() {
  //stats
  textSize(28);
  strokeWeight(1);
  text('ATTACK', 262, 80);
  text("DEFENSE", 262, 132.5);
  text("SPEED", 262, 185);
}