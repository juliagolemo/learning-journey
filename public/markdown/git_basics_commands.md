# Basic Git commands
Here’s an overview of some basic Git commands, which are essential for version control and managing code changes:

![Alt text for image](/images/markdown/git_better.png)

1.	**git init**: Initializes a new Git repository in your project directory. This command creates a hidden .git folder where Git will track changes.
```bash
git init
```
2.	**git clone <repository_url>**: Clones an existing repository from a remote source (like GitHub) to your local machine. This is useful when you want to start working on an existing project.
```bash
git clone https://github.com/user/repository.git
```
3.	**git add <file>**: Stages changes by adding specified files or folders to the staging area. You can use . to add all modified files in the directory. Staging means you’re preparing these files to be committed.
```bash
git add <file>
git add .
```
4.	**git commit -m "message"**: Records or “commits” the staged changes to the repository. The -m option allows you to add a message that describes what changes were made. Commit messages help others (and your future self) understand what changes were made and why.
```bash
git commit -m "Add feature X"
```

5.	**git status**: Shows the current state of the working directory and staging area. It tells you which files are untracked, modified, or staged for the next commit.
```bash
git status
```

6.	**git log**: Displays a log of all previous commits in the repository. This includes commit IDs, authors, dates, and commit messages. It’s helpful for tracking the history of changes.
```bash
git log
```

7.	**git branch**: Lists all branches in the repository. It can also be used to create or delete branches. Branches allow you to work on different versions of a project simultaneously.
```bash
git branch  # list branches
git branch new-feature  # create a new branch called 'new-feature'
```

8.	**git checkout <branch>**: Switches to a different branch. If you use -b with this command, it creates a new branch and switches to it in one step.
```bash
git checkout new-feature
git checkout -b new-feature  # create and switch to a new branch
```

9.	**git merge <branch>**: Merges changes from the specified branch into the current branch. Merging is essential for integrating changes from different branches back into the main project.
```bash
git merge new-feature
```

10.	**git pull**: Fetches changes from a remote repository and merges them into your current branch. It’s useful when working collaboratively and ensuring your local copy is up-to-date.
```bash
git pull origin main
```

11.	**git push**: Pushes your commits to a remote repository. This command is used to share your changes with others.
```bash
git push origin main
```
