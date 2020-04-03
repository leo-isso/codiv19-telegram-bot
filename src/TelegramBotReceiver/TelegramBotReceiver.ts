import TelegramBot from 'node-telegram-bot-api'

class TelegramBotReceiver {
  public telegramBot: TelegramBot
  private channelId: string = process.env.TELEGRAM_CHANNEL_ID

  constructor () {
    this.telegramBot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN)
  }

  sendMessageToChannel = (message: string):void => {
    this.telegramBot.sendMessage(this.channelId, message)
  }
}

export default TelegramBotReceiver
