class NegociacoesService {
  constructor() {
    this._http = new HttpService();
  }

  obterNegociacoes() {
    return Promise.all([
      this.obterNegociacoesSemana(),
      this.obterNegociacoesSemanaAnterior(),
      this.obterNegociacoesSemanaRetrasada(),
    ])
      .then((periodos) =>
        periodos.reduce((dados, periodo) => dados.concat(periodo), [])
      )
      .catch((e) => {
        console.log(e);
        throw new Error("Não foi possível importar as negociações");
      });
  }

  obterNegociacoesSemana() {
    return this._http
      .get("negociacoes/semana")
      .then((negociacoes) => {
        console.log(negociacoes);
        return negociacoes.map(
          (obj) => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
        );
      })
      .catch((erro) => {
        console.log(erro);
        throw new Error("Não foi possível importar as negociações da semana.");
      });
  }

  obterNegociacoesSemanaAnterior() {
    return this._http
      .get("negociacoes/anterior")
      .then((negociacoes) => {
        console.log(negociacoes);
        return negociacoes.map(
          (obj) => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
        );
      })
      .catch((erro) => {
        console.log(erro);
        throw new Error(
          "Não foi possível importar as negociações da semana anterior."
        );
      });
  }

  obterNegociacoesSemanaRetrasada() {
    return this._http
      .get("negociacoes/retrasada")
      .then((negociacoes) => {
        console.log(negociacoes);
        return negociacoes.map(
          (obj) => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
        );
      })
      .catch((erro) => {
        console.log(erro);
        throw new Error(
          "Não foi possível importar as negociações da semana retrasada."
        );
      });
  }

  cadastrar(negociacao) {
    return ConnectionFactory.getConnection()
      .then((connection) => new NegociacaoDao(connection))
      .then((dao) => dao.adiciona(negociacao))
      .then(() => "Negociação adicionada com sucesso.")
      .catch((e) => {
        throw new Error("Não foi possível adicionar a negociação");
      });
  }

  lista() {
    return ConnectionFactory.getConnection()
      .then((connection) => new NegociacaoDao(connection))
      .then((dao) => dao.index())
      .catch((e) => {
        console.log(e);
        throw new Error("Não foi possível listar as negociações");
      });
  }

  apaga() {
    return ConnectionFactory.getConnection()
      .then((connection) => new NegociacaoDao(connection))
      .then((dao) => dao.apagaTodos())
      .catch((e) => {
        throw new Error(e);
      });
  }

  importa(listaAtual) {
    return this.obterNegociacoes().then((negociacoes) =>
      negociacoes.filter(
        (negociacao) =>
          !listaAtual.negociacoes.some((negociacaoExistente) =>
            negociacao.isEquals(negociacaoExistente)
          )
      )
    );
  }
}
