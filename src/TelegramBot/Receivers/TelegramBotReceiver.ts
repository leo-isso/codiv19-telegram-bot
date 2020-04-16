import TelegramBot, { InlineKeyboardButton, SendMessageOptions } from 'node-telegram-bot-api'

import './../../utils/env'
class TelegramBotReceiver {
  public telegramBot: TelegramBot
  private channelId: string = process.env.TELEGRAM_CHANNEL_ID

  constructor (botToken:string) {
    this.telegramBot = new TelegramBot(botToken)
  }

  async sendMessage (asyncMessage: Promise<string>, buttons?: Promise<InlineKeyboardButton[][]>): Promise<void> {
    const message = await asyncMessage

    const options: SendMessageOptions = { parse_mode: 'Markdown' }
    if (buttons) options.reply_markup = { inline_keyboard: await buttons }

    this.telegramBot.sendMessage(this.channelId, message, options)
  }
}

export default TelegramBotReceiver
