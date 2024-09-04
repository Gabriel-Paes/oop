import { Aluno } from "./models/aluno";
import { Turma } from "./models/turma";
import { Disciplina } from "./models/disciplina";

import alunos from "./data/alunos.json";

const disciplina1 = new Disciplina("Sistemas distribuídos", "SD1");
const disciplina2 = new Disciplina("Desenvolvimento Web", "DW1");

console.log("Disciplinas:\n");
disciplina1.toString();
disciplina2.toString();

const turma1 = new Turma("SD-001", disciplina1);
const turma2 = new Turma("DW-001", disciplina2);

alunos.forEach((aluno, index) => {
  if (index % 2 === 0) {
    turma1.adicionarAluno(new Aluno(aluno.nome, aluno.matricula, aluno.email));
  } else {
    turma2.adicionarAluno(new Aluno(aluno.nome, aluno.matricula, aluno.email));
  }
});

const alunosTurma1 = turma1.listarAlunos();

console.log(
  `\nAlunos da turma de ${turma1.disciplina.nome}(${turma1.codigo})\n`
);

alunosTurma1.forEach((aluno) => {
  aluno.toString();
});

const alunoEspecifico = turma1.buscarAlunoPorMatricula(1);

console.log(alunoEspecifico?.toString());

alunoEspecifico?.atualizarAluno({ nome: "Gabriel Paes" });

alunoEspecifico?.toString();

turma1.removerAluno(1);

console.log(turma1.listarAlunos());
