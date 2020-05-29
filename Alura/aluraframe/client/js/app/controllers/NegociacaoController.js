class NegociacaoController {
  constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    this._ordenacao = '';

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($("#negociacoesView")),
      'adiciona', 'esvazia', 'sort', 'sortInverse');

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($("#mensagemView")),
      'texto');

  }

  adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = "Negociação adicionada com sucesso.";

    this._limpaForm();
  }

  importarNegociacoes() {

    let service = new NegociacoesService()

    service
      .obterNegociacoes()
      .then(negociacoes => {
        negociacoes.forEach(negociacao =>
          this._listaNegociacoes.adiciona(negociacao));
        this._mensagem.texto = 'Negociações importadas com sucesso';
      })
      .catch(erro =>
        this._mensagem.texto = erro);
  }

  sort(prop) {

    if (this._ordenacao == prop) {

      this._listaNegociacoes.sortInverse();
    } else {

      this._listaNegociacoes.sort(prop);
    }

    this._ordenacao = prop;
  }

  esvazia() {

    this._listaNegociacoes.esvazia();
    this._mensagem.texto = "Negociações apagadas com sucesso.";
  }

  _criaNegociacao() {

    return new Negociacao(
      DateHelper.toDate(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaForm() {

    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }
}
