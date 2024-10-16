import * as readline from "readline";

export class Menu {
  private rl: readline.Interface;
  private options: string[];
  private actions: (() => Promise<void>)[];
  private exitMessage?: string;

  constructor(
    config: { option: string; action: () => Promise<void> }[],
    exitMessage?: string
  ) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.options = [];
    this.actions = [];

    config.forEach((obj) => {
      this.options.push(obj.option);
      this.actions.push(obj.action);
    });

    this.exitMessage = exitMessage;
  }

  question(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  async show(): Promise<string> {
    console.log("\nMenu:");
    this.options.forEach((option, index) => {
      console.log(`${index + 1} - ${option}`);
    });
    console.log(`${this.options.length + 1} - Sair`);

    return await this.question("Escolha uma opção: ");
  }

  async run(): Promise<void> {
    let exit = false;

    while (!exit) {
      const option = await this.show();
      const index = parseInt(option) - 1;

      if (index === this.options.length) {
        exit = true;
        console.log(this.exitMessage || "Saindo...");
        this.rl.close();
      } else if (index >= 0 && index < this.options.length) {
        await this.actions[index]();
      } else {
        console.log("Opção inválida.");
      }
    }
  }
}
