import * as vscode from 'vscode'
import meta from '../meta'

const commandExtarct = ({ selectionText }: { selectionText: string }) => {
  console.log('arguments', selectionText)
  const i18nKey = 'key'
  const activeTextEditor = vscode.window.activeTextEditor
  if (activeTextEditor) {
    activeTextEditor.edit((editBuilder) => {
      const { start, end } = (activeTextEditor as any).selection
      editBuilder.replace(new vscode.Range(start, end), i18nKey)
      vscode.window.showInformationMessage('extarct successfully!')
    })
  }
}

export const extract = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.extract, commandExtarct)
}
