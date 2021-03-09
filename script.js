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
  "Horse Hooves"
];

let backgrounds = [
  "url('https://i.gifer.com/76YS.gif')",
  "url('https://j.gifs.com/KB6AD3.gif')",
  "url('https://i0.wp.com/windowscustomization.com/wp-content/uploads/2018/12/Double-Embers.gif?fit=750%2C353&quality=80&strip=all&ssl=1')",
  "url('https://thumbs.gfycat.com/TotalFilthyCaudata-max-1mb.gif')",
  "url('https://thumbs.gfycat.com/EnormousGracefulBunny-max-1mb.gif')"
];


let shuffleCharacter = () => {
  console.log("shuffleCharacter called");
  let characterDisplay = document.getElementById("character-display");
  let randCharacter = imageLinks[ Math.floor(Math.random()*imageLinks.length)];
  characterDisplay.src = randCharacter;
}

let randomizeStats = () => {
  console.log("randomizing stats");
  
  let newAttackStat = Math.floor(Math.random()*999);
  let newDefenseStat = Math.floor(Math.random()*999);
  let newSpeedStat = Math.floor(Math.random()*999);
  let newAbilityStat = abilities[ Math.floor(Math.random()*abilities.length)];
  
  document.getElementById("attack-Stat").innerHTML = newAttackStat;
  document.getElementById("defense-Stat").innerHTML = newDefenseStat;
  document.getElementById("speed-Stat").innerHTML = newSpeedStat;
  document.getElementById("ability-Stat").innerHTML = newAbilityStat;
}

let randomizeBackground = () => {
  let newBG = Math.floor(Math.random()*backgrounds.length);
  document.getElementById("frame").style.backgroundImage = backgrounds[newBG];
};

let shuffleAll = () => {
  shuffleCharacter();
  randomizeStats();
  randomizeBackground();
}

document.getElementById("shuffle-button").addEventListener("click", shuffleAll);