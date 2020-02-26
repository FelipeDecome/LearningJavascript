class SnakePiece {
  constructor(x, y, color, rectSize) {
    this.x = x;
    this.y = y;
    this.lastX = x;
    this.lastY = y;
    this.width = rectSize;
    this.height = rectSize;
    this.color = color;
  }

  move(x, y) {
    this.lastX = this.x;
    this.lastY = this.y;
    this.x = x;
    this.y = y;
  }
}
