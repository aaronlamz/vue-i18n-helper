import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'vscode-i18n-helper.helloWorld',
    () => {
      vscode.window.showInformationMessage(
        'Hello World from vscode-i18n-helper!'
      )
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {
  console.log('Deactivated')
}
