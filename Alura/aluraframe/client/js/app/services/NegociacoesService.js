class NegociacoesService {
  constructor() {
    this._http = new HttpService();
  }

  obterNegociacoesSemana() {

    return new Promise((resolve, reject) => {

      this._http
        .get('negociacoes/semana')
        .then(negociacoes => {
          console.log(negociacoes);
          resolve(negociacoes.map(obj =>
            new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
        })
        .catch(erro => {
          console.log(erro);
          reject("Não foi possível importar as negociações da semana.");
        });
    });
  }

  obterNegociacoesSemanaAnterior() {

    return new Promise((resolve, reject) => {

      this._http
        .get('negociacoes/anterior')
        .then(negociacoes => {
          console.log(negociacoes);
          resolve(negociacoes.map(obj =>
            new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
        })
        .catch(erro => {
          console.log(erro);
          reject("Não foi possível importar as negociações da semana anterior.");
        });
    });
  }

  obterNegociacoesSemanaRetrasada() {

    return new Promise((resolve, reject) => {

      this._http
        .get('negociacoes/retrasada')
        .then(negociacoes => {
          console.log(negociacoes);
          resolve(negociacoes.map(obj =>
            new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
        })
        .catch(erro => {
          console.log(erro);
          reject("Não foi possível importar as negociações da semana retrasada.");
        });
    });
  }
}
