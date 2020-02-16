# `vscode-jest-test-runner`

[![npm version](https://img.shields.io/npm/v/vscode-jest-test-runner.svg)](https://npmjs.org/package/vscode-jest-test-runner)
[![npm downloads](https://img.shields.io/npm/dm/vscode-jest-test-runner.svg)](https://npmjs.org/package/vscode-jest-test-runner)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![build status](https://travis-ci.com/bmealhouse/vscode-jest-test-runner.svg?branch=master)](https://travis-ci.com/bmealhouse/vscode-jest-test-runner)

> Run VS Code tests using Jest Testing Framework

## Table of contents

- [Installation](#installation)
- [Setup](#setup)
- [Environment variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

### npm

```sh
npm install vscode-jest-test-runner jest --save-dev
```

### yarn

```sh
yarn add vscode-jest-test-runner jest --dev
```

## Setup

### Example `launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Jest: Extension Tests",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/node_modules/vscode-jest-test-runner"
      ],
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "preLaunchTask": "npm: compile",
      "internalConsoleOptions": "openOnSessionStart",
      "env": {
        "JEST_TEST_RUNNER_TEST_REGEX": "",
        "JEST_TEST_RUNNER_UPDATE_SNAPSHOTS": "false"
      }
    },
    {
      "name": "Jest: Current Test File",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/node_modules/vscode-jest-test-runner"
      ],
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "preLaunchTask": "npm: compile",
      "internalConsoleOptions": "openOnSessionStart",
      "env": {
        "JEST_TEST_RUNNER_TEST_REGEX": "${file}",
        "JEST_TEST_RUNNER_UPDATE_SNAPSHOTS": "false"
      }
    },
      {
      "name": "Jest: Update All Snapshots",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/node_modules/vscode-jest-test-runner"
      ],
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "preLaunchTask": "npm: compile",
      "internalConsoleOptions": "openOnSessionStart",
      "env": {
        "JEST_TEST_RUNNER_TEST_REGEX": "",
        "JEST_TEST_RUNNER_UPDATE_SNAPSHOTS": "true"
      }
    },
    {
      "name": "Jest: Update Snapshots in Current Test File",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/node_modules/vscode-jest-test-runner"
      ],
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "preLaunchTask": "npm: compile",
      "internalConsoleOptions": "openOnSessionStart",
      "env": {
        "JEST_TEST_RUNNER_TEST_REGEX": "${file}",
        "JEST_TEST_RUNNER_UPDATE_SNAPSHOTS": "true"
      }
    }
  ]
}
```

## Environment variables

### `JEST_TEST_RUNNER_TEST_REGEX`

The pattern Jest uses to detect test files.

> **Example `env` settings:**
>
> ```json
> "env": {
>   "JEST_TEST_RUNNER_TEST_REGEX": "${file}",
> }
> ```

### `JEST_TEST_RUNNER_UPDATE_SNAPSHOTS`

Use this to re-record every snapshot that fails during this test run. Can be used together with `JEST_TEST_RUNNER_TEST_REGEX` to re-record snapshots.

> **Example `env` settings:**
>
> ```json
> "env": {
>   "JEST_TEST_RUNNER_UPDATE_SNAPSHOTS": "true",
> }
> ```

### `JEST_TEST_RUNNER_SETUP`

The path to a module that runs some code to configure or set up the testing framework before each test. You can use this to mock VS Code APIs, such as forcing the `getConfiguration` API to use an in-memory cache vs. interacting with the file system ([see shifty example](https://github.com/bmealhouse/vscode-shifty/blob/master/src/test-utils/vscode-jest-test-runner-setup.ts)).

> **Example `env` settings:**
>
> ```json
> "env": {
>   "JEST_TEST_RUNNER_SETUP": "${workspaceFolder}/dist/test-utils/vscode-jest-test-runner-setup.js",
> }
> ```

## Contributing

1. [Fork](https://help.github.com/en/articles/fork-a-repo) this repository to your own GitHub account and then [clone](https://help.github.com/en/articles/cloning-a-repository) it to your local device
1. Install the dependecies using `yarn`
1. Link the package to the global module directory: `yarn link`
1. Run `yarn test --watch` and start making your changes
1. You can use `yarn link vscode-jest-test-runner` to test your changes in a local project
1. Ensure any changes are documented in `CHANGELOG.md`

## License

MIT © Brent Mealhouse
