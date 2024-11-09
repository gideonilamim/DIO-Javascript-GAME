//addEventListener('load' --> when the page loads

let playerSelector = document.getElementsByClassName('playerSelector');
let selectPlayerPanel = document.getElementById('selectPlayerPanel');
let selectEnemyPanel = document.getElementById('selectEnemyPanel');


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

const enemies  = [
  {
    name:'Dead Stump',
    src: './images/7.jpg',
    power : 40,
    special : 80,
    life: 1000
  }, 
  {
    name:'monk',
    src: './images/ninja.jpg',
    power : 40,
    special : 60,
    life: 1000
  },
  {
    name:'wizard',
    src: './images/ninja.jpg',
    power : 20,
    special : 120,
    life: 1000
  },
  {
    name:'Warrior',
    src: './images/ninja.jpg',
    power : 50,
    special : 60,
    life: 1000
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

class Enemy {

  constructor(enemy) {
    this.enemy = enemy;
    console.log("created a " + enemy.name);
    this.src = enemy.src;
    this.power = enemy.power;
    this.special = enemy.special;
    this.life = enemy.life;
    console.log(this.power);
  }

  // attack mode
  attack(context) {
    
  }
  
}

function selectEnemy(){
  new Enemy(enemies[0]);
  console.log(selectEnemyPanel.getElementsByClassName('playerSelector'));
  selectEnemyPanel.getElementsByClassName('enemy').src = './images/warrior.jpg';
};

//this is a function to select the player
function playerSelect (player) {
  new Player(player);
  selectPlayerPanel.classList.add("hidden");
  selectEnemy();
}

//to create a clickable image
for (let i = 0; i < 4; i++){
    playerSelector[i].addEventListener("click", () =>{ playerSelect(players[i])});
}


  window.addEventListener("load", function () {
  

  

  
 

  //object player
  

});