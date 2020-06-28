import currentInstance from "./controllers/NegociacaoController.js";

const negociacaoController = currentInstance();

document.querySelector("#form").onsubmit = negociacaoController.adiciona.bind(
  negociacaoController
);

document.querySelector("#apagar").onsubmit = negociacaoController.esvazia.bind(
  negociacaoController
);
