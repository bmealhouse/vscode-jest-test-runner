import {runCLI} from '@jest/core'
import * as sourceMapSupport from 'source-map-support'
import {logger} from './debug-console/logger'
import createJestConfig from './create-jest-config'
import getFailureMessages from './get-failure-messages'

const rootDir = new URL('../../../', import.meta.url).pathname
const pkgDir = new URL('../', import.meta.url).pathname

export async function run(
  _testRoot: string,
  callback: (error: Error | null, failures?: any) => void,
): Promise<void> {
  sourceMapSupport.install()

  process.stdout.write = logger as any
  process.stderr.write = logger as any

  try {
    // prettier-ignore
    const {results} = await (runCLI as any)(
      createJestConfig(rootDir, pkgDir),
      [rootDir]
    )

    callback(null, getFailureMessages(results))
  } catch (error) {
    callback(error)
  }
}
