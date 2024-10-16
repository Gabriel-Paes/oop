import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";

export class Turma {
  codigo: string;
  disciplina: Disciplina;
  alunos: Aluno[];

  constructor(codigo: string, disciplina: Disciplina) {
    this.codigo = codigo;
    this.disciplina = disciplina;
    this.alunos = [];
  }

  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

  removerAluno(matricula: number): void {
    this.alunos = this.alunos.filter((aluno) => aluno.matricula !== matricula);
  }

  buscarAlunoPorMatricula(matricula: number): Aluno | undefined {
    const aluno = this.alunos.find((aluno) => aluno.matricula === matricula);

    if (aluno === undefined) {
      console.log(`Aluno com a matrícula ${matricula} não encontrado.\n`);
    } else {
      console.log(`Aluno com a matrícula ${matricula}:\n`);
      aluno.toString();
    }

    return aluno;
  }

  listarAlunos(): void {
    const infoTurma = `${this.disciplina.nome} (${this.codigo})`;

    if (this.alunos.length === 0) {
      console.log(`A turma de ${infoTurma} não tem alunos cadastrados.`);
    } else {
      console.log(`\nAlunos da turma de ${infoTurma}\n`);
      this.alunos.forEach((aluno) => {
        aluno.toString();
      });
    }
  }
}
