const containerId = "#canvas-container";
const canvasSize = [600, 600];
const snakeColor = "#1DC6A7";
const foodColor = "#FF3F3F";

const container = document.querySelector("#canvas-container");
container.width = canvasSize[0];
container.height = canvasSize[1];

let ctx = container.getContext("2d");
ctx.fillStyle = "#92B901";
ctx.fillRect(50, 50, 100, 100);



console.log(Game);
