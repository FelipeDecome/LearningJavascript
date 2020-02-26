class Canvas {
  constructor(width, height, canvas) {
    this.width = width;
    this.height = height;
    // this.canvas = canvas;
    this.canvas = canvas.getContext("2d");
  }

  draw(obj) {
    this.canvas.fillStyle = obj.color;
    this.canvas.fillRect(obj.x, obj.y, obj.width, obj.height);
  }

  clean() {
    this.canvas.fillStyle = "white";
    this.canvas.clearRect(0, 0, this.width, this.height);
  }
}
