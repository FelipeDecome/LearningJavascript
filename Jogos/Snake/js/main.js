const containerId = "#canvas-container";
const canvasSize = [40, 40];
const snakeColor = "#1DC6A7";
const foodColor = "#FF3F3F";

let game = new Game(containerId, canvasSize, snakeColor, foodColor);

window.onload = (e) => {
  // console.log(e)
  game.initGame()
};

