class Canvas {
  constructor(canvas, tile) {
    this._tile = tile;
    this._canvas = canvas;
    this._ctx = this._canvas.getContext("2d");
    this._canvasColor = "#222";
    this._snakeColor = "lime";
    this._foodColor = "red";

    this._drawCanvas();
    console.log(this);
  }

  _drawCanvas() {

    this._ctx.fillStyle = this._canvasColor;
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }

  drawSnake(obj) {

    this._ctx.fillStyle = this._snakeColor;
    this._ctx.fillRect(obj.x * this._tile, obj.y * this._tile, obj.size, obj.size);
  }

  drawFood(obj) {

  }
}
