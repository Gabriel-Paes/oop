import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  matricula!: number;

  @Column()
  nome!: string;

  @Column()
  email!: string;

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

  toString(): string {
    return `Nome: ${this.nome}\nMatrícula: ${this.matricula}\nE-mail: ${this.email}\n`;
  }
}
