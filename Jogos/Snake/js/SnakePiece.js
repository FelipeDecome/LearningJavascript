class SnakePiece {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lastX = x;
    this.lastY = y;
  }

  move(x, y) {
    this.lastX = this.x;
    this.lastY = this.y;
    this.x = x;
    this.y = y;
  }
}
