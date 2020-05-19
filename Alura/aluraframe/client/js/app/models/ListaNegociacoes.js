class ListaNegociacoes {

  constructor(trigger) {

    this._negociacoes = [];
    this._trigger = trigger;
  }

  adiciona(negociacao) {

    this._negociacoes.push(negociacao);
    this._trigger(this);
    // Reflect.apply(this._trigger, this._context, [this]);
  }

  get negociacoes() {

    return [].concat(this._negociacoes);
  }

  esvazia() {

    this._negociacoes = [];
    this._trigger(this);
    // Reflect.apply(this._trigger, this._context, [this]);
  }
}
