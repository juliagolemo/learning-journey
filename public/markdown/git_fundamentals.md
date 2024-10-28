# Git
## Git fundamentals

Git is a distributed version control system that helps track changes in code or other files over time, enabling collaboration and improving workflow management. Created by Linus Torvalds in 2005, Git is essential for software development and is widely used in DevOps, open-source projects, and collaborative coding environments.
Key Concepts

**Repository (Repo)**: A Git repository is a directory that contains the files of a project along with its history. The repository holds all commits, branches, and configuration data. There are two types of repositories:
- Local Repository: Stored on a developer's local machine.
- Remote Repository: Hosted on a server (e.g., GitHub, GitLab, Bitbucket) to facilitate collaboration.

**Commit**: A commit is a snapshot of changes made to the files in a repository at a particular point in time. Each commit has a unique identifier (hash) and a message describing the changes, helping developers track and revert to previous versions if necessary.

**Branch**: A branch in Git allows you to diverge from the main line of development and work on changes independently. The main branch, often called main or master, is where production-ready code resides. Developers create branches to work on features or fixes, which are then merged back into the main branch once complete.

**Merge**: Merging is the process of integrating changes from one branch into another. It helps consolidate work, but may require resolving conflicts when two branches modify the same parts of a file differently.

**Staging Area**: This is a space where changes are gathered before they are committed. When files are added to the staging area (using git add), they are prepared for the next commit, allowing selective inclusion of changes.

**Remote Operations (Push, Pull, Fetch)**:
    
- Push: Sends commits from a local branch to a remote repository, sharing updates with collaborators.
- Pull: Retrieves and merges changes from a remote branch to the local branch.
- Fetch: Downloads changes from a remote repository without merging, letting you review updates before applying them.

## Common Git Commands

**git init**: Initializes a new Git repository in a directory.

**git clone** <url>: Creates a copy of a remote repository on the local machine.

**git add** <file>: Stages specified file(s) for the next commit.

**git commit -m <message>**: Commits staged changes with a descriptive message.

**git status**: Displays the current state of the repository and staging area.
    
**git branch** <branch-name>: Creates a new branch.
    
**git checkout** <branch-name>: Switches to a specified branch.
    
**git merge** <branch-name>: Merges changes from the specified branch into the current branch.
    
**git push**: Uploads local commits to the remote repository.
    
**git pull**: Fetches and merges changes from a remote repository.