import * as vscode from 'vscode'
import meta from '../meta'

// initialize default i18n path
export const initPathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.initPath, () => {
    console.log('')
  })
}

// customize i18n path
export const customizePathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.customizePath, () => {
    console.log('')
  })
}
