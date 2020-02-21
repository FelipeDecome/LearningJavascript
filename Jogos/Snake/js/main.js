const containerId = "#canvas-container";
const canvasSize = [600, 600];
const snakeColor = "#1DC6A7";
const foodColor = "#FF3F3F";

let Game = {
  Canvas: {
    width: canvasSize[0],
    height: canvasSize[1]
  },
  Snake: {
    body: [],
    x: 0,
    y: 0,
    color: snakeColor,
    get snake() {
      return this;
    }
  },
  Food: {
    x: 0,
    y: 0,
    color: foodColor,
    get position() {
      return [this.x, this.y];
    }
  },
  colide() {},
  getContainer() {
    return document.querySelector(containerId);
  }
};
console.log(Game);
