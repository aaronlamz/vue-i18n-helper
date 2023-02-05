import { OutputChannel, window } from 'vscode'

export default class Log {
  private static _channel: OutputChannel

  static get outputChannel(): OutputChannel {
    if (!this._channel)
      this._channel = window.createOutputChannel(global.__EXT.name)
    return this._channel
  }

  static info(message: string, intend = 0) {
    this.outputChannel.appendLine(`${'\t'.repeat(intend)}${message}`)
  }

  static error(err: Error | string, prompt = true, intend = 0) {
    if (prompt)
      window.showErrorMessage(`${global.__EXT.name} Error: ${err.toString()}`)
    if (typeof err === 'string') Log.info(`🐛 ERROR: ${err}`, intend)
    else Log.info(`🐛 ERROR: ${err.name}: ${err.message}\n${err.stack}`, intend)
  }
}
