import createJestConfig from './create-jest-config'

const formatSnapshot = (config: any): any => ({
  ...config,
  globals: config.globals.replace(
    '/home/travis/build/bmealhouse',
    '/Users/brent/dev',
  ),
  setupFilesAfterEnv: config.setupFilesAfterEnv.map((filepath: string) =>
    filepath.replace('/home/travis/build/bmealhouse', '/Users/brent/dev'),
  ),
})

test('creates default jest config', () => {
  expect(formatSnapshot(createJestConfig('./rootDir', './pkgDir')))
    .toMatchInlineSnapshot(`
    Object {
      "colors": true,
      "globals": "{\\"ts-jest\\":{\\"tsConfig\\":\\"/Users/brent/dev/vscode-jest-test-runner/rootDir/tsconfig.json\\"}}",
      "rootDir": "./rootDir",
      "roots": Array [
        "<rootDir>/src",
      ],
      "runInBand": true,
      "setupFilesAfterEnv": Array [
        "/Users/brent/dev/vscode-jest-test-runner/pkgDir/dist-src/vscode-jest-test-runner-setup.js",
      ],
      "testEnvironment": "vscode",
      "testRegex": "\\\\.(test|spec)\\\\.ts$",
      "transform": "{\\"^.+\\\\\\\\.ts$\\":\\"ts-jest\\"}",
      "updateSnapshot": false,
      "verbose": true,
    }
  `)
})

test('creates jest config with custom setup file', () => {
  process.env.JEST_TEST_RUNNER_SETUP =
    '/path/to/custom/setup/jest-runner-vscode-setup.js'

  expect(formatSnapshot(createJestConfig('./rootDir', './pkgDir')))
    .toMatchInlineSnapshot(`
    Object {
      "colors": true,
      "globals": "{\\"ts-jest\\":{\\"tsConfig\\":\\"/Users/brent/dev/vscode-jest-test-runner/rootDir/tsconfig.json\\"}}",
      "rootDir": "./rootDir",
      "roots": Array [
        "<rootDir>/src",
      ],
      "runInBand": true,
      "setupFilesAfterEnv": Array [
        "/path/to/custom/setup/jest-runner-vscode-setup.js",
      ],
      "testEnvironment": "vscode",
      "testRegex": "\\\\.(test|spec)\\\\.ts$",
      "transform": "{\\"^.+\\\\\\\\.ts$\\":\\"ts-jest\\"}",
      "updateSnapshot": false,
      "verbose": true,
    }
  `)

  delete process.env.JEST_TEST_RUNNER_SETUP
})

test('creates jest config with custom test regex', () => {
  process.env.JEST_TEST_RUNNER_TEST_REGEX = '/path/to/single/test/file.ts'

  expect(formatSnapshot(createJestConfig('./rootDir', './pkgDir')))
    .toMatchInlineSnapshot(`
    Object {
      "colors": true,
      "globals": "{\\"ts-jest\\":{\\"tsConfig\\":\\"/Users/brent/dev/vscode-jest-test-runner/rootDir/tsconfig.json\\"}}",
      "rootDir": "./rootDir",
      "roots": Array [
        "<rootDir>/src",
      ],
      "runInBand": true,
      "setupFilesAfterEnv": Array [
        "/Users/brent/dev/vscode-jest-test-runner/pkgDir/dist-src/vscode-jest-test-runner-setup.js",
      ],
      "testEnvironment": "vscode",
      "testRegex": "/path/to/single/test/file.ts",
      "transform": "{\\"^.+\\\\\\\\.ts$\\":\\"ts-jest\\"}",
      "updateSnapshot": false,
      "verbose": true,
    }
  `)

  delete process.env.JEST_TEST_RUNNER_TEST_REGEX
})

test('creates jest config with update snapshot', () => {
  process.env.JEST_TEST_RUNNER_UPDATE_SNAPSHOTS = 'true'

  expect(formatSnapshot(createJestConfig('./rootDir', './pkgDir')))
    .toMatchInlineSnapshot(`
    Object {
      "colors": true,
      "globals": "{\\"ts-jest\\":{\\"tsConfig\\":\\"/Users/brent/dev/vscode-jest-test-runner/rootDir/tsconfig.json\\"}}",
      "rootDir": "./rootDir",
      "roots": Array [
        "<rootDir>/src",
      ],
      "runInBand": true,
      "setupFilesAfterEnv": Array [
        "/Users/brent/dev/vscode-jest-test-runner/pkgDir/dist-src/vscode-jest-test-runner-setup.js",
      ],
      "testEnvironment": "vscode",
      "testRegex": "\\\\.(test|spec)\\\\.ts$",
      "transform": "{\\"^.+\\\\\\\\.ts$\\":\\"ts-jest\\"}",
      "updateSnapshot": true,
      "verbose": true,
    }
  `)

  delete process.env.JEST_TEST_RUNNER_UPDATE_SNAPSHOTS
})
