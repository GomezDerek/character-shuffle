function preload() {
  let UI_Template = loadImage('https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FBlank%20UI.png?v=1615957385261');
}

function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background("#facade");
}



//asset arrays 
let head = [
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHead-1.png?v=1615870467294",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHead-2.png?v=1615870551798",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHead-3.png?v=1615871123852",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHead-4.png?v=1615870465800"
];

let torso = [
  "https://cdn.glitch.com/078a68bb-ab35-403a-9d72-f67413aaa3d3%2FTorso-1.png?v=1615672268766",
  "https://cdn.glitch.com/078a68bb-ab35-403a-9d72-f67413aaa3d3%2FTorso-2.png?v=1615672269659",
  "https://cdn.glitch.com/078a68bb-ab35-403a-9d72-f67413aaa3d3%2FTorso-3.png?v=1615672269880",
  "https://cdn.glitch.com/078a68bb-ab35-403a-9d72-f67413aaa3d3%2FTorso-4.png?v=1615672270506",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FTorso-5.png?v=1615871441934"
];

let legs = [
  "https://cdn.glitch.com/078a68bb-ab35-403a-9d72-f67413aaa3d3%2FLeg-1.png?v=1615672271138",
  "https://cdn.glitch.com/078a68bb-ab35-403a-9d72-f67413aaa3d3%2FLeg-2.png?v=1615672270217",
  "https://cdn.glitch.com/078a68bb-ab35-403a-9d72-f67413aaa3d3%2FLeg-3.png?v=1615672270616",
  "https://cdn.glitch.com/078a68bb-ab35-403a-9d72-f67413aaa3d3%2FLeg-4.png?v=1615672270818",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FLeg-5.png?v=1615871640591"
];

let hair = [
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHair-1.png?v=1615870465229",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHair-2.png?v=1615870466206",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHair-3.png?v=1615870466410",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHair-4.png?v=1615870468335",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHair-5.png?v=1615870467056",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHair-6.png?v=1615870465091",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHair-7.png?v=1615870467197",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHair-8.png?v=1615870468435",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHair-9.png?v=1615870467723",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FHair-10.png?v=1615870464381",
];

let weapon = [
  "",
  "",
  "",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FWeapon-1.png?v=1615873003545",
  "https://cdn.glitch.com/c63601e5-6192-466b-b298-6eed54a118ab%2FWeapon-2.png?v=1615873334505"
];

let imageLinks = [
  "https://webstockreview.net/images/clipart-anchor-animated-5.gif",//skull girl
  "https://media2.giphy.com/media/VJBEwBbpz2XxhQpUuB/giphy.gif", //bearded Rafael
  "https://pa1.narvii.com/6777/1a49e450c41958e1b344c2a3ecbcccc0a3ce98d5_hq.gif",//FNAF Chica
  "https://cdna.artstation.com/p/assets/images/images/019/435/536/original/vitoria-maxwell-mariana-cartoon-charlie-animation.gif?1563469729",//px succubis/necromancer
  "https://i.gifer.com/6XBs.gif" //LoZ NPC
];

let abilities = [
  "Morning Breath",
  "Snake Summoning",
  "Grand Unfolding",
  "Iron Skin",
  "Mantis Arms",
  "Horse Hooves",
  "Enhanced Strength",
  "Eye Lazers"
];

let backgrounds = [
  "url('https://i.gifer.com/76YS.gif')",
  "url('https://j.gifs.com/KB6AD3.gif')",
  "url('https://i0.wp.com/windowscustomization.com/wp-content/uploads/2018/12/Double-Embers.gif?fit=750%2C353&quality=80&strip=all&ssl=1')",
  "url('https://thumbs.gfycat.com/TotalFilthyCaudata-max-1mb.gif')",
  "url('https://thumbs.gfycat.com/EnormousGracefulBunny-max-1mb.gif')"
];

let pre = [
  "Iron",
  "Bor",
  "Salva",
  "Calad",
  "Yuss",
  "Gylad",
  "Forr",
  "Wal"
];

let suf = [
  "lance",
  "us",
  "assy",
  "tore",
  "ty",
  "el",
  "",
  "est",
  "ter"
];

let lpre = [
  "Bees",
  "Hard",
  "Smith",
  "God",
  "Griff",
  "Lil",
  "Tromb"
];

let lsuf = [
  "ley",
  "don",
  "son",
  "frey",
  "in",
  "villa",
  "ak",
  ""
];