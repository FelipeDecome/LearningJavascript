class ListaUsuario {
  constructor() {
    this._usuarios = [];
  }

  adciona(usuario) {
    this._usuarios.push(usuario);
  }

  get usuarios() {
    return [].concat(this._usuarios);
  }

  limpa() {
    this._usuarios = [];
  }

}
