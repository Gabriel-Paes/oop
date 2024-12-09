import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Turma } from "./turma";

@Entity("alunos")
export class Aluno {
  @PrimaryGeneratedColumn()
  matricula!: number;

  @Column({ type: "varchar", length: 255 })
  nome!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;

  @ManyToOne(() => Turma, (turma) => turma.alunos)
  turma!: Turma;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  atualizarAluno(novosDados: { nome?: string; email?: string }): void {
    if (novosDados.nome !== undefined) {
      this.nome = novosDados.nome;
    }
    if (novosDados.email !== undefined) {
      this.email = novosDados.email;
    }
  }

  toString(): string {
    return `Nome: ${this.nome}\nMatrícula: ${this.matricula}\nE-mail: ${this.email}\n`;
  }
}
