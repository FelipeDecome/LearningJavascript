class View {
  constructor(elemento) {

    this._elemento = elemento;
  }

  _header() {

    return ``;
  }

  _template(model) {
    throw new Error('O método template deve ser implementado');
  }

  _footer() {

    return ``;
  }

  update(model) {

    this._elemento.innerHTML = this._header() + this._template(model) + this._footer();
  }
}
