import CommandInterface from './CommandInterface'
import { TelegramBotReceiver } from '../Receivers'

import { StatisticsRequestMaker } from '../../Requests/RequestMakers'
import StatisticsService from '../../Services/StatisticsService'
import MessageService from '../../Services/MessageService/MessageService'

class SendHourlyMessageToChannelCommand implements CommandInterface {
  public telegramBot: TelegramBotReceiver

  constructor (telegramBot: TelegramBotReceiver) {
    this.telegramBot = telegramBot
  }

  async execute ():Promise<void> {
    const message = this.createHourlyMessage()
    this.telegramBot.sendMessage(message)
  }

  async createHourlyMessage (): Promise<string> {
    const statisticRequest = new StatisticsRequestMaker()
    await statisticRequest.makeRequest()
    const payload = statisticRequest.getResponseData()

    const statisticData = new StatisticsService(payload).getStatisticData()

    const message = MessageService.createStatisticsMessage(statisticData)

    return message
  }
}

export default SendHourlyMessageToChannelCommand
