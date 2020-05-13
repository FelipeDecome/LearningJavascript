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

  getCostas() {
    let chL = this._l + 4;
    let chW = this._h + 7;
    return `${Math.ceil(chL)} x ${Math.ceil(chW)}`;
  }

  getLateral(type, size) {
    let bSup;

    if (type == "tubo") {
      bSup = size + 5;

    } else if (type == "base") {
      bSup = size;
    }

    let cat1 = (this._l - bSup) / 2;
    let cat2 = this._h - this._bh;

    let chL = this._w + 2;
    let chW = MathHelper.pitagoras(cat1, cat2) + this._bh + 7;
    return `${Math.ceil(chL)} x ${Math.ceil(chW)}`;

  }

  getFrente(type, size) {
    let bSup;

    if (type == "tubo") {
      bSup = size + 5;

    } else if (type == "base") {
      bSup = size;
    }

    let cat1 = this._w - bSup;
    let cat2 = this._h - this._bh;

    let chL = this._w + 4;
    let chW = MathHelper.pitagoras(cat1, cat2) + this._bh + 7;

    return `${Math.ceil(chL)} x ${Math.ceil(chW)}`;
  }

}
