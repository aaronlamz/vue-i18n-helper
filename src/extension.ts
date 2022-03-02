import * as vscode from 'vscode'
import * as commandModules from './commands'
import * as languagesModules from './languages'

type ModuleType = (
  context: vscode.ExtensionContext
) => vscode.Disposable | vscode.Disposable[]

export function activate(context: vscode.ExtensionContext) {
  const modules = Object.values({ ...commandModules, ...languagesModules })
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
  console.log('Deactivated')
}
