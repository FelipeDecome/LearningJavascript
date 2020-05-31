class BordersObserver {
  constructor(tile) {
    this._tile = tile;
  }

  update(model) {

    if (model.x < 0) {

      model.x = this._tile - 1;
    }

    if (model.x > this._tile - 1) {

      model.x = 0;
    }

    if (model.y < 0) {

      model.y = this._tile - 1;
    }

    if (model.y > this._tile - 1) {

      model.y = 0;
    }
  }
}
