class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }


  adiciona(event) {
    event.preventDefault();

    let date = new Date(
      ...this._inputData.value
        .split("-")
        .map((item, ind) => item - ind % 2)
    );

    let negociacao = new Negociacao(
      date,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    let l = console.log.bind(console);
    l(negociacao);

  }
}
