import './global'
import * as vscode from 'vscode'
import * as commandModules from './commands'
import * as textEditorModules from './textEditor'
import Log from './utils/log'
import Config from './config'

type ModuleType = (
  context: vscode.ExtensionContext
) => vscode.Disposable | vscode.Disposable[]

export function activate(context: vscode.ExtensionContext) {
  Log.info(`🌞 Activated, v${Config.version}`)

  const modules = Object.values({ ...commandModules, ...textEditorModules })
  modules.forEach((module: ModuleType) => {
    const disposables = module(context)
    if (Array.isArray(disposables)) {
      context.subscriptions.push(...disposables)
    } else {
      context.subscriptions.push(disposables)
    }
  })
}

export function deactivate() {
  Log.info('🌚 Deactivated')
}
