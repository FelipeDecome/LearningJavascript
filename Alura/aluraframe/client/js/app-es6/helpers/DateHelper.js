class DateHelper {

  constructor() {
    throw new Error("Está classe não precisa ser instanciada.");
  }

  static toDate(string) {

    if (!/\d{2}\/\d{2}\/\d{4}/.test(string)) throw new Error("Data no formato errado, a data deve ser inserida no formato 'dd/mm/aaaa'.");

    return new Date(
      ...string.split("/")
      .reverse()
      .map((item, ind) => item - ind % 2)
    );
  }

  static toString(date) {
    return `${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`;
  }

}
