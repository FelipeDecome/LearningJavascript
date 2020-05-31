class Snake {
  constructor(size) {

    this._size = size;

    this._x = 9;
    this._y = 9;

    this._color = "lime";

    this._tail = 5;
    this._trail = [];

    this._observers = [];
  }

  get x() {

    return this._x;
  }

  get y() {

    return this._y;
  }

  get trail() {

    return [].concat(this._trail);
  }

  get size() {

    return this._size;
  }

  get color() {

    return this._color;
  }

  set x(newX) {

    this._x = newX;
  }

  set y(newY) {

    this._y = newY;
  }

  set tail(newT) {

    this._tail = newT;
  }

  move(dir) {
    this._x += dir.x;
    this._y += dir.y;

    this._notifyObs();
  }

  moveTail() {
    this._trail.push({
      x: this._x,
      y: this._y
    });
    while (this._trail.length > this._tail) {
      this._trail.shift();
    }
  }

  resetSnake() {
    this._x = 9;
    this._y = 9;

    this._tail = 5;
  }

  addObs(o) {

    this._observers.push(o);
  }

  _notifyObs() {

    for (let o of this._observers) {
      o.update(this);
    }
  }

}
