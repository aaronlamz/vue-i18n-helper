import * as vscode from 'vscode'
import meta from './meta'
import * as commandModules from './commands'

type ModuleType = (
  context: vscode.ExtensionContext
) => vscode.Disposable | vscode.Disposable[]

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.languages.registerCodeActionsProvider(
    [
      { scheme: 'file', language: 'html' },
      { scheme: 'file', language: 'typescript' },
      { scheme: 'file', language: 'javascript' },
      { scheme: '*', language: 'vue' }
    ],
    {
      provideCodeActions: (
        document: vscode.TextDocument,
        range: vscode.Range,
        context: vscode.CodeActionContext,
        token: vscode.CancellationToken
      ) => {
        console.log(document, range, context, token)
        const commandActions = [
          {
            title: '替换为$t("key")模式',
            command: meta.COMMANDS.extract,
            arguments: []
          }
        ]
        return commandActions
      }
    }
  )
  context.subscriptions.push(disposable)

  const modules = Object.values({ ...commandModules })
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
