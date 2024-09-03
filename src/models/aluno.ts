export class Aluno {
  nome: string;
  matricula: number;
  email: string;

  constructor(nome: string, matricula: number, email: string) {
    this.nome = nome;
    this.matricula = matricula;
    this.email = email;
  }

  atualizarAluno(novosDados: {
    nome?: string;
    matricula?: number;
    email?: string;
  }): void {
    if (novosDados.nome !== undefined) {
      this.nome = novosDados.nome;
    }
    if (novosDados.matricula !== undefined) {
      this.matricula = novosDados.matricula;
    }
    if (novosDados.email !== undefined) {
      this.email = novosDados.email;
    }
  }

  toString(): void {
    console.log(
      `Nome: ${this.nome}\nMatrícula: ${this.matricula}\nE-mail:${this.email}`
    );
  }
}
