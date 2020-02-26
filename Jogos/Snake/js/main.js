const containerId = "#canvas-container";
const canvasSize = [300, 300];
const snakeColor = "#1DC6A7";
const foodColor = "#FF3F3F";

const container = document.querySelector("#canvas-container");
container.width = canvasSize[0];
container.height = canvasSize[1];
container.style.border = "1px solid #ccc";

let canvas = new Canvas(canvasSize[0], canvasSize[1], container);

let snake = new Snake();
let snakePiece = new SnakePiece(0, 0, snakeColor, 10);
let snakePiece2 = new SnakePiece(0, 10, snakeColor, 10);
let snakePiece3 = new SnakePiece(0, 20, snakeColor, 10);
let snakePiece4 = new SnakePiece(0, 30, snakeColor, 10);

snake.addPieces(snakePiece);
snake.addPieces(snakePiece2);
snake.addPieces(snakePiece3);
snake.addPieces(snakePiece4);

snake.snakeBody.forEach(object => {
  canvas.draw(object);
});

// setInterval(() => {
//   snake.move(10, 0);
//   canvas.clean();
//   snake.snakeBody.forEach(object => {
//     canvas.draw(object);
//   });
// }, 200);

console.log(snake);
