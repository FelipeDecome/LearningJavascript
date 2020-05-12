class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }


  adiciona(event) {
    event.preventDefault();

    let negociacao = new Negociacao(
      DateHelper.toDate(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    let l = console.log.bind(console);

    l(negociacao, DateHelper.toString(negociacao.data))

  }
}
