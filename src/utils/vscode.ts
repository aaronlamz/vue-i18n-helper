import * as vscode from 'vscode'

export const message = {
  info: vscode.window.showInformationMessage,
  warn: vscode.window.showWarningMessage,
  error: vscode.window.showErrorMessage
}
export const registerCommand = vscode.commands.registerCommand
export const executeCommand = vscode.commands.executeCommand
export const registerHoverProvider = vscode.languages.registerHoverProvider
export const workspace = vscode.workspace
export const window = vscode.window
export const Hover = vscode.Hover
export const MarkdownString = vscode.MarkdownString
