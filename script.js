//addEventListener('load' --> when the page loads

let playerSelector = document.getElementsByClassName('playerSelector');
//console.log(playerSelector.id);

const players  = [
  {
    name:'ninja',
    power : 40,
    special : 80
  }, 
  {
    name:'monk',
    power : 40,
    special : 60
  },
  {
    name:'wizard',
    power : 20,
    special : 120
  },
  {
    name:'Warrior',
    power : 50,
    special : 60
  }
 
 
];

class Player {
  constructor(player) {
    this.player = player;
    console.log("created a " + player.name);
    this.power = player.power;
    this.special = player.special;
    console.log(this.power);
  }

  // attack mode
  attack(context) {
    
    
  }

  
}

function playerSelect (player) {
  new Player(player);
  
  for (let i = 0; i < 4; i++){
    playerSelector[i].classList.add("hide");
}
}

for (let i = 0; i < 4; i++){
    playerSelector[i].addEventListener("click", () =>{ playerSelect(players[i])});
}


  window.addEventListener("load", function () {
  

  

  
 

  //object player
  

});