import Config from '../config'
import { createGraph, bundle } from './parser'
class I18n {
  static i18nCachedData = {}
  getI18nKey(selectionText: string) {
    return this.getI18nKeyFromPaths(selectionText)
  }

  getI18nKeyFromPaths(selectionText: string) {
    if (Config.hasI18nPaths) {
      const graph = createGraph(
        '/Users/linjiajun/code/transaction/src/pages/public-business/risk-assessment/i18n/index.ts'
      )
      console.log(bundle(graph))
    }
    return `getI18nKeyFromPaths:${selectionText}`
  }

  getI18nKeyFromFile(selectionText: string) {
    return `getI18nKeyFromFile:${selectionText}`
  }
}

export const i18n = new I18n()
