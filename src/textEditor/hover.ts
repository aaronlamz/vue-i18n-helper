import * as vscode from 'vscode'
import Config from '../config'

export const hoverProvider = () => {
  return vscode.languages.registerHoverProvider(Config.languageFeatures, {
    provideHover: (
      document: vscode.TextDocument,
      context: vscode.CodeActionContext,
      token: vscode.CancellationToken
    ) => {
      console.log(document, context, token)
      return new vscode.Hover('test hover')
    }
  })
}
