import CommandInterface from './CommandInterface'
import MessageCommandInterface from './MessageCommandInterface'
import ButtonsCommandInterface from './ButtonsCommandInterface'

import { TelegramBotReceiver } from '../Receivers'
import RequestMaker from '../../Requests/RequestMakers'
import StatisticsService from '../../Services/StatisticsService'
import MessageService from '../../Services/MessageService/MessageService'
import { CovidStatisticsRequester, NewsRequester } from '../../Requests/Requester'
import { StatisticsSchema, NewsSchema } from '../../Schemas'
import { InlineKeyboardButton } from 'node-telegram-bot-api'

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
    const newsRequest = new RequestMaker<NewsSchema>(newsRequester, '/top-headlines', { country: 'us', q: 'COVID-19' })
    await newsRequest.makeRequest()
    const buttons: InlineKeyboardButton[][] = newsRequest.getResponseData().articles.slice(0, 3).map(article => { return [{ text: article.title, url: article.url }] })
    console.log(buttons)
    return buttons
  }
}

export default SendStatisticsWithNewsCommand
