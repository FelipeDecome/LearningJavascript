class Game {
  constructor(containerId, canvasSize, snakeColor, foodColor) {
    this.direction = [1, 0]

    this.containerId = containerId
    this.canvasSize = canvasSize
    this.snakeColor = snakeColor
    this.foodColor = foodColor

    this.initGame()
  }

  setDirection(x, y) {
    this.direction = [x, y]
  }

  /*   run() {
      let gameRun = setInterval(() => {

        let minX = this.snake.snakeBody[0].x >= 0
        let maxX = this.snake.snakeBody[0].x < (this.canvas.width - this.snake.snakeBody[0].width)
        let minY = this.snake.snakeBody[0].y >= 0
        let maxY = this.snake.snakeBody[0].y < (this.canvas.height - this.snake.snakeBody[0].height)

        if (minX && maxX && minY && maxY) {
          this.snake.move(this.direction[0], this.direction[1])
          this.snake.snakeBody.forEach(object => {
            this.canvas.clear()
            this.canvas.draw(object)
          })
        } else {
          this.resetGame()
        }

      }, 1000)
      // console.log(this)
      return gameRun
    }
   */
  run() {
    console.log(this.snake, this)
    let minX = this.snake.snakeBody[0].x >= 0
    let maxX = this.snake.snakeBody[0].x < (this.canvas.width - this.snake.snakeBody[0].width)
    let minY = this.snake.snakeBody[0].y >= 0
    let maxY = this.snake.snakeBody[0].y < (this.canvas.height - this.snake.snakeBody[0].height)

    if (minX && maxX && minY && maxY) {
      this.snake.move(this.direction[0], this.direction[1])
      this.snake.snakeBody.forEach(object => {
        this.canvas.clear()
        this.canvas.draw(object)
      })
    } else {
      this.resetGame()
    }

    console.log(this)
    return requestAnimationFrame(this.run)
  }

  stop() {
    window.cancelAnimationFrame(this.gameRun)
  }

  initGame() {
    if (typeof this.canvas != 'object') {
      this.canvas = new Canvas(canvasSize[0], canvasSize[0], containerId)
    }
    if (typeof this.snake != 'object') {
      this.snake = new Snake(this.snakeColor)
    }

    console.log(typeof this.canvas, typeof this.snake)


    this.snake.addPieces(0, 0)

    this.gameRun = this.run()
  }

  resetGame() {
    this.stop()
    this.snake.resetPieces()
    this.initGame()
  }
}
