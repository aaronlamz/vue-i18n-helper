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

  async manualInitPath() {
    const okText = '立即配置'
    const result = await vscode.window.showInformationMessage(
      `${Config.extensionName}: 项目里的locales文件夹在哪？`,
      okText
    )

    if (result !== okText) {
      return
    }

    const dirs = await this.pickDir()
    Config.updateI18nPaths(dirs)

    this.success()
  }

  async pickDir(): Promise<string[]> {
    const dirs = await vscode.window.showOpenDialog({
      defaultUri: vscode.Uri.file(vscode.workspace.rootPath),
      canSelectFolders: true
    })

    return dirs.map((dirItem) => dirItem.path)
  }

  async success() {
    const okText = '继续配置'
    const result = await vscode.window.showInformationMessage(
      `${Config.extensionName}: 配置好了，还有其他目录吗？`,
      okText,
      '没有了'
    )

    if (result !== okText) {
      return
    }

    this.manualInit()
  }
}

const i18nPath = new I18nPath()

export const autoInitPathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.autoInitPath, () => {
    i18nPath.autoInitPath()
  })
}

export const manualInitPathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.manualInitPath, () => {
    i18nPath.manualInitPath()
  })
}
