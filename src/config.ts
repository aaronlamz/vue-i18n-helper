export const extensionName = 'vscode-i18n-helper'
export const author = 'AaronLam'

const I18N_PATHS_KEY = 'i18nPaths'

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

  static get i18nPaths() {
    const paths = this.getConfig(I18N_PATHS_KEY)
    return paths ? paths.split(',') : []
  }

  static getConfig(key): any {
    return vscode.workspace.getConfiguration(this.extensionName).get(key)
  }

  static setConfig(key, value, isGlobal = false) {
    return vscode.workspace
      .getConfiguration(this.extensionName)
      .update(key, value, isGlobal)
  }

  static updateI18nPaths(paths: string[]) {
    const i18nPaths = [...new Set(this.i18nPaths.concat(paths))]
    this.setConfig(I18N_PATHS_KEY, i18nPaths.join(','))
  }
}
