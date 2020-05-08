const w = (c.width = 40);
const h = (c.height = 40);
const ctx = c.getContext('2d');

let l = console.log.bind(console);
let $ = document.querySelector.bind(document);

const game = {
  snake: [
    { x: 19, y: 19 },
  ],
  food: { x: 6, y: 8 },
  dir: { x: 1, y: 0 }
}

function move() {
  let snake = game.snake;
  let snakeLength = snake.length;
  let dir = game.dir;
  let lastX, lastY;

  if (snakeLength > 1) {
    for (let i = 0; i < snakeLength; i++) {
      lastX = snake[i].x;
      lastY = snake[i].y;
    }
  } else {
    snake[0].x += dir.x;
    snake[0].y += dir.y;
  }
}

function setDir(x, y) {
  if (game.dir.x != x && game.dir.y != y) {
    if ((game.dir.x + x) != 0 || (game.dir.y + y) != 0) {
      game.dir.x = x;
      game.dir.y = y;

      return true;
    }
  }
}

const keys = {
  "ArrowUp": () => {
    return setDir(0, -1);
  },
  "ArrowRight": () => {
    return setDir(1, 0);
  },
  "ArrowDown": () => {
    return setDir(0, 1);
  },
  "ArrowLeft": () => {
    return setDir(-1, 0);
  },
  "KeyP": () => {
    if (game.running == 1) {
      stop();
    } else {
      run();
    }
  }
};

window.addEventListener("keydown", (KeyboardEvent) => {

  let code = KeyboardEvent.code;
  if (keys[code]()) {
    stop();
    move();
    run();
  };

});

/* Funçoes de inicializacao */

function renderScreen() {

  ctx.fillStyle = '#006c8e';
  ctx.fillRect(0, 0, 40, 40);

  ctx.fillStyle = "#ff4444";
  ctx.fillRect(game.snake[0].x, game.snake[0].y, 1, 1);

  ctx.fillStyle = "#ccc";
  ctx.fillRect(game.food.x, game.food.y, 1, 1);

  requestAnimationFrame(renderScreen);
}

function run() {
  game.init = setInterval(() => {
    game.running = 1;
    move();
  }, 500);
}

function stop() {
  if (game.init != null) {
    clearInterval(game.init);
    game.running = 0;
  }
}

run();
renderScreen();
