class Conta {
  constructor(saldo) {
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  update(taxa) {
    throw new Error("O metodo update deve ser implementado.");
  }

}
