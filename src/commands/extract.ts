import * as vscode from 'vscode'
import globalEnum from '../globalEnum'
import { i18n } from '../i18nFile'

const commandExtarct = ({ selectionText }: { selectionText: string }) => {
  const i18nKey = i18n.getI18nKey(selectionText)
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
  return vscode.commands.registerCommand(
    globalEnum.COMMANDS.extract,
    commandExtarct
  )
}
