class KeyboardHelper {

  static ArrowLeft(game) {
    return {
      x: -1,
      y: 0
    };
  }
  static ArrowUp(game) {
    return {
      x: 0,
      y: -1
    };
  }
  static ArrowRight(game) {
    return {
      x: 1,
      y: 0
    };
  }
  static ArrowDown(game) {
    return {
      x: 0,
      y: 1
    };
  }
}
