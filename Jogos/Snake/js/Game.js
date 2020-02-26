class Game {
  constructor(canvasContainer, canvasSize, snakeColor, foodColor) {
    this.canvasContainer = canvasContainer;
    this.canvasSize = canvasSize;
    this.snakeColor = snakeColor;
    this.foodColor = foodColor;
    this.direction = [0, 0];
  }

  setDirection() {
    window.onkeypress = (event) => {
      console.log(event.keyCode);
    }
  }

  static run() {
    let gameRun = setInterval(() => {

    }, 300);

    return gameRun;
  }

  static stop(gameRun) {
    clearInterval(gameRun);
  }
}
