import View from "./View.js";
import DateHelper from "./../helpers/DateHelper.js";
import currentInstance from "./../controllers/NegociacaoController.js";

export default class NegociacoesView extends View {
  constructor(elemento) {
    super(elemento);

    elemento.addEventListener("click", (e) => {
      if (e.target.nodeName == "TH")
        currentInstance().sort(event.target.textContent.toLowerCase());
    });
  }

  template(model) {
    return `
    <table class="table table-hover table-bordered">
    <thead>
      <tr>
        <th>DATA</th>
        <th>QUANTIDADE</th>
        <th>VALOR</th>
        <th>VOLUME</th>
      </tr>
    </thead>

    <tbody>
      ${model.negociacoes
        .map(
          (n) => `

          <tr>
            <td>${DateHelper.toString(n.data)}</td>
            <td>${n.quantidade}</td>
            <td>${n.valor}</td>
            <td>${n.volume}</td>
          </tr>

      `
        )
        .join("")}
    </tbody>

    <tfoot>
      <th colspan="3" class="text-center">Total</th>
      <td>${model.volumeTotal}</td>
    </tfoot>
    </table>
  `;
  }
}
