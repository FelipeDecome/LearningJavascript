class DateHelper {

  constructor() {
    throw new Error("Está classe não precisa ser instanciada.");
  }

  static toDate(string) {

    if (!/\d{4}-\d{2}-\d{2}/.test(string)) throw new Error("Data no formato errado, a data deve ser inserida no formato 'aaaa-mm-dd'");

    return new Date(...string.split("-").map((item, ind) => item - ind % 2));
  }

  static toString(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

}
