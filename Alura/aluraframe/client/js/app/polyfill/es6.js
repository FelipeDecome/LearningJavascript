"use strict";

if (!Array.prototype.inclues) {
  console.log("Polyfill para Array.inlcudes aplicado.");
  Array.prototype.includes = function (elemento) {
    return this.indexOf(elemento) != -1;
  };
}
//# sourceMappingURL=es6.js.map