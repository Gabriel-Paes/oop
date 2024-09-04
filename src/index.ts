import { Aluno } from "./models/aluno";
import { Turma } from "./models/turma";
import { Disciplina } from "./models/disciplina";

import alunos from "./data/alunos.json";

const disciplina1 = new Disciplina("Sistemas distribuídos", "SD");
const disciplina2 = new Disciplina("Desenvolvimento Web", "DW");

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

function listarTurma(turma: Turma): void {
  console.log(
    `\nAlunos da turma de ${turma.disciplina.nome} (${turma.codigo})\n`
  );
  turma.listarAlunos().forEach((aluno) => {
    aluno.toString();
  });
}

listarTurma(turma1);

function buscarAluno(matricula: number): Aluno | undefined {
  let alunoEspecifico = turma1.buscarAlunoPorMatricula(matricula);

  if (alunoEspecifico === undefined) {
    alunoEspecifico = turma2.buscarAlunoPorMatricula(matricula);
  }

  if (alunoEspecifico !== undefined) {
    console.log(`Aluno com a matrícula ${matricula}:\n`);
    alunoEspecifico?.toString();

    return alunoEspecifico;
  } else {
    console.log(`Aluno com a matrícula ${matricula} não encontrado.\n`);
  }
}

const alunoEspecifico = buscarAluno(1005);

alunoEspecifico?.atualizarAluno({
  nome: "Helena Souza",
  email: "helena.souza@email.com",
});

listarTurma(turma1);

turma1.removerAluno(1015);

listarTurma(turma1);
