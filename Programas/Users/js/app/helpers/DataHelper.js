class DataHelper extends Helpers {

  static validName(name) {
    if (name == "" || name == null) {
      throw new Error("Preencha o campo Nome.");
    }

    return name;
  }

  static validTel(tel) {
    if (!/^\(\d{2}\)\d{4,5}-\d{4}$/.test(tel)) {
      throw new Error(`Telefone no formato errado. Número informado '${tel}' | Formato correto '(12)3456-7890 / (01)23456-7890'`)
    }

    return tel;
  }

  static validCpfCnpj(cpfcnpj) {
    //* 000.000.000-00 && 00.000.000/0000-00
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpfcnpj) && !/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(cpfcnpj)) {
      throw new Error("Número do documento no formato errado. O número não corresponde à um CPF ou CNPJ válido");
    }

    return cpfcnpj;
  }

  static validEnd(end) {
    if (end == "" || end == null) {
      throw new Error("Preencha o campo Endereço.");
    }

    return end;
  }
}
