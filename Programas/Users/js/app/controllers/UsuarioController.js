class UsuarioController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._nome = $("#nome");
    this._tel = $("#tel");
    this._pessoa = [$("#pessoa1"), $("#pessoa1")];
    this._rgcnpj = $("#rgcnpj");
    this._end = $("#end");

  }

  adiciona() {
    //adciona novo usuário na lista

    console.log(this);

    this._limpaForm;
  }

  _limpaForm() {
    //Limpa os campos do Formulário
  }
}
