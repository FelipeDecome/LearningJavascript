class NegociacaoController {

  adiciona(event) {
    event.preventDefault();

    let $ = document.querySelector.bind(document);
    let inputData = $("#data");
    let inputQuantidade = $("#quantidade");
    let inputValor = $("#valor");

    let l = console.log.bind(console);
    l(inputData.value);
    l(inputQuantidade.value);
    l(inputValor.value);
  }
}
