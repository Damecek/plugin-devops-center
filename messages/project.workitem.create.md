# summary

The `sf project workitem create` command simplifies the creation of Work Items in Salesforce DevOps Center by allowing you to create them directly from the CLI, including options to assign them to specific users, connect them to development environments, or automatically create feature branches.

# description

This command eliminates the need for manual navigation through the DevOps Center UI by enabling the creation of Work Items via a CLI command. It can create a Work Item for a specified project, assign it to a specific user, connect it to a development environment, or generate a new feature branch if no environment is specified. This streamlines the development process and saves time, especially for frequent tasks like creating new features or assigning bug fixes to team members.

# flags.subject.summary

The subject of the created Work Item.

# flags.subject.description

Defines the title or subject of the Work Item that is being created. This flag is required and provides a concise description of the task or feature to be addressed.

# flags.devops-center-username.summary

The username or alias of the DevOps Center organization.

# flags.devops-center-username.description

This required flag specifies the username or alias for the Salesforce DevOps Center org where the Work Item will be created. It ensures that the correct organization is targeted when creating the Work Item.

# flags.devops-center-project-name.summary

The name of the DevOps Center project.

# flags.devops-center-project-name.description

Specifies the name of the DevOps Center project under which the Work Item will be created. This flag is required and ensures that the Work Item is associated with the appropriate project.

# flags.development-environment.summary

The target development environment to connect the Work Item.

# flags.development-environment.description

Optionally specifies a development environment to connect the Work Item. If not provided, a new feature branch is automatically created. This is useful when you want to assign a Work Item to a specific environment or create a dedicated branch for a task.

# flags.assigned-to.summary

Assigns the Work Item to a specific user.

# flags.assigned-to.description

Assigns the Work Item to a specified user by their email or username. If not provided, the Work Item will be assigned to the running user by default. This flag is useful for project managers or team leads who want to delegate tasks to team members.

# examples

- <%= config.bin %> <%= command.id %> --subject "Implement OAuth2 authentication" --devops-center-username myDevOpsOrg --devops-center-project-name "Security Enhancements"

- <%= config.bin %> <%= command.id %> --subject "Fix null pointer exception on login" --devops-center-username myDevOpsOrg --devops-center-project-name "Bug Fixes" --assigned-to jane.doe@example.com

- <%= config.bin %> <%= command.id %> --subject "Update API versioning strategy" --devops-center-username myDevOpsOrg --devops-center-project-name "API Development" --development-environment "Dev Environment 2"

- <%= config.bin %> <%= command.id %> --subject "Optimize database queries" --devops-center-username myDevOpsOrg --devops-center-project-name "Performance Improvements" --assigned-to alex.smith@example.com --development-environment "Performance Lab"
