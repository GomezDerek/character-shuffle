/* exported setup, draw */

var UI_Template;
let testHead;

function preload() {
  UI_Template = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FBlank%20UI.png?v=1615957385261");
  testHead = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHead-4.png?v=1615870465800");
}

function setup() {
  createCanvas(500, 500);
  
  UI_Template = loadImage("https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FBlank%20UI.png?v=1615957385261");
  
  image(testHead, width/5, height/5);
  
}

function draw() {
  background("#facade");
  image(UI_Template, 0, 0);
}