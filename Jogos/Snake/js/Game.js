class Game {
  constructor(containerId, canvasSize, snakeColor, foodColor) {
    this.direction = [1, 0]

    this.containerId = containerId
    this.canvasSize = canvasSize
    this.snakeColor = snakeColor
    this.foodColor = foodColor

    this.initGameVar = this.initGame()
  }

  render() {
    this.snake.snakeBody.forEach(object => {
      this.canvas.clear()
      this.canvas.draw(object)
    })

    requestAnimationFrame(this.render.bind(this))
  }

  stop() {
    console.log('Parei')

    window.cancelAnimationFrame(this.gameRun)
    clearInterval(this.move)
  }

  initGame() {
    console.log('Iniciando')

    if (this && typeof this.canvas !== 'object') {
      this.canvas = new Canvas(this.canvasSize[0], this.canvasSize[0], this.containerId)
    }
    if (this && typeof this.snake !== 'object') {
      this.snake = new Snake(this.snakeColor)
    }

    this.snake.addPieces(this.canvasSize[0] / 2, this.canvasSize[1] / 2)

    this.gameRun = requestAnimationFrame(this.render.bind(this))
    this.move = setInterval(this.moveSnake.bind(this), 200);
  }

  resetGame() {
    console.log('Resetando')
    this.stop()
    this.snake.resetPieces()
    this.direction = [1, 0]
    this.initGame()
  }

  setDirection(direction) {
    let sameDir;
    switch (direction) {
      case 'ArrowUp':
        sameDir = (this.direction == [0, -1]) ? true : false
        this.direction = [0, -1]
        break
      case 'ArrowLeft':
        sameDir = (this.direction == [-1, 0]) ? true : false
        this.direction = [-1, 0]
        break
      case 'ArrowDown':
        sameDir = (this.direction == [0, 1]) ? true : false
        this.direction = [0, 1]
        break
      case 'ArrowRight':
        sameDir = (this.direction == [1, 0]) ? true : false
        this.direction = [1, 0]
        break
    }
    if (!sameDir) {
      sameDir = true;
      this.moveSnake()
    }
  }

  moveSnake() {

    this.minX = this.snake.snakeBody[0].x >= 0
    this.maxX = this.snake.snakeBody[0].x <= (this.canvas.width - this.snake.snakeBody[0].width)
    this.minY = this.snake.snakeBody[0].y >= 0
    this.maxY = this.snake.snakeBody[0].y <= (this.canvas.height - this.snake.snakeBody[0].height)

    if (this.minX && this.maxX && this.minY && this.maxY) {
      console.log('Agora estou executando')
      this.snake.move(this.direction[0], this.direction[1])

    } else {
      this.resetGame()
    }

  }
}
