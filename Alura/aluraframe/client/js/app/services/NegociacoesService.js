class NegociacoesService {
  constructor() {
    this._http = new HttpService();
  }

  obterNegociacoes() {

    return Promise.all([
        this.obterNegociacoesSemana(),
        this.obterNegociacoesSemanaAnterior(),
        this.obterNegociacoesSemanaRetrasada()
      ])
      .then(periodos =>
        periodos.reduce((dados, periodo) => dados.concat(periodo), []))
      .catch(erro => {
        throw new Erro(erro);
      });
  }

  obterNegociacoesSemana() {

    return this._http
      .get('negociacoes/semana')
      .then(negociacoes => {
        console.log(negociacoes);
        return negociacoes.map(obj =>
          new Negociacao(new Date(obj.data), obj.quantidade, obj.valor));
      })
      .catch(erro => {
        console.log(erro);
        throw new Error("Não foi possível importar as negociações da semana.");
      });
  }

  obterNegociacoesSemanaAnterior() {

    return this._http
      .get('negociacoes/anterior')
      .then(negociacoes => {
        console.log(negociacoes);
        return negociacoes.map(obj =>
          new Negociacao(new Date(obj.data), obj.quantidade, obj.valor));
      })
      .catch(erro => {
        console.log(erro);
        throw new Error("Não foi possível importar as negociações da semana anterior.");
      });
  }

  obterNegociacoesSemanaRetrasada() {

    return this._http
      .get('negociacoes/retrasada')
      .then(negociacoes => {
        console.log(negociacoes);
        return negociacoes.map(obj =>
          new Negociacao(new Date(obj.data), obj.quantidade, obj.valor));
      })
      .catch(erro => {
        console.log(erro);
        throw new Error("Não foi possível importar as negociações da semana retrasada.");
      });
  }
}
