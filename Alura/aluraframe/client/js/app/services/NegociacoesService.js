"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacoesService = function () {
  function NegociacoesService() {
    _classCallCheck(this, NegociacoesService);

    this._http = new HttpService();
  }

  _createClass(NegociacoesService, [{
    key: "obterNegociacoes",
    value: function obterNegociacoes() {
      return Promise.all([this.obterNegociacoesSemana(), this.obterNegociacoesSemanaAnterior(), this.obterNegociacoesSemanaRetrasada()]).then(function (periodos) {
        return periodos.reduce(function (dados, periodo) {
          return dados.concat(periodo);
        }, []);
      }).catch(function (e) {
        console.log(e);
        throw new Error("Não foi possível importar as negociações");
      });
    }
  }, {
    key: "obterNegociacoesSemana",
    value: function obterNegociacoesSemana() {
      return this._http.get("negociacoes/semana").then(function (negociacoes) {
        console.log(negociacoes);
        return negociacoes.map(function (obj) {
          return new Negociacao(new Date(obj.data), obj.quantidade, obj.valor);
        });
      }).catch(function (erro) {
        console.log(erro);
        throw new Error("Não foi possível importar as negociações da semana.");
      });
    }
  }, {
    key: "obterNegociacoesSemanaAnterior",
    value: function obterNegociacoesSemanaAnterior() {
      return this._http.get("negociacoes/anterior").then(function (negociacoes) {
        console.log(negociacoes);
        return negociacoes.map(function (obj) {
          return new Negociacao(new Date(obj.data), obj.quantidade, obj.valor);
        });
      }).catch(function (erro) {
        console.log(erro);
        throw new Error("Não foi possível importar as negociações da semana anterior.");
      });
    }
  }, {
    key: "obterNegociacoesSemanaRetrasada",
    value: function obterNegociacoesSemanaRetrasada() {
      return this._http.get("negociacoes/retrasada").then(function (negociacoes) {
        console.log(negociacoes);
        return negociacoes.map(function (obj) {
          return new Negociacao(new Date(obj.data), obj.quantidade, obj.valor);
        });
      }).catch(function (erro) {
        console.log(erro);
        throw new Error("Não foi possível importar as negociações da semana retrasada.");
      });
    }
  }, {
    key: "cadastrar",
    value: function cadastrar(negociacao) {
      return ConnectionFactory.getConnection().then(function (connection) {
        return new NegociacaoDao(connection);
      }).then(function (dao) {
        return dao.adiciona(negociacao);
      }).then(function () {
        return "Negociação adicionada com sucesso.";
      }).catch(function (e) {
        throw new Error("Não foi possível adicionar a negociação");
      });
    }
  }, {
    key: "lista",
    value: function lista() {
      return ConnectionFactory.getConnection().then(function (connection) {
        return new NegociacaoDao(connection);
      }).then(function (dao) {
        return dao.index();
      }).catch(function (e) {
        console.log(e);
        throw new Error("Não foi possível listar as negociações");
      });
    }
  }, {
    key: "apaga",
    value: function apaga() {
      return ConnectionFactory.getConnection().then(function (connection) {
        return new NegociacaoDao(connection);
      }).then(function (dao) {
        return dao.apagaTodos();
      }).catch(function (e) {
        throw new Error(e);
      });
    }
  }, {
    key: "importa",
    value: function importa(listaAtual) {
      return this.obterNegociacoes().then(function (negociacoes) {
        return negociacoes.filter(function (negociacao) {
          return !listaAtual.negociacoes.some(function (negociacaoExistente) {
            return negociacao.isEquals(negociacaoExistente);
          });
        });
      });
    }
  }]);

  return NegociacoesService;
}();
//# sourceMappingURL=NegociacoesService.js.map