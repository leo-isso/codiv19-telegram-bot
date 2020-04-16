import CommandInterface from './CommandInterface'

import TelegramMessageService from '../../Services/TelegramMessageService'
import { TelegramBotReceiver } from '../Receivers'

class SendStatisticsWithNewsCommand implements CommandInterface {
  public telegramBot: TelegramBotReceiver

  constructor (telegramBot: TelegramBotReceiver) {
    this.telegramBot = telegramBot
  }

  async execute ():Promise<void> {
    const messageService = new TelegramMessageService()
    const message = messageService.createGlobalStatisticsMessage()
    const buttons = messageService.createNewsButtons()
    this.telegramBot.sendMessage(message, buttons)
  }
}

export default SendStatisticsWithNewsCommand
