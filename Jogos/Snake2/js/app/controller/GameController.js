class GameController {
  constructor() {
    this._gridSize = 20;
    this._tileSize = 20;

    this._canvas = new Canvas(document.querySelector("#c"), this._tileSize);
    this._snake = new Snake(this._tileSize - 1);
    this._borderObserver = new BordersObserver(this._gridSize);

    // this._food = new Food(this._tileSize - 1);

    this._snake.addObs(this._borderObserver);

    this._dir = {
      x: 0,
      y: 0
    };
  }

  start() {

    document.addEventListener('keydown', this._setDir.bind(this));

    setInterval(() => {

      this._moveSnake();
      this._canvas.drawSnake(this._snake);
      this._snake.moveTail();

    }, 1000 / 10);
  }


  _moveSnake() {

    this._snake.move(this._dir);
  }

  _setDir(evt) {
    console.log(evt);

    this._dir = KeyboardHelper[evt.code]();

    console.log(this._snake);
  }

}
