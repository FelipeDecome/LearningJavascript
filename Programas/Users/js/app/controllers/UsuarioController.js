class UsuarioController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._nome = $("#nome");
    this._tel = $("#tel");
    this._rgcnpj = $("#rgcnpj");
    this._end = $("#end");

  }

  adiciona() {
    event.preventDefault();
    //adciona novo usuário na lista

    console.log(this);

    this._getData();

    this._limpaForm;
  }

  _limpaForm() {
    this._nome.value = '';
    this._tel.value = '';
    this._rgcnpj.value = '';
    this._end.value = '';
  }

  _criaUsuario() {
    this._usuario = new Usuario(...DataHelper.prepare(this._getData()));
  }

  _getData() {
    return {
      nome: this._nome.value,
      tel: TelefoneHelper.valida(this._tel.value),
      rgcnpj: this._rgcnpj.value,
      end: this._end.value
    }
  }
}
