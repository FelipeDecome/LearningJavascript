class Game {
  constructor(canvasContainer, canvasSize, snakeColor, foodColor) {
    this.canvasSize = canvasSize;
    this.direction = [0, -10];

    this.canvas = new Canvas(canvasSize[0], canvasSize[0], canvasContainer);
    this.snake = new Snake();

    this.snakePiece = new SnakePiece(0, 0, snakeColor, 10);
    this.snake.addPieces(this.snakePiece);
  }

  setDirection(x, y) {
    this.direction = [x, y];
  }

  run() {
    let gameRun = setInterval(() => {
      if (this.snake.snakeBody[0].x > 0) {
        this.snake.move(this.direction[0], this.direction[1]);
        this.snake.snakeBody.forEach(object => {
          this.canvas.clean();
          this.canvas.draw(object);
        });
      }

    }, 500);

    console.log(this.snake);

    return gameRun;
  }

  stop(gameRun) {
    clearInterval(gameRun);
  }
}
