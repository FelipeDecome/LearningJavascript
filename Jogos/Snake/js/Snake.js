class Snake {
  constructor() {
    this.SnakeBody = [];
  }

  move(x, y) {
    this.SnakeBody[0].move(x, y);
    let lastX, lastY;
    for (let i = 1; i < this.SnakeBody.length; i++) {
      lastX = this.SnakeBody[i - 1].lastX;
      lastY = this.SnakeBody[i - 1].lastY;
      this.SnakeBody[i].move(lastX, lastY);
    }
  }

  addPieces(snakePiece) {
    this.SnakeBody.unshift(snakePiece);
  }

  resetPieces() {
    this.SnakeBody = [];
  }
}
