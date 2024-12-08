import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Turma } from "./turma";

@Entity("disciplinas")
export class Disciplina {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  codigo!: string;

  @OneToMany(() => Turma, (turma) => turma.disciplina)
  turmas!: Turma[];

  constructor(nome: string, codigo: string) {
    this.nome = nome;
    this.codigo = codigo;
  }

  toString(): string {
    return `Nome: ${this.nome}\nCódigo: ${this.codigo}\n`;
  }
}
