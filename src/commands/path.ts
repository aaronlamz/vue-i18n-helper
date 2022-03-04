import * as vscode from 'vscode'
import * as fg from 'fast-glob'
import meta from '../meta'
import Config from '../config'

const initPath = async () => {
  const rootPath = vscode.workspace.rootPath
  const pattern = [
    `${rootPath}/**/(locales|locale|i18n|lang|langs|i18n-messages)`
  ]
  const result: any[] = await fg(pattern, {
    ignore: ['**/node_modules'],
    onlyDirectories: true
  })
  Config.updateI18nPaths(result)
  const info = `${
    Config.extensionName
  }:已配置以下语言包目录文件\n ${result.join('\n')}`
  vscode.window.showInformationMessage(info)
}

// execute default initPath
initPath()

// initialize default i18n path
export const initPathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.initPath, initPath)
}

// customize i18n path
export const customizePathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.customizePath, () => {
    console.log('')
  })
}
