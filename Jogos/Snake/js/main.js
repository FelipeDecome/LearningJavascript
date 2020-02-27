const containerId = "#canvas-container";
const canvasSize = [300, 300];
const snakeColor = "#1DC6A7";
const foodColor = "#FF3F3F";

const container = document.querySelector("#canvas-container");
container.width = canvasSize[0];
container.height = canvasSize[1];
container.style.border = "1px solid #ccc";

// let canvas = new Canvas(canvasSize[0], canvasSize[1], container);

let game = new Game(container, canvasSize, snakeColor, foodColor);

let run = game.run();

// game.stop(run);

console.log(game);
