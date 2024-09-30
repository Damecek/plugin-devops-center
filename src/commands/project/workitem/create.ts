/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/plugin-devops-center', 'project.workitem.create');

export type ProjectWorkitemCreateResult = {
  path: string;
};

export default class ProjectWorkitemCreate extends SfCommand<ProjectWorkitemCreateResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  public static readonly flags = {
    name: Flags.string({
      summary: messages.getMessage('flags.name.summary'),
      description: messages.getMessage('flags.name.description'),
      char: 'n',
      required: false,
    }),
  };

  public async run(): Promise<ProjectWorkitemCreateResult> {
    const { flags } = await this.parse(ProjectWorkitemCreate);

    const name = flags.name ?? 'world';
    this.log(`hello ${name} from src/commands/project/workitem/create.ts`);
    return {
      path: 'src/commands/project/workitem/create.ts',
    };
  }
}
