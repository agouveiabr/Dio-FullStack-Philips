const alunos = [
  {
    nome: "João",
    nota: 5,
    turma: "1B",
  },
  {
    nome: "Sofia",
    nota: 9,
    turma: "1B",
  },
  {
    nome: "Paulo",
    nota: 6,
    turma: "2C",
  },
];

function alunosAprovados(arr, media) {
  aprovados = [];

  for (i in arr) {
    const { nome, nota } = arr[i];

    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados;
}

console.log(alunosAprovados(alunos, 7));
