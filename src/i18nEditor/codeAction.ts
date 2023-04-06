import * as vscode from 'vscode'
import globalEnum from '../globalEnum'
import Config from '../config'

export const codeActionsProvider = () => {
  return vscode.languages.registerCodeActionsProvider(Config.languageFeatures, {
    provideCodeActions: (
      document: vscode.TextDocument,
      range: vscode.Range,
      context: vscode.CodeActionContext,
      token: vscode.CancellationToken
    ) => {
      const commandActions = [
        {
          title: 'replace with {{$t("key")}}',
          command: globalEnum.COMMANDS.extract,
          arguments: [
            {
              selectionText: document.getText(range),
              document,
              context,
              token
            }
          ]
        }
      ]
      return commandActions
    }
  })
}
