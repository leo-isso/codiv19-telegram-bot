import TelegramBot from 'node-telegram-bot-api'

import { StatisticsRequestMaker } from '../../Requests/RequestMakers'
import StatisticsService from '../../Services/StatisticsService'
import MessageService from '../../Services/MessageService/MessageService'

class TelegramBotReceiver {
  public telegramBot: TelegramBot
  private channelId: string = process.env.TELEGRAM_CHANNEL_ID

  constructor () {
    this.telegramBot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN)
  }

  async sendHourlyMessageToChannel (): Promise<void> {
    const message = await this.createHourlyMessage()
    this.telegramBot.sendMessage(this.channelId, message)
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

export default TelegramBotReceiver
