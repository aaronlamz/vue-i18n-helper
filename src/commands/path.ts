// initialize default i18n path
export const initPathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.initPath, () => {
    return ''
  })
}

// customize  i18n path by command
export const customizePathCommand = () => {
  return vscode.commands.registerCommand(meta.COMMANDS.customizePath, () => {
    return ''
  })
}
