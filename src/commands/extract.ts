import * as vscode from 'vscode'
import meta from '../meta'
import { i18n } from '../i18n'

const commandExtarct = ({ selectionText }: { selectionText: string }) => {
  console.log('commandExtarct', selectionText)
  const i18nKey = i18n.getI18nKeyBySelection(selectionText)
  console.log('i18nKey', i18nKey)
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
