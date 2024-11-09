//addEventListener('load' --> when the page loads

let playerSelector = document.getElementsByClassName('playerSelector');

let enemyImg = document.getElementById('enemyImg')
let attackBtn = document.getElementById('atackBtn');



const players  = [
  {
    name:'ninja',
    power : 40,
    special : 80,
    life:1000,
    weapon:'shuriken',
    src: './players/ninja.jpg'
  }, 
  {
    name:'monk',
    power : 40,
    special : 60,
    life:1000,
    weapon:'artes marciais',    
    src: './players/monk.jpg'
  },
  {
    name:'wizard',
    power : 20,
    special : 120,
    life:1000,
    weapon:'magia',
    src: './players/wizard.jpg'
  },
  {
    name:'Warrior',
    power : 50,
    special : 60,
    life:1000,
    weapon:'espada',
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
    name:'Mountain Lurker',
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
    this.life = player.life;
    this.src = player.src;
    this.weapon = player.weapon;
    this.hit;
    this.message;
  }

  // attack mode
  attack(dice) {
    this.message = `Você está atacando usando ${this.weapon}`
    this.hit = this.power * dice;
  }
  defend(){
    this.message = `Você conseguiu se defender.`
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
  attack(dice) {
    this.message = `${this.name} está te atacando.`
    this.hit = this.power * dice;
  }
  defend(){
    this.message = `${this.name} conseguiu se defender.`
  }
  
}

//variable to store the chosen enemy and player
let enemy;
let player;

//displays anemy info
function displayEnemyInfo(enemy) {
  let textField = document.getElementById('enemyInfo');
  textField.innerHTML = `name : ${enemy.name} <br/> Power: ${enemy.power} <br/> Life: ${enemy.life}` ;
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
  displayElementById('selectEnemyPanel', true);

  //display the chosen enemy for a while then proceed to the battle ground
  setTimeout(()=>{
    displayElementById('selectEnemyPanel', false);
    startBattle();
  },3000);
    
};

//this is a function to select the player
function selectPlayer (selection) {
  player = new Player(selection);
  displayElementById('selectPlayerPanel', false);
  
  selectEnemy();
}

function rollDice(){
  let diceText = document.getElementById('dice');
  let number = Math.floor(Math.random()* 6);
  let e = 0;

  for (i = 0; i <= (7 * 1) + number; i++){
    setTimeout(function(){
        diceText.innerHTML = e;
        if (e < 6){
          e++;
        }else{
          e=0; //restart e
        }
        
      }, i * 30);
  } 

  return number  
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

function updateAttackText (text){
  let messageField = document.getElementById('messageField');
  messageField.innerHTML = text;
  setTimeout(()=>{
    messageField.innerHTML = '  ';
  },2000);
}

function attack(attacker, target, power, lifeBarId){
  let dice = rollDice();
  let damage = dice * power;

  let text;
  
  attacker.attack();
  text = attacker.message;
  updateAttackText(attacker.message);
  

  //make sure life is not negative
  setTimeout(()=>{
    if ((target.life - damage) > 0){
     target.life = target.life - damage;
    } else{
     target.life = 0;
     endGame(attacker);
    } 

    if( dice == 0){// if the dice is 0, the target defends themselves
      target.defend();
      text = target.message;
      updateAttackText(text);
    }

  updateLifeBar(lifeBarId, target);
  },2000)
  
  
  
}


//enter erena.  This displays the battle ground
function startBattle (){
  displayBattleGround ();

     attackBtn.addEventListener("click", () =>{
        attackBtn.disabled = true;
          attack(player, enemy, player.power, 'enemyLife');
        setTimeout(()=>{
          attack(enemy, player, player.power, 'playerLife');
        },5000);
        setTimeout(()=>{
          attackBtn.disabled = false;
        },10000);
    })  
  
}

function displayElementById(id, toggle){
  let element = document.getElementById(id);
  toggle? element.classList.remove('hidden'): element.classList.add('hidden');
}

function displayBattleGround (toggle) {
   let id = 'battleGround';
   let playerImage = document.getElementById('playerPicture');
   let enemyImage = document.getElementById('enemyPicture');

   displayElementById(id, true)

   //display pictures
   playerImage.src = player.src;
   enemyImage.src = enemy.src;
  console.log(player)

}

function endGame(winner){

  let winnerText = document.getElementById("winnerText");
  let winnerImg = document.getElementById("winnerImg"); 

  displayElementById('battleGround', false);
  displayElementById('winnerDisplay', true);

  winnerText.innerHTML =  `O vencedor é <br/>${winner.name}`;
  winnerImg.src = winner.src;
}


//to create a clickable image
for (let i = 0; i < 4; i++){
    playerSelector[i].addEventListener("click", () =>{ selectPlayer(players[i])});
}


  window.addEventListener("load", function () {
  

  

  
 

  //object player
  

});