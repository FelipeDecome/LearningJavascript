export default class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = [];
  }

  get volumeTotal() {
    return this._negociacoes.reduce((t, n) => t + n.volume, 0.0);
  }

  sort(prop) {
    this._negociacoes.sort((a, b) => a[prop] - b[prop]);
  }

  sortInverse() {
    this._negociacoes.reverse();
  }
}
