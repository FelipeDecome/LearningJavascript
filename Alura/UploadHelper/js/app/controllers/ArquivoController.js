class ArquivoController {
  constructor() {
    this._inputDados = document.querySelector(".dados-arquivo");
  }

  envia() {

    let arquivo = ArquivosHelper.cria(this._inputDados.value);

    console.log(arquivo.nome, arquivo.tamanho, arquivo.tipo);
    this._limpaForm();


  }

  _limpaForm() {
    this._inputDados.value = '';
    this._inputDados.focus();
  }

}
