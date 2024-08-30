export class Aluno {
  nome: string;
  matricula: number;
  email: string;

  constructor(nome: string, matricula: number, email: string) {
    this.nome = nome;
    this.matricula = matricula;
    this.email = email;
  }

  toString(): void {
    console.log(
      `Nome: ${this.nome}\nMatrícula: ${this.matricula}\nE-mail:${this.email}`
    );
  }
}
