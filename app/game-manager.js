const player = {
  currentHealth: 10000,
  attackPower: 10000,
  gold: 0,
  potions: 0
}

function healPlayer() {
  if(player.potion > 0){
    player.potions --
    player.currentHealth += 10
    enemyTurn()
    drawPlayer()
    drawCurrentEnemy()
  }else{
    messageUser("u got no potiond bruh.")
  }
}

function attackEnemy() {
  enemyTurn()
  currentEnemy.health -= player.attackPower
  if (currentEnemy.health <= 0){
  rewardPlayer()
  pickRandmEnemyFromCurrentStage()
  }
  drawPlayer()
  drawCurrentEnemy()
}

function drawPlayer() {
  document.getElementById('hero-health').innerText = '💖 ' + player.currentHealth
  // TODO finish the rest of the player attributes 
  document.getElementById('hero-gold').innerText = '🪙 '
  document.getElementById('hero-potions').innerText = '🧪 '
  document.getElementById('hero-attack').innerText = '⚔️ '
}

function drawCurrentEnemy() {
  document.getElementById('enemy-type').innerText = currentEnemy.type

  document.getElementById('enemy-health').innerText =  '💖' +currentEnemy.health


}

function enemyTurn() {
  // STUB
  const enemyDamage = Math.floor(math.random() * currentEnemy.maxAttackPower)
player.currentHealth = enemyDamage
messageUser("💔 took" + enemyDamage + "Damage")
if(player.currentHealth <= 0) {
  messageUser
}("ur ded.")
showGameOver
}

function rewardPlayer() {
  player.gold += currentEnemy.gold
  if (player.gold >= 10000){
    messsageUser("You have so much goshdang cash, you can just stop plaing this big hump of old, rotten, smelly, horrible crap.")
    showVictory()
  }
}

function buyPotion() {
  if pl
  player.potions++
  player.gold -= 5
  }
}

function increaseAttack() {
  // STUB
}

drawPlayer()