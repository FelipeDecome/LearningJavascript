class ArquivosHelper {

  static cria(dados) {
    return new Arquivo(...dados.toUpperCase().split('/'));
  }

}
