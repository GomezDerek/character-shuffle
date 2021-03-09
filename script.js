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
  "The Grand Unfolding",
  "Iron Skin",
  "Mantis Arms",
  "Horse Hooves"
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
  let newAbilityStat = abilities[ Math.floor(Math.random()*abilities.length)];
  
  document.getElementById("attack-Stat").innerHTML = newAttackStat;
  document.getElementById("defense-Stat").innerHTML = newDefenseStat;
  document.getElementById("ability-Stat").innerHTML = newAbilityStat;
}

let shuffleAll = () => {
  shuffleCharacter();
  randomizeStats();
}

document.getElementById("shuffle-button").addEventListener("click", shuffleAll);
