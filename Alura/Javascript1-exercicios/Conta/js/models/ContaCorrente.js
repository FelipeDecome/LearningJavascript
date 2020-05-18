class ContaCorrente extends Conta {

  update(taxa) {
    this._saldo = this._saldo + taxa;
  }

}
