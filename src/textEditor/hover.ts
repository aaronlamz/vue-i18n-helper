import * as vscode from 'vscode'
import Config from '../config'

export const hoverProvider = () => {
  return vscode.languages.registerHoverProvider(Config.languageFeatures, {
    provideHover: (
      document: vscode.TextDocument,
      position: vscode.Position,
      token: vscode.CancellationToken
    ) => {
      console.log(document, position, token)
      return new vscode.Hover('test hover')
    }
  })
}
