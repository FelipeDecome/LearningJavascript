"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, ListaNegociacoes;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      ListaNegociacoes = function () {
        function ListaNegociacoes() {
          _classCallCheck(this, ListaNegociacoes);

          this._negociacoes = [];
        }

        _createClass(ListaNegociacoes, [{
          key: "adiciona",
          value: function adiciona(negociacao) {
            this._negociacoes.push(negociacao);
          }
        }, {
          key: "esvazia",
          value: function esvazia() {
            this._negociacoes = [];
          }
        }, {
          key: "sort",
          value: function sort(prop) {
            this._negociacoes.sort(function (a, b) {
              return a[prop] - b[prop];
            });
          }
        }, {
          key: "sortInverse",
          value: function sortInverse() {
            this._negociacoes.reverse();
          }
        }, {
          key: "negociacoes",
          get: function get() {
            return [].concat(this._negociacoes);
          }
        }, {
          key: "volumeTotal",
          get: function get() {
            return this._negociacoes.reduce(function (t, n) {
              return t + n.volume;
            }, 0.0);
          }
        }]);

        return ListaNegociacoes;
      }();

      _export("default", ListaNegociacoes);
    }
  };
});
//# sourceMappingURL=ListaNegociacoes.js.map