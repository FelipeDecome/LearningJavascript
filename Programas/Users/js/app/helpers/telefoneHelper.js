class TelefoneHelper {
  constructor(num) {
    if (this._valida(num)) throw new Error("O telefone informado não está no formato correto '${num}. O número deve estar no formato ' (99) 12345-6789.'");
    this._num = num;
  }

  //dd ttttt tttt
  _valida(num) {
    return /^\d{2} \d{4,5} \d{4}$/.test(num);
  }

  //(dd) ttttt-tttt
  //dd ttttt tttt
  _limpaTel(num) {
    return num
      .split(" ")
      .map((telefone, index) => (index % 2) ? telefone.split("-") : telefone.substr(1, 2))
      .join(" ");
  }
}
