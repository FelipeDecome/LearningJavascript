class Snake {
  constructor() {
    this.snakeBody = [];
  }

  move(x, y) {
    let newX = this.snakeBody[0].x + x;
    let newY = this.snakeBody[0].y + y;
    let lastX, lastY;

    this.snakeBody[0].move(newX, newY);

    for (let i = 1; i < this.snakeBody.length; i++) {
      lastX = this.snakeBody[i - 1].lastX;
      lastY = this.snakeBody[i - 1].lastY;
      this.snakeBody[i].move(lastX, lastY);
    }
  }

  addPieces(snakePiece) {
    this.snakeBody.unshift(snakePiece);
  }

  resetPieces() {
    this.snakeBody = [];
  }
}
