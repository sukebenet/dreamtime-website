---
title: Development
---

![](/img/screely-1590144437132.png)

DreamTime is open-source and anyone can contribute to their code, improve it, implement ideas or create their own version for private or public use (respecting the license).

:::info
This document contains the instructions to prepare the user interface code (DreamTime), for the AI ​​algorithm code visit [this page](https://github.com/dreamnettech/dreampower#-development).
:::

## Repositories

DreamTime source code is hosted in these places:

- [GitHub](https://github.com/dreamnettech/dreamtime)
- [Codeberg](https://codeberg.org/dreamnet/dreamtime)
- [Teknik](https://git.teknik.io/dreamnet/dreamtime)
- [Gitee](https://gitee.com/kolessios/dreamtime)

:::info
If you are planning to contribute with a Pull Request please do it on GitHub by forking the [canary branch](https://github.com/dreamnettech/dreamtime/tree/canary).
:::

## Requirements

- [NodeJS 12+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)

### Experience

It will be easier for you to work with the code if you have experience in:

- [HTML, CSS](https://www.codecademy.com/catalog/language/html-css) and [JavaScript](https://www.codecademy.com/catalog/language/javascript).
- [SCSS](https://sass-lang.com/): CSS Preprocessor.
- [TailwindCSS](https://tailwindcss.com/): CSS Framework.
- [VueJS](https://vuejs.org/) and [NuxtJS](https://nuxtjs.org/): JavaScript frameworks.
- [Electron](https://electronjs.org/): Software used to "transform" DreamTime from a website to a desktop application.

## Setup

All the source code is in the `src` folder, this instructions are based on that folder.

### Directory Structure

| Directory            | Description |
|--------------------|------------|
| `build` | Files used by [electron-builder](https://www.electron.build/). |
| `electron` | "Backend" code, must be compiled with Babel. |
| `modules` | Code and utilities out of the scope of NuxtJS. |
| `patches` | Monkey-patches |
| `scripts` | External scripts. |
| Others | [See NuxtJS Directory Structure.](https://nuxtjs.org/guide/directory-structure) |

### Dependencies

Install the project dependencies running this command:

`yarn install`


### Development enviroment

Run the following commands to start the dev environment, once prepared you will have the DreamTime window, the DevTools and hot-reload ready.

`yarn run dev:nuxt`

`yarn run dev:babel`

`yarn run dev:electron`


:::info
If you are using [Visual Studio Code](https://code.visualstudio.com/) you can run the task `Build` to open the first two commands in parallel terminals and press `F5` to run the last command and open the DreamTime window.
:::

## Scripts

These are the commands that you can run with `yarn run <command>`:

| Command            | Description |
|--------------------|------------|
| `postinstall` | Executed automatically when running `yarn install`. Responsible for running [patch-package](https://www.npmjs.com/package/patch-package) to apply monkey-patches to some libraries. |
| `lint` |Run [eslint](https://eslint.org/) to validate that the code complies with our syntax.|
| `test` | Should run a series of tests to verify that the project works as it should, but these tests have not been created. 🤡 |
| `clean` | Delete folders with compiled code. |
| `deploy` | Run [@dreamnet/deploy](https://www.npmjs.com/package/@dreamnet/deploy) to upload the release executable to multiple file providers. |
| `optimize` | Run [modclean](https://npmjs.com/package/modclean) to clean the `node_modules` folder and decrease the size of the executable. |
| `dev:env` ||
| `dev:nuxt` |Run the [NuxtJS development server](https://nuxtjs.org/guide/commands) with hot-reload.|
| `dev:babel` |Compile the `electron` folder with hot-reload.|
| `dev:electron` | Open Electron using the compiled code from the previous command. |
| `dev:build` |  |
| `build:env` |  |
| `build:nuxt` | Compile the NuxtJS code. |
| `build:babel` | Compile the `electron` folder. |
| `build:electron` | Create a ready-to-distribute executable. |
| `build` | Compile the NuxtJS code, the `electron` folder, and create a ready-to-distribute executable. |
| `preview:electron` |  |
| `preview:production` |  |


