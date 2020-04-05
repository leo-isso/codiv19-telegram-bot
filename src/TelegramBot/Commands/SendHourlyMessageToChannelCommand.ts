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
    this.telegramBot.sendHourlyMessageToChannel(message)
  }

  async createHourlyMessage (): Promise<string> {
    const statisticRequest = new StatisticsRequestMaker()
    await statisticRequest.makeRequest()
    const payload = statisticRequest.getResponseData()

    const statisticsService = new StatisticsService(payload)
    const statisticData = statisticsService.getStatisticData()

    const message = MessageService.createStatisticsMessage(statisticData)

    return message
  }
}

export default SendHourlyMessageToChannelCommand
