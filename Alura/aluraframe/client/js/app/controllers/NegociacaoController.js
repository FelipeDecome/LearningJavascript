class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    this._ordenacao = "";

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($("#negociacoesView")),
      "adiciona",
      "esvazia",
      "sort",
      "sortInverse"
    );

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($("#mensagemView")),
      "texto"
    );

    this._service = new NegociacoesService();

    this._init();
  }

  _init() {
    this._service
      .lista()
      .then((negociacoes) =>
        negociacoes.forEach((negociacao) => {
          this._listaNegociacoes.adiciona(negociacao);
        })
      )
      .catch((e) => {
        console.log(e);
        this._mensagem.texto = e;
      });

    setInterval(() => {
      this.importarNegociacoes();
    }, 3000);
  }

  adiciona(event) {
    event.preventDefault();

    let negociacao = this._criaNegociacao();
    this._service
      .cadastrar(negociacao)
      .then((message) => {
        this._listaNegociacoes.adiciona(negociacao);
        this._mensagem.texto = message;

        this._limpaForm();
      })
      .catch((e) => (this._mensagem.texto = e));
  }

  importarNegociacoes() {
    this._service
      .importa(this._listaNegociacoes)
      .then((negociacoes) => {
        this._mensagem.texto = "Negociações importadas com sucesso";
        negociacoes.forEach((negociacao) =>
          this._listaNegociacoes.adiciona(negociacao)
        );
      })
      .catch((e) => (this._mensagem.texto = e));
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
    this._service
      .apaga()
      .then((message) => {
        this._mensagem.texto = message;
        this._listaNegociacoes.esvazia();
      })
      .catch((e) => (this._mensagem.texto = e));
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.toDate(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }

  _limpaForm() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }
}
