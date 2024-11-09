//addEventListener('load' --> when the page loads

let playerSelector = document.getElementsByClassName('playerSelector');
let selectPlayerPanel = document.getElementById('selectPlayerPanel');
let selectEnemyPanel = document.getElementById('selectEnemyPanel');
let enemyImg = document.getElementById('enemyImg')



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
    name:'Swamp Monster',
    src: './enemies/1.jpg',
    power : 40,
    special : 80,
    life: 1000
  }, 
  {
    name:'Mountain Lerker',
    src: './enemies/2.jpg',
    power : 40,
    special : 60,
    life: 1000
  },
  {
    name:'Cave Dwarf',
    src: './enemies/3.jpg',
    power : 20,
    special : 120,
    life: 1000
  },
  {
    name:'Shadow Warrior',
    src: './enemies/4.jpg',
    power : 50,
    special : 60,
    life: 1000
  },
  {
    name:'Fire Crosser',
    src: './enemies/5.jpg',
    power : 50,
    special : 60,
    life: 1000
  },
  {
    name:'Wizard of the Mountains',
    src: './enemies/6.jpg',
    power : 50,
    special : 60,
    life: 1000
  },
  {
    name:'dead Stump',
    src: './enemies/7.jpg',
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

let player;
let enemy;

//displays anemy info
function displayEnemyInfo(enemy) {
  let textField = document.getElementById('enemyInfo');
  textField.innerHTML = `name : ${enemy.name} <br/> Power: ${enemy.power} <br/> Life: ${enemy.life}` ;
  console.log(textField.innerText);
}

//it shuffles the enemies and chooses one
let shuffleEnemies = (enemies) =>{
  let numberOfEnemies = enemies.length; // get's the number of items in the array
  let randomIndex = Math.floor(Math.random()* (enemies.length));

  let selectedEnemy = enemies[randomIndex]; // this will select the enemy
  let times = 3; // how many times it will shuffle through the enemy arrays. it's only for animation purpose.

  let e = 0;
  console.log('the enemy is: ' + selectedEnemy.name);
  console.log('n enemy is: ' + randomIndex);

  for (let i = 0; i < (numberOfEnemies * times) + randomIndex + 1; i++) {
    
    setTimeout(function () {
        //it causes to shuffle over and over again through the enemy array
        if (e == numberOfEnemies) {
            e = 0;
        }
        enemyImg.src = enemies[e].src;

        //when the shuffling is complete, display the info
        if (i == (numberOfEnemies * times) + randomIndex){
          displayEnemyInfo(selectedEnemy);
        }

        e++;

    }, i * 50);
}
  
  return selectedEnemy;
};


//create an enemy
function selectEnemy(){
  let selectedEnemy = shuffleEnemies(enemies);
  enemy = new Enemy(selectedEnemy);
  selectEnemyPanel.classList.remove("hidden")
  
  setTimeout(()=>{console.log(enemy)},10000)
  //console.log(enemy);

  
};

//this is a function to select the player
function playerSelect (player) {
  player = new Player(player);
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