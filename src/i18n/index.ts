import Config from '../config'
class I18n {
  static i18nCachedData = {}
  async getI18nKey(selectionText: string) {
    return this.getI18nKeyFromPaths(selectionText)
  }

  getI18nKeyFromPaths(selectionText: string) {
    if (Config.hasI18nPaths) {
      Config.i18nPaths.forEach(async (path) => {
        const { default: i18nData } = await import(path)
        console.log(path, i18nData)
      })
    }
    return `getI18nKeyFromPaths:${selectionText}`
  }

  getI18nKeyFromFile(selectionText: string) {
    return `getI18nKeyFromFile:${selectionText}`
  }
}

export const i18n = new I18n()
