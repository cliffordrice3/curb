import {Command, Flags} from '@oclif/core';
import { taskGreet } from '@curb/curb-tasks';

export default class Hello extends Command {
  static description = 'Hello world command';

  static examples = [
    `$ curb hello`,
  ];

  static flags = {
    help: Flags.help({char: 'h'}),
    name: Flags.string({char: 'n', description: 'name to greet'}),
  };

  async run() {
    const {flags} = await this.parse(Hello);
    const name = flags.name ?? 'world';
    this.log(taskGreet(name));
  }
} 