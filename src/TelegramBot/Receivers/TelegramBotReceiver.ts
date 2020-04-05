import TelegramBot from 'node-telegram-bot-api'

class TelegramBotReceiver {
  public telegramBot: TelegramBot
  private channelId: string = process.env.TELEGRAM_CHANNEL_ID

  constructor (botToken:string) {
    this.telegramBot = new TelegramBot(botToken)
  }

  async sendMessage (asyncMessage: Promise<string>): Promise<void> {
    const message = await asyncMessage
    this.telegramBot.sendMessage(this.channelId, message, { parse_mode: 'Markdown' })
  }
}

export default TelegramBotReceiver
