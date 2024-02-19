<h1 align="center"> Web Club website (Frontend) </h1>

## Tech Stack 🧰

<li>Frameworks</li>

- [NextJS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

<br/>

## Pages ☑️

#### Home
- Hero Section
- What do we do
- Events
- FAQ 
- Footer

#### Blogs
- Blogs
- Reading list

#### Teams
#### GDSC
#### Algorithms
#### Systems
#### Intelligence



## Installation and Contribution 🧑‍💻

### Using Git and Github

- [Clone](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#cloning-a-fork) the repository
- Enter the new `portfolio` directory with `cd portfolio`
- Set the upstream remote to the original repository url so that git knows where to fetch updates from in future: `git remote add upstream https://github.com/WebClub-NITK/wec-nitk-website.git`

### Commit Discipline

- Make sure to write clear and descriptive commit messages
- The commit message:
    - is written in the imperative (e.g., "Fix …", "Add …")
    - is kept short (max 76 characters, ideally less), while concisely explaining what the commit does
    - is clear about what part of the code is affected – often by prefixing with the name of the section and a colon, like `events: …` or `footer: …`

- Examples:
    - `footer: Add contact links`
    - `events: Fix scrolling issues`

### Install required packages

- `npm install`

### Run server

- `npm run dev`

<br/>

## Sample Git Workflow

- Follow the [installation guide](https://github.com/WebClub-NITK/wec-nitk-website/blob/main/readme.md#installation-guide) to install the software
- Create a new feature branch with `git checkout -b <name-of-your-feature-branch>`
- Make changes and commit them in the feature branch.
- Once done developing, switch back to the main branch with `git checkout main` ; pull the latest version of the repo with `git pull https://github.com/WebClub-NITK/wec-nitk-website.git main`
- Switch back to the feature branch with `git checkout <name-of-your-feature-branch>`. Apply the new changes on top of the latest version of the repo with `git rebase main`
- [Resolve merge conflicts](https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line/) (if any)
- Push your feature branch upto your remote repo with `git push origin <name-of-your-feature-branch>`
- [Submit a Pull Request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#making-a-pull-request) to the main branch.
- After any questions or changes have been resolved, your contribution would be merged in!

