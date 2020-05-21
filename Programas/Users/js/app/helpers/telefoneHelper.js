class TelefoneHelper extends Helpers {

  static valida(num) {
    if (!/^\(\d{2}\)\d{4,5}-\d{4}$/.test(num)) {
      throw new Error(`Telefone no formato errado. Número informado '${num}' | Formato correto '(12)3456-7890 / (01)23456-7890'`)
    }

    return num;
  }
}
