class NegociacaoController {
  constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($("#negociacoesView")),
      'adiciona', 'esvazia');

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

    let service = new NegociacoesService();

    Promise.all([
      service.obterNegociacoesSemana(),
      service.obterNegociacoesSemanaAnterior(),
      service.obterNegociacoesSemanaRetrasada()
    ]).then(negociacoes => {
      negociacoes.reduce((array, arrays) => array.concat(arrays), [])
        .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
      this._mensagem.texto = 'Negociações importadas com sucesso';
    }).catch(erro => this._mensagem.texto = erro);


    // service.obterNegociacoesSemana()
    //   .then(negociacoes => {
    //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
    //     this._mensagem.texto = "Negociações da semana obtidas com sucesso";
    //   })
    //   .catch(erro => this._mensagem.texto = erro);

    // service.obterNegociacoesSemanaAnterior()
    //   .then(negociacoes => {
    //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
    //     this._mensagem.texto = "Negociações da semana anterior obtidas com sucesso";
    //   })
    //   .catch(erro => this._mensagem.texto = erro);

    // service.obterNegociacoesSemanaRetrasada()
    //   .then(negociacoes => {
    //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
    //     this._mensagem.texto = "Negociações da semana retrasada obtidas com sucesso";
    //   })
    //   .catch(erro => this._mensagem.texto = erro);
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
