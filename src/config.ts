export const extensionName = 'vscode-i18n-helper'
export const author = 'AaronLam'

export default class Config {
  static get extensionId() {
    return `${author}.${extensionName}`
  }

  static get extensionName() {
    return extensionName
  }

  static get languageFeatures() {
    return [
      { scheme: 'file', language: 'html' },
      { scheme: 'file', language: 'typescript' },
      { scheme: 'file', language: 'javascript' },
      { scheme: '*', language: 'vue' }
    ]
  }
}
