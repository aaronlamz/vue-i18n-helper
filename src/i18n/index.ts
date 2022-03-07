class I18n {
  static i18nCachedData = {}
  async getI18nKey(selectionText: string) {
    const { default: defaultComponent } = await import(
      '/Users/linjiajun/code/transaction/src/pages/conversion-sg/stock-transfer/i18n'
    )
    console.log(defaultComponent)
    return (
      this.getI18nKeyFromFile(selectionText) ||
      this.getI18nKeyFromPaths(selectionText)
    )
  }

  getI18nKeyFromPaths(selectionText: string) {
    return `getI18nKeyFromPaths:${selectionText}`
  }

  getI18nKeyFromFile(selectionText: string) {
    return `getI18nKeyFromFile:${selectionText}`
  }
}

export const i18n = new I18n()
