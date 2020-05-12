class Coifa {
  /**
   *
   * @param {Lenght} l Comprimento da Coifa
   * @param {Width} w Largura da Coifa
   * @param {Height} h Altura da Coifa
   */
  constructor(l, w, h) {
    this._l = l;
    this._w = w;
    this._h = h;

    // Altura da Base
    this._bh = h / 10 + 2;

    //Tamanho das Abas
    this.a = 4;
  }

  calcCostas() {
    let ch1L = this._l + 4;
    let ch1W = this._h + 7;
    let ch1 = ch1L + "x" + ch1W;

    return ch1;
  }

  calcLateral(type, size) {
    if (type == "tubo") {
      let bSup = size + 5;
      let cat1 = (this._l - bSup) / 2;
      let cat2 = this._h - this._bh;
      let hip = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2));

      console.log(hip);
    }
  }
}
