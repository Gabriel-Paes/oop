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
    return this.alunos.find((aluno) => aluno.matricula === matricula);
  }

  listarAlunos(): Aluno[] {
    return this.alunos;
  }
}
