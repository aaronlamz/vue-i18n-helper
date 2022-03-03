import * as vscode from 'vscode'
import meta from '../meta'
import Config from '../config'

export const codeActionsProvider = () => {
  return vscode.languages.registerCodeActionsProvider(Config.languageFeatures, {
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
  })
}
