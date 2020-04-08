import CommandInterface from './CommandInterface'
import MessageCommandInterface from './MessageCommandInterface'

import MessageService from '../../Services/MessageService/MessageService'
import RequestMaker from '../../Requests/RequestMakers'
import StatisticsService from '../../Services/StatisticsService'
import { CovidStatisticsRequester } from '../../Requests/Requester'
import { TelegramBotReceiver } from '../Receivers'

class SendTopFiveCommand implements CommandInterface, MessageCommandInterface {
  public telegramBot: TelegramBotReceiver

  constructor (telegramBot: TelegramBotReceiver) {
    this.telegramBot = telegramBot
  }

  async execute ():Promise<void> {
    const message = this.createMessage()
    this.telegramBot.sendMessage(message)
  }

  async createMessage (): Promise<string> {
    const statisticRequester = CovidStatisticsRequester
    const statisticRequest = new RequestMaker(statisticRequester, '/statistics')
    await statisticRequest.makeRequest()
    const payload = statisticRequest.getResponseData()

    const statisticData = new StatisticsService(payload).getTopFive()

    const message = MessageService.createTopFiveMessage(statisticData)

    return message
  }
}

export default SendTopFiveCommand
