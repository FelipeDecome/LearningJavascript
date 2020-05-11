const w = (c.width = 40);
const h = (c.height = 40);
const ctx = c.getContext('2d');

let l = console.log.bind(console);
let $ = document.querySelector.bind(document);

const game = {
  snake: {
    body: [
      { x: 19, y: 19 },
    ]
  },
  food: { x: 6, y: 8 },
  dir: { x: 1, y: 0 },
  reset: (game) => {
    game.snake.body[0].x = 19;
    game.snake.body[0].y = 19;
    game.dir.x = 1;
    game.dir.y = 0;
  }
}

function move() {
  let snake = game.snake.body;
  let snakeLength = snake.length;
  let dir = game.dir;
  let lastX, lastY;

  let xT = (snake[0].x + dir.x >= 0 && snake[0].x + dir.x < 40);
  let yT = (snake[0].y + dir.y >= 0 && snake[0].y + dir.y < 40);

  if (xT && yT) {
    if (snakeLength > 1) {
      for (let i = 0; i < snakeLength; i++) {
        lastX = snake[i].x;
        lastY = snake[i].y;
      }
    } else {
      snake[0].x += dir.x;
      snake[0].y += dir.y;
    }
  } else {
    game.reset(game);
    stop();
  }
}

function setDir(x, y) {
  if (game.dir.x != x && game.dir.y != y) {
    if ((game.dir.x + x) != 0 || (game.dir.y + y) != 0) {
      game.dir.x = x;
      game.dir.y = y;
    }
    return true;
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
  ctx.fillRect(game.snake.body[0].x, game.snake.body[0].y, 1, 1);

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
