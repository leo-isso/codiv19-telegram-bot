import TelegramBot from 'node-telegram-bot-api'

class TelegramBotReceiver {
  public telegramBot: TelegramBot
  private channelId: string = process.env.TELEGRAM_CHANNEL_ID

  constructor () {
    this.telegramBot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN)
  }

  async sendHourlyMessageToChannel (asyncMessage: Promise<string>): Promise<void> {
    const message = await asyncMessage
    this.telegramBot.sendMessage(this.channelId, message, { parse_mode: 'Markdown' })
  }
}

export default TelegramBotReceiver
