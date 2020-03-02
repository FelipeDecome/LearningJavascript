const containerId = "#canvas-container";
const canvasSize = [40, 40];
const snakeColor = "#1DC6A7";
const foodColor = "#FF3F3F";

let game;

window.onload = (e) => {
  // console.log(e)
  game = new Game(containerId, canvasSize, snakeColor, foodColor);

};

window.onkeydown = (e) => {
  let key = e.key
  // console.log(game)

  if (key === "p") {
    game.togglePlayPause()
  }

  game.setDirection(key)

};
