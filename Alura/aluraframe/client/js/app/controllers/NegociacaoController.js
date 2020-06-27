"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoController = function () {
  function NegociacaoController() {
    _classCallCheck(this, NegociacaoController);

    var $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    this._ordenacao = "";

    this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($("#negociacoesView")), "adiciona", "esvazia", "sort", "sortInverse");

    this._mensagem = new Bind(new Mensagem(), new MensagemView($("#mensagemView")), "texto");

    this._service = new NegociacoesService();

    this._init();
  }

  _createClass(NegociacaoController, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      this._service.lista().then(function (negociacoes) {
        return negociacoes.forEach(function (negociacao) {
          _this._listaNegociacoes.adiciona(negociacao);
        });
      }).catch(function (e) {
        console.log(e);
        _this._mensagem.texto = e;
      });

      setInterval(function () {
        _this.importarNegociacoes();
      }, 3000);
    }
  }, {
    key: "adiciona",
    value: function adiciona(event) {
      var _this2 = this;

      event.preventDefault();

      var negociacao = this._criaNegociacao();
      this._service.cadastrar(negociacao).then(function (message) {
        _this2._listaNegociacoes.adiciona(negociacao);
        _this2._mensagem.texto = message;

        _this2._limpaForm();
      }).catch(function (e) {
        return _this2._mensagem.texto = e;
      });
    }
  }, {
    key: "importarNegociacoes",
    value: function importarNegociacoes() {
      var _this3 = this;

      this._service.importa(this._listaNegociacoes).then(function (negociacoes) {
        _this3._mensagem.texto = "Negociações importadas com sucesso";
        negociacoes.forEach(function (negociacao) {
          return _this3._listaNegociacoes.adiciona(negociacao);
        });
      }).catch(function (e) {
        return _this3._mensagem.texto = e;
      });
    }
  }, {
    key: "sort",
    value: function sort(prop) {
      if (this._ordenacao == prop) {
        this._listaNegociacoes.sortInverse();
      } else {
        this._listaNegociacoes.sort(prop);
      }

      this._ordenacao = prop;
    }
  }, {
    key: "esvazia",
    value: function esvazia() {
      var _this4 = this;

      this._service.apaga().then(function (message) {
        _this4._mensagem.texto = message;
        _this4._listaNegociacoes.esvazia();
      }).catch(function (e) {
        return _this4._mensagem.texto = e;
      });
    }
  }, {
    key: "_criaNegociacao",
    value: function _criaNegociacao() {
      return new Negociacao(DateHelper.toDate(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
    }
  }, {
    key: "_limpaForm",
    value: function _limpaForm() {
      this._inputData.value = "";
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0;

      this._inputData.focus();
    }
  }]);

  return NegociacaoController;
}();
//# sourceMappingURL=NegociacaoController.js.map