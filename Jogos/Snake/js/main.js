let Game = {
  containerId: "#canvas-container",
  canvasSize: [600, 600],
  snakeColor: "#1DC6A7",
  foodColor: "#FF3F3F",

  GameElements: {
    Canvas: {
      width: this.canvasSize[0],
      height: this.canvasSize[1]
    },
    Snake: {
      x: 0,
      y: 0,
      color: this.snakeColor
    },
    Food: {
      x: 0,
      y: 0,
      color: this.foodColor
    }
  },

  getContainer() {
    return document.querySelector(this.containerId);
  }
};
