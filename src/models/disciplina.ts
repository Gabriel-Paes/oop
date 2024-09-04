export class Disciplina {
  nome: string;
  codigo: string;

  constructor(nome: string, codigo: string) {
    this.nome = nome;
    this.codigo = codigo;
  }

  toString(): void {
    console.log(`Nome: ${this.nome}\nCódigo: ${this.codigo}\n`);
  }
}
