import { DataSource } from "typeorm";
import { Aluno } from "../models/aluno";
import { Disciplina } from "../models/disciplina";
import { Turma } from "../models/turma";
import config from "../config/config";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  entities: [Aluno, Disciplina, Turma],
  synchronize: true,
});
