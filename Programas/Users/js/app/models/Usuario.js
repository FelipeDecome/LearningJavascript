class Usuario {
  constructor(nome, tel, pes, numReg, end) {
    this._nome = nome;
    this._tel = tel;
    this._pes = pes;
    this._numReg = numReg;
    this._end = end;
  }

  get nome() {
    return this._nome;
  }

  get tel() {
    return [].concat(this._tel);
  }

  get pes() {
    return this._pes;
  }

  get numReg() {
    return this._numReg;
  }

  get end() {
    return [].concat(this._end);
  }

}
