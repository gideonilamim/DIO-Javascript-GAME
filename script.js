//addEventListener('load' --> when the page loads

let playerSelector = document.getElementsByClassName('playerSelector');
let selectPlayerPanel = document.getElementById('selectPlayerPanel');
let selectEnemyPanel = document.getElementById('selectEnemyPanel');
let enemyImg = document.getElementById('enemyImg')
let attackBtn = document.getElementById('atackBtn');



const players  = [
  {
    name:'ninja',
    power : 40,
    special : 80,
    life:1000,
    src: './players/ninja.jpg'
  }, 
  {
    name:'monk',
    power : 40,
    special : 60,
    life:1000,
    src: './players/monk.jpg'
  },
  {
    name:'wizard',
    power : 20,
    special : 120,
    life:1000,
    src: './players/wizard.jpg'
  },
  {
    name:'Warrior',
    power : 50,
    special : 60,
    life:1000,
    src: './players/warrior.jpg'
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
    this.name = player.name;
    this.totalLife = player.life;
    this.power = player.power;
    this.special = player.special;
    this.life;
    this.src = player.src;
  }

  // attack mode
  attack(context) {
    
    
  }

  
}

class Enemy {

  constructor(enemy) {
    this.name = enemy.name;
    this.totalLife = enemy.life;
    this.power = enemy.power;
    this.special = enemy.special;
    this.life = enemy.life;
    this.src = enemy.src;
  }

  // attack mode
  attack(context) {
    
  }
  
}

//variable to store the chosen enemy and player
let enemy;
let player;

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

  //display the panel
  selectEnemyPanel.classList.remove("hidden")

  //display the chosen enemy for a while then proceed to the battle ground
  setTimeout(()=>{
    selectEnemyPanel.classList.add("hidden");
    startBattle();
  },3000);
    
};

//this is a function to select the player
function selectPlayer (selection) {
  player = new Player(selection);
  selectPlayerPanel.classList.add("hidden");
  selectEnemy();
}

function rollDice(){
  let number = Math.floor(Math.random()* 6 + 1);
  return number;
}

function updateLifeBar(id, target){
  let lifeBar = document.getElementById(id);
  let life = target.life;
  let totalLife = target.totalLife;
  /**it's proportional to the bar width whici is 400px
   *   400px = totalLife
   *   x  = life
   * **/

  let width = (life * 400) / totalLife;
  lifeBar.style = `width:${width}px`;
  
}

function attack(target, power, lifeBarId){
  let dice = rollDice();
  let damage = dice * power;
  
  //make sure life is not negative
  if ((target.life - damage) > 0){
    target.life = target.life - damage;
  } else{
    target.life = 0;
  }
  
  updateLifeBar(lifeBarId, target);
  console.log(target.life);
}


//enter erena.  This displays the battle ground
function startBattle (){
  displayBattleGround ();

  attackBtn.addEventListener("click", () =>{ attack(enemy, player.power, 'enemyLife')})

  
}

function displayBattleGround () {
   let battleGround = document.getElementById('battleGround');
   let playerImage = document.getElementById('playerPicture');
   let enemyImage = document.getElementById('enemyPicture');
   battleGround.classList.remove('hidden');

   //display pictures
   playerImage.src = player.src;
   enemyImage.src = enemy.src;
  console.log(player)

}


//to create a clickable image
for (let i = 0; i < 4; i++){
    playerSelector[i].addEventListener("click", () =>{ selectPlayer(players[i])});
}


  window.addEventListener("load", function () {
  

  

  
 

  //object player
  

});