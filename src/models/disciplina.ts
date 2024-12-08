import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("disciplinas")
export class Disciplina {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  codigo!: string;

  constructor(nome: string, codigo: string) {
    this.nome = nome;
    this.codigo = codigo;
  }

  toString(): string {
    return `Nome: ${this.nome}\nCódigo: ${this.codigo}\n`;
  }
}
