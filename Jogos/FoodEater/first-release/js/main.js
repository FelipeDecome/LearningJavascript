const screen = document.querySelector('#screen')
const ctx = screen.getContext('2d')

const game = {
  players: {
    'player1': { x: 1, y: 1 },
    'player2': { x: 9, y: 9 }
  },
  fruits: {
    'fruit1': { x: 3, y: 1 }
  }
}

function renderScreen() {

  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, 10, 10)
  for (playerId in game.players) {
    const player = game.players[playerId]
    ctx.fillStyle = 'black'
    ctx.fillRect(player.x, player.y, 1, 1);
  }

  for (fruitId in game.fruits) {
    const fruit = game.fruits[fruitId]
    ctx.fillStyle = 'green'
    ctx.fillRect(fruit.x, fruit.y, 1, 1);
  }

  requestAnimationFrame(renderScreen)
}

renderScreen();

document.onkeypress = console.log(event);

