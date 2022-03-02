import * as vscode from 'vscode'
import COMMANDS from '@/COMMANDS'

const commandExtarct = () => {
  console.log('excute extract commmand')
}

export const extract = () => {
  return vscode.commands.registerCommand(COMMANDS.extract, commandExtarct)
}
