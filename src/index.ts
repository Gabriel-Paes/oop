import { Aluno } from "./models/aluno";
import { Turma } from "./models/turma";
import { Disciplina } from "./models/disciplina";

import { Menu } from "./menu";
import { AppDataSource } from "./data/ormconfig";

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao conectar-se ao banco de dados:", error);
  });

const disciplinas: Disciplina[] = [];
const turmas: Turma[] = [];

const config: { option: string; action: () => Promise<void> }[] = [
  { option: "Adicionar disciplina", action: addDiciplina },
  { option: "Adicionar turma", action: addTruma },
  { option: "Adicionar aluno a uma turma", action: addAluno },
  { option: "Listar alunos de uma turma", action: listarAluno },
  { option: "Buscar aluno por matrícula", action: buscarAluno },
  { option: "Atualizar informações de um aluno", action: atualizarAluno },
  { option: "Remover aluno da turma", action: removerAluno },
];

const menu = new Menu(config, "Encerrando...");
menu.run();

async function addDiciplina(): Promise<void> {
  const nomeDisciplina = await menu.question("Nome da disciplina: ");
  const codigoDisciplina = await menu.question("Código da disciplina: ");
  disciplinas.push(new Disciplina(nomeDisciplina, codigoDisciplina));
  console.log(
    `Disciplina de ${nomeDisciplina} - ${codigoDisciplina}, foi criada com sucesso.`
  );
}

async function addTruma(): Promise<void> {
  if (!disciplinas.length) {
    return console.log("É necessário ter ao menos uma disciplina.");
  }

  disciplinas.forEach((disciplina, i) => {
    console.log(
      `${i + 1} - Nome: ${disciplina.nome} Código: ${disciplina.codigo}`
    );
  });
  const indexDisciplina = await menu.question("Número da disciplina: ");
  const index = parseInt(indexDisciplina) - 1;

  if (index < 0 || index >= disciplinas.length) {
    return console.log("Disciplina inválida.");
  }

  const disciplina = disciplinas[index];

  const codigoTurma = await menu.question("Código da turma: ");

  turmas.push(new Turma(codigoTurma, disciplina));
  console.log(
    `Turma ${codigoTurma} - ${disciplina.nome}, foi criada com sucesso.`
  );
}

async function addAluno(): Promise<void> {
  if (!turmas.length) {
    return console.log("É necessário ter ao menos uma turma.");
  }

  turmas.forEach((turma, i) => {
    console.log(`${i + 1} - ${turma.disciplina.nome} (${turma.codigo})`);
  });
  const indexTurma = await menu.question("Número da turma: ");
  const index = parseInt(indexTurma) - 1;

  if (index < 0 || index >= turmas.length) {
    return console.log("Turma inválida.");
  }

  const turma = turmas[index];

  const nomeAluno = await menu.question("Nome do aluno: ");
  const emailAluno = await menu.question("Email do aluno: ");

  turma.adicionarAluno(new Aluno(nomeAluno, emailAluno));

  console.log(
    `Aluno ${nomeAluno} foi criado e adicionado a Turma ${turma.codigo} com sucesso.`
  );
}

async function listarAluno(): Promise<void> {
  if (!turmas.length) {
    return console.log("É necessário ter ao menos uma turma.");
  }

  turmas.forEach((turma, i) => {
    console.log(`${i + 1} - ${turma.disciplina.nome} (${turma.codigo})`);
  });
  const indexTurma = await menu.question("Número da turma: ");
  const index = parseInt(indexTurma) - 1;

  if (index < 0 || index >= turmas.length) {
    return console.log("Turma inválida.");
  }

  const turma = turmas[index];

  turma.listarAlunos();
}

async function buscarAluno(): Promise<void> {
  if (!turmas.length) {
    return console.log("É necessário ter ao menos uma turma.");
  }

  turmas.forEach((turma, i) => {
    console.log(`${i + 1} - ${turma.disciplina.nome} (${turma.codigo})`);
  });
  const indexTurma = await menu.question("Número da turma: ");
  const index = parseInt(indexTurma) - 1;

  if (index < 0 || index >= turmas.length) {
    return console.log("Turma inválida.");
  }

  const turma = turmas[index];

  const matriculaAluno = await menu.question("Matricula do aluno: ");
  turma.buscarAlunoPorMatricula(parseInt(matriculaAluno));
}

async function atualizarAluno(): Promise<void> {
  if (!turmas.length) {
    return console.log("É necessário ter ao menos uma turma.");
  }

  turmas.forEach((turma, i) => {
    console.log(`${i + 1} - ${turma.disciplina.nome} (${turma.codigo})`);
  });
  const indexTurma = await menu.question("Número da turma: ");
  const index = parseInt(indexTurma) - 1;

  if (index < 0 || index >= turmas.length) {
    return console.log("Turma inválida.");
  }

  const turma = turmas[index];

  const matriculaAluno = await menu.question("Matricula do aluno: ");
  const aluno = turma.buscarAlunoPorMatricula(parseInt(matriculaAluno));

  const nomeAluno = await menu.question("Nome do aluno: ");
  const novaMatriculaAluno = await menu.question("Matricula do aluno: ");
  const emailAluno = await menu.question("Email do aluno: ");

  const novosDados = {
    nome: nomeAluno,
    matricula: parseInt(novaMatriculaAluno),
    email: emailAluno,
  };

  aluno?.atualizarAluno(novosDados);

  console.log(
    `O aluno com a matrícula: ${novaMatriculaAluno} foi atualizado com sucesso.`
  );
}

async function removerAluno(): Promise<void> {
  if (!turmas.length) {
    return console.log("É necessário ter ao menos uma turma.");
  }

  turmas.forEach((turma, i) => {
    console.log(`${i + 1} - ${turma.disciplina.nome} (${turma.codigo})`);
  });
  const indexTurma = await menu.question("Número da turma: ");
  const index = parseInt(indexTurma) - 1;

  if (index < 0 || index >= turmas.length) {
    return console.log("Turma inválida.");
  }

  const turma = turmas[index];

  const matriculaAluno = await menu.question("Matricula do aluno: ");
  turma.removerAluno(parseInt(matriculaAluno));

  console.log(
    `O aluno com a matrícula: ${matriculaAluno} foi removido com sucesso.`
  );

  turma.listarAlunos();
}
