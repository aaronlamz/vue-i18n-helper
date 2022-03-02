import * as vscode from 'vscode'
import meta from '../meta'

const commandExtarct = () => {
  vscode.window.showInformationMessage('excute extract commmand')
}

export const extract = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.extract, commandExtarct)
}
