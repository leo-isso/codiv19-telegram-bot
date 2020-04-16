import CommandInterface from './CommandInterface'

import TelegramMessageService from '../../Services/TelegramMessageService'
import { TelegramBotReceiver } from '../Receivers'

class SendTopFiveCommand implements CommandInterface {
  public telegramBot: TelegramBotReceiver

  constructor (telegramBot: TelegramBotReceiver) {
    this.telegramBot = telegramBot
  }

  async execute ():Promise<void> {
    const messageService = new TelegramMessageService()
    const message = messageService.createTopFiveCountryMessage()
    this.telegramBot.sendMessage(message)
  }
}

export default SendTopFiveCommand
