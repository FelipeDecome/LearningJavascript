class Canvas {
  constructor(width, height, containerId) {
    this.width = width
    this.height = height
    this.containerId = containerId

    this.canvasInit()
  }

  canvasInit() {
    this.canvas = document.querySelector(this.containerId)
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.canvas.style.width = (this.width * 20) + "px"
    this.canvas.style.height = (this.height * 20) + "px"

    this.canvas.style.backgroundColor = "#eee";
    this.canvas.style.border = "10px solid #1DC6A7"

    this.canvas.style.imageRendering = "pixelated"
    this.canvas.style.imageRendering = "crisp-edges"
    this.canvas.style.imageRendering = "-moz-crisp-edges"

    this.context = this.canvas.getContext("2d")
  }

  draw(obj) {
    this.context.fillStyle = obj.color
    this.context.fillRect(obj.x, obj.y, obj.width, obj.height)
  }

  clear() {
    this.context.fillStyle = "white"
    this.context.clearRect(0, 0, this.width, this.height)
  }
}
