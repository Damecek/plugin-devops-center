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
    subject: Flags.string({
      summary: messages.getMessage('flags.subject.summary'),
      char: 's',
      required: true,
    }),
    'devops-center-username': Flags.string({
      summary: messages.getMessage('flags.devops-center-username.summary'),
      char: 'c',
      required: true,
    }),
    'devops-center-project-name': Flags.string({
      summary: messages.getMessage('flags.devops-center-project-name.summary'),
      char: 'p',
      required: true,
    }),
    'development-environment': Flags.string({
      summary: messages.getMessage('flags.development-environment.summary'),
      char: 'e',
    }),
    'assigned-to': Flags.string({
      summary: messages.getMessage('flags.assigned-to.summary'),
      char: 'a',
    }),
  };

  public async run(): Promise<ProjectWorkitemCreateResult> {
    const { flags } = await this.parse(ProjectWorkitemCreate);

    this.log(
      `subject: ${flags.subject}\ndevops-center-username: ${flags['devops-center-username']}\ndevops-center-project-name: ${flags['devops-center-project-name']}`
    );
    return {
      path: 'src/commands/project/workitem/create.ts',
    };
  }
}
