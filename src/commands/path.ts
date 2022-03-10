import * as vscode from 'vscode'
import * as fg from 'fast-glob'
import meta from '../meta'
import Config from '../config'

const initPath = async () => {
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
    }:已配置以下语言包目录文件\n ${result.join('\n')}`
    vscode.window.showInformationMessage(info)
  } else {
    vscode.window.showInformationMessage(
      '初始化语言包目录失败，请检查语言包目录是否正确？或者自定义配置语言目录。'
    )
  }
}

// initialize default i18n path
initPath()

// default i18n path
export const initPathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.initPath, initPath)
}

// customize i18n path
export const customizePathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.customizePath, () => {
    console.log('')
  })
}
