/* exported setup, draw */

var UI_Template;


//text/numbers to be shuffled
var NAME;
var CLASS;
var ABILITY;
var ATK;
var DEF;
var SPD

//images to be shuffled
var HEAD;
var EYES;
var TORSO;
var LEGS;

function preload() {
  UI_Template = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FBlank%20UI.png?v=1615957385261");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#facade");
  
  image(UI_Template, 0, 0);
}