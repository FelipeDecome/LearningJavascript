class ListaUsuarios {
  constructor() {
    this._usuarios = [];
  }

  adiciona(usuario) {
    this._usuarios.push(usuario);
  }

  get usuarios() {
    return [].concat(this._usuarios);
  }

  limpa() {
    this._usuarios = [];
  }

}
