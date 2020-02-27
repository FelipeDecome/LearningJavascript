class Game {
  constructor(canvasContainer, canvasSize, snakeColor, foodColor) {
    this.gameRun;
    this.direction = [10, 0];

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
      let a = this.snake.snakeBody[0].x >= 0 && this.snake.snakeBody[0].x < (this.canvas.width - this.snake.snakeBody[0].width);
      let b = this.snake.snakeBody[0].y >= 0 && this.snake.snakeBody[0].y < (this.canvas.height - this.snake.snakeBody[0].height);
      if (a && b) {
        this.snake.move(this.direction[0], this.direction[1]);
        this.snake.snakeBody.forEach(object => {
          this.canvas.clean();
          this.canvas.draw(object);
        });
      }

    }, 300);

    console.log(this.snake, this.snake.snakeBody[0].x >= 0);

    return gameRun;
  }

  stop() {
    clearInterval(this.gameRun);
  }
}
