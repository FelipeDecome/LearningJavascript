class UsuarioController {
  constructor() {

    let $ = document.querySelector.bind(document);

    this._nome = $("#name");
    this._tel = $("#tel");
    this._cpfcnpj = $("#cpfcnpj");
    this._end = $("#end");

    this._listaUsuarios = new Bind(
      new ListaUsuarios(),
      new UsuariosView($("#usuarios")),
      "adiciona");

    this._mensagem = new Mensagem();

    this._mensagemView = new MensagemView($("#mensagem"));
    this._mensagemView.update(this._mensagem);

  }

  adiciona() {

    event.preventDefault();

    this._mensagem.texto = "Usuário adicionado com sucesso.";
    this._mensagemView.update(this._mensagem);

    this._limpaForm();
  }

  _limpaForm() {

    this._nome.value = '';
    this._tel.value = '';
    this._cpfcnpj.value = '';
    this._end.value = '';
  }

  _criaUsuario() {

    return this._usuario = new Usuario(...this._getDataArray());
  }

  _getDataArray() {

    return [
      DataHelper.validName(this._nome.value),
      DataHelper.validTel(this._tel.value),
      DataHelper.validCpfCnpj(this._cpfcnpj.value),
      DataHelper.validEnd(this._end.value)
    ];
  }
}
