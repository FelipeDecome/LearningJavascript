class Usuario {
  constructor(nome, tel, rgcnpj, end) {
    this._nome = nome;
    this._tel = tel; //[]
    this._rgcnpj = rgcnpj;
    this._end = end; //[]
  }

  get nome() {
    return this._nome;
  }

  get tel() {
    return [].concat(this._tel);
  }

  get rgcnpj() {
    return this._rgcnpj;
  }

  get end() {
    return [].concat(this._end);
  }

}
