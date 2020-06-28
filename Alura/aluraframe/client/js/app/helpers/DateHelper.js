"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, DateHelper;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

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

      DateHelper = function () {
        function DateHelper() {
          _classCallCheck(this, DateHelper);

          throw new Error("Está classe não precisa ser instanciada.");
        }

        _createClass(DateHelper, null, [{
          key: "toDate",
          value: function toDate(string) {
            if (!/\d{2}\/\d{2}\/\d{4}/.test(string)) throw new Error("Data no formato errado, a data deve ser inserida no formato 'dd/mm/aaaa'.");

            return new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(string.split("/").reverse().map(function (item, ind) {
              return item - ind % 2;
            })))))();
          }
        }, {
          key: "toString",
          value: function toString(date) {
            return date.getDate() + "/0" + (date.getMonth() + 1) + "/" + date.getFullYear();
          }
        }]);

        return DateHelper;
      }();

      _export("default", DateHelper);
    }
  };
});
//# sourceMappingURL=DateHelper.js.map