import * as vscode from 'vscode'
import * as fg from 'fast-glob'
import meta from '../meta'
import Config from '../config'
import Log from '../utils/log'

class I18nPath {
  constructor() {
    console.log(Config)
    // if (Config.hasI18nPaths) {
    //   return
    // }
    this.autoInitPath()
  }

  async autoInitPath() {
    const rootPath = vscode.workspace.rootPath
    const pattern = [
      `${rootPath}/**/(locales|locale|lang|langs|i18n|i18n-messages)`
    ]
    const result: any[] = await fg(pattern, {
      ignore: ['**/node_modules'],
      onlyDirectories: true
    })
    if (result.length) {
      Config.updateI18nPaths(result)
      const info = `${
        Config.extensionName
      }:已初始化以下语言包目录文件\n ${result.join('\n')}`
      vscode.window.showInformationMessage(info)
      Log.info(info)
    } else {
      vscode.window.showInformationMessage(
        '初始化语言包目录失败，请检查语言包目录是否正确？或者自定义配置语言目录。'
      )
    }
  }
}

const i18nPath = new I18nPath()

export const autoInitPathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.autoInitPath, () => {
    i18nPath.autoInitPath()
  })
}

export const customizePathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.customizePath, () => {
    console.log('')
  })
}
