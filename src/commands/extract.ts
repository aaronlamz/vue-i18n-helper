import * as vscode from 'vscode'
import meta from '../meta'
import { i18n } from '../i18n'

const commandExtarct = ({ selectionText }: { selectionText: string }) => {
  const i18nKey = i18n.getI18nKeyBySelection(selectionText)
  const activeTextEditor = vscode.window.activeTextEditor
  if (activeTextEditor && i18nKey) {
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
