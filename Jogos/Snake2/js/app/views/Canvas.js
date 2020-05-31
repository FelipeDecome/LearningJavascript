class Canvas {
  constructor(canvas, tile) {
    this._tile = tile;
    this._canvas = canvas;
    this._ctx = this._canvas.getContext("2d");
    this._color = "#222";
    this._snakeColor = "lime";
    this._foodColor = "red";

    this._drawCanvas();
    console.log(this);
  }

  _drawCanvas() {

    this._ctx.fillStyle = this._color;
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }

  drawSnake(obj) {

    this._drawCanvas();

    this._ctx.fillStyle = obj.color;
    for (let i = 0; i < obj.trail.length; i++) {

      this._ctx.fillRect(
        obj.trail[i].x * this._tile,
        obj.trail[i].y * this._tile,
        obj.size,
        obj.size
      );

      if (obj.trail[i].x == obj.x && obj.trail[i].y == obj.y) {
        obj.resetSnake();
      }
    }
  }

  drawFood(obj, snake) {

  }
}
