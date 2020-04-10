import ButtonsCommandInterface from './ButtonsCommandInterface'
import CommandInterface from './CommandInterface'
import MessageCommandInterface from './MessageCommandInterface'

import RequestMaker from '../../Requests/RequestMakers'
import MessageService from '../../Services/MessageService'
import NewsService from '../../Services/NewsService'
import StatisticsService from '../../Services/StatisticsService'
import TelegramButtonsService from '../../Services/TelegramButtonsService'
import { CovidStatisticsRequester, NewsRequester } from '../../Requests/Requester'
import { InlineKeyboardButton } from 'node-telegram-bot-api'
import { StatisticsSchema, NewsSchema } from '../../Schemas'
import { TelegramBotReceiver } from '../Receivers'

class SendStatisticsWithNewsCommand implements CommandInterface, MessageCommandInterface, ButtonsCommandInterface {
  public telegramBot: TelegramBotReceiver

  constructor (telegramBot: TelegramBotReceiver) {
    this.telegramBot = telegramBot
  }

  async execute ():Promise<void> {
    const message = this.createMessage()
    const buttons = this.createButtons()
    this.telegramBot.sendMessage(message, buttons)
  }

  async createMessage (): Promise<string> {
    const statisticRequester = CovidStatisticsRequester
    const statisticRequest = new RequestMaker<StatisticsSchema>(statisticRequester, '/statistics')
    await statisticRequest.makeRequest()
    const payload = statisticRequest.getResponseData()

    const statisticData = new StatisticsService(payload).getStatisticData()

    const message = MessageService.createStatisticsMessage(statisticData)

    return message
  }

  async createButtons (): Promise<InlineKeyboardButton[][]> {
    const newsRequester = NewsRequester
    const newsRequest = new RequestMaker<NewsSchema>(newsRequester, '/top-headlines', { sources: 'google-news', q: 'coronavirus' })
    await newsRequest.makeRequest()
    const payload = newsRequest.getResponseData()

    const newsData = new NewsService(payload).getTopNews(3)

    const buttons = TelegramButtonsService.createTelegramNewsButtons(newsData)

    return buttons
  }
}

export default SendStatisticsWithNewsCommand
