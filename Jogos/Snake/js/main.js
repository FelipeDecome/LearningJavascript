const containerId = "#canvas-container";
const canvasSize = [300, 300];
const snakeColor = "#1DC6A7";
const foodColor = "#FF3F3F";

const container = document.querySelector("#canvas-container");
container.width = canvasSize[0];
container.height = canvasSize[1];
container.style.border = "1px solid #ccc";

let ctx = container.getContext("2d");

let canvas = new Canvas(canvasSize[0], canvasSize[1], ctx);

let snake = new Snake();
let snakePiece = new SnakePiece(0, 0, snakeColor, 10);

// ctx.fillStyle = snakePiece.color;
// ctx.fillRect(snakePiece.x, snakePiece.y, 10, 10);

canvas.draw(snakePiece);

snakePiece.x += 100;

setTimeout(() => {
  canvas.clean();
  canvas.draw(snakePiece);
}, 2000);

// console.log(Game);
