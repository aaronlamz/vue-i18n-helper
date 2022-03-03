import * as vscode from 'vscode'
import meta from '../meta'

const commandExtarct = () => {
  const key = 'key'
  if (vscode.window.activeTextEditor) {
    vscode.window.activeTextEditor.edit(editBuilder => {
      const { start, end } = (vscode.window.activeTextEditor as any).selection
      editBuilder.replace(new vscode.Range(start, end), key)
      vscode.window.showInformationMessage('extarct successfully!')
    })
  }
}

export const extract = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.extract, commandExtarct)
}
