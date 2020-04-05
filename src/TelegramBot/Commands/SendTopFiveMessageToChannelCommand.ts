import CommandInterface from './CommandInterface'
import MessageCommandInterface from './MessageCommandInterface'

import { TelegramBotReceiver } from '../Receivers'
import { StatisticsRequestMaker } from '../../Requests/RequestMakers'
import StatisticsService from '../../Services/StatisticsService'
import MessageService from '../../Services/MessageService/MessageService'

class SendTopFiveMessageToChannelCommand implements CommandInterface, MessageCommandInterface {
  public telegramBot: TelegramBotReceiver

  constructor (telegramBot: TelegramBotReceiver) {
    this.telegramBot = telegramBot
  }

  async execute ():Promise<void> {
    const message = this.createMessage()
    this.telegramBot.sendMessage(message)
  }

  async createMessage (): Promise<string> {
    const statisticRequest = new StatisticsRequestMaker()
    await statisticRequest.makeRequest()
    const payload = statisticRequest.getResponseData()

    const statisticData = new StatisticsService(payload).getTopFive()

    const message = MessageService.createTopFiveMessage(statisticData)

    return message
  }
}

export default SendTopFiveMessageToChannelCommand
