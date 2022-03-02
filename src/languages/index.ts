import * as vscode from 'vscode'
import meta from '../meta'

export const codeActionsProvider = () => {
  return vscode.languages.registerCodeActionsProvider(
    [
      { scheme: 'file', language: 'html' },
      { scheme: 'file', language: 'typescript' },
      { scheme: 'file', language: 'javascript' },
      { scheme: '*', language: 'vue' }
    ],
    {
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
    }
  )
}
