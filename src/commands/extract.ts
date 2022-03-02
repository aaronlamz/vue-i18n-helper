import * as vscode from 'vscode'
import meta from '../meta'

const commandExtarct = () => {
  vscode.window.showInformationMessage('excute extract commmand')
  // replace selected content
  // TODO: load data by i18n file
  const key = 'key'
  // The currently active editor or undefined
  if (vscode.window.activeTextEditor) {
    vscode.window.activeTextEditor.edit(editBuilder => {
      const { start, end } = (vscode.window.activeTextEditor as any).selection
      editBuilder.replace(new vscode.Range(start, end), key)
    })
  }
}

export const extract = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.extract, commandExtarct)
}
