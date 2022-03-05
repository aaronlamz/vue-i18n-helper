class I18n {
  getI18nKeyBySelection(selection: string) {
    return (
      this.getI18nKeyFromFile(selection) || this.getI18nKeyFromPaths(selection)
    )
  }

  getI18nKeyFromPaths(selection: string) {
    return `getI18nKeyFromPaths:${selection}`
  }

  getI18nKeyFromFile(selection: string) {
    return `getI18nKeyFromFile:${selection}`
  }
}

export const i18n = new I18n()
