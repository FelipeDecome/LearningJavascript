class GameController {
  constructor() {
    this._tile = 20;

    this._canvas = new Canvas(document.querySelector("#c"), this._tile);
    this._snake = new Snake(this._tile - 1);
    this._borderObserver = new BordersObserver(this._tile);

    console.log(this._snake);

    this._snake.addObs(this._borderObserver);

    this._dir = {
      x: 0,
      y: 0
    };
  }

  start() {

    document.addEventListener('keydown', this._setDir);

    setInterval(() => {

      this._moveSnake();
      this._canvas.drawSnake(this._snake);

    }, 1000 / 10);
  }


  _moveSnake() {

    this._snake.move(this._dir);
  }

  _setDir(evt) {

    this._dir = KeyboardHelper[evt.code]();
    console.log(this._dir);

    console.log(this._snake);
  }
}
