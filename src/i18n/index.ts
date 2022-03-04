import * as vscode from 'vscode'

class I18n {
  getI18nKeyBySelection(selection: string, ...args: any) {
    return (
      this.getI18nKeyFromFile(selection, args) ||
      this.getI18nKeyFromPaths(selection)
    )
  }

  getI18nKeyFromPaths(selection: string) {
    return `getI18nKeyFromPaths:${selection}`
  }

  getI18nKeyFromFile(selection: string, document: vscode.TextDocument) {
    console.log('getI18nKeyFromFile document', document)
    return `getI18nKeyFromFile:${selection}`
  }
}

export const i18n = new I18n()
