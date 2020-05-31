class Food {
  constructor(size) {

    this._size = size;
    this._x;
    this._y;
  }

  get x() {

    return this._x;
  }

  get y() {

    return this._y;
  }

  set x(newX) {

    this._x = newX;
  }

  set y(newy) {

    this._y = newY;
  }

  randomPos() {
    let ranX = Math.floor(Math.random());
    let ranY = Math.floor(Math.random());
  }
}
