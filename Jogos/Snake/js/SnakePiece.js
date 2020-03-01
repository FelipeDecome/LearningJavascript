class SnakePiece {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.lastX = x
    this.lastY = y
    this.width = 1
    this.height = 1
    this.color = color
  }

  move(x, y) {
    this.lastX = this.x
    this.lastY = this.y
    this.x = x
    this.y = y
  }
}
