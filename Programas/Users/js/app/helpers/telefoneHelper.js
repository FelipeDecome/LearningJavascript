class TelefoneHelper {
  constructor() {
    throw new Error("Essa classe não deve ser instanciada.");
  }

  static valida(num) {
    return /^\(\d{2}\)\d{4,5}-\d{4}$/.test(num);
  }
}
