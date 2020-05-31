class Snake {
  constructor(size) {

    this._size = size;

    this._x = 9;
    this._y = 9;

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

  get size() {

    return this._size;
  }

  set x(newX) {

    this._x = newX;
  }

  set y(newY) {

    this._y = newY;
  }

  move(dir) {
    this._x = this._x + dir.x;
    this._y = this._y + dir.y;

    this._notifyObs();
  }

  moveTail() {
    this._trail.push({
      x: this._x,
      y: this.y
    });
    while (this._trail > tail) {
      this._trail.shift();
    }
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
