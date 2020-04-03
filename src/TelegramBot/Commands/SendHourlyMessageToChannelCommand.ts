import CommandInterface from './CommandInterface'
import { TelegramBotReceiver } from '../Receivers'

class SendHourlyMessageToChannelCommand implements CommandInterface {
  public telegramBot: TelegramBotReceiver

  constructor (telegramBot: TelegramBotReceiver) {
    this.telegramBot = telegramBot
  }

  async execute ():Promise<void> {
    this.telegramBot.sendHourlyMessageToChannel()
  }
}

export default SendHourlyMessageToChannelCommand
