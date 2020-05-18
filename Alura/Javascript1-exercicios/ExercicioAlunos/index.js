let avaliacoes = [
  new Prova(new Aluno(1, "Felipe"), 8),
  new Prova(new Aluno(2, "Mauricio"), 5),
  new Prova(new Aluno(3, "Ana Clara"), 6),
  new Prova(new Aluno(4, "Roberto"), 10)
];

let aprovados =
  avaliacoes
    .filter(prova => prova.nota >= 7)
    .map(prova => prova.aluno.nome);

console.log(aprovados);
