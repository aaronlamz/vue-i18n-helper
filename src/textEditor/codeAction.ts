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
      console.log('provideCodeActions', document, range, context, token)
      console.log('selectionText', document.getText(range))
      const commandActions = [
        {
          title: 'replace with {{$t("key")}}',
          command: meta.COMMANDS.extract,
          arguments: [
            {
              selectionText: document.getText(range)
            }
          ]
        }
      ]
      return commandActions
    }
  })
}
