
import { CovidStatisticsRequester, NewsRequester } from '../../Requests/Requester'
import { InlineKeyboardButton } from 'node-telegram-bot-api'
import { StatisticsSchema, NewsSchema } from '../../Schemas'

import RequestMaker from '../../Requests/RequestMakers'
import MessageService from '../MessageService'
import NewsService from '../NewsService'
import StatisticsService from '../../Services/StatisticsService'
import TelegramButtonsService from '../TelegramButtonsService'

class TelegramMessageService {
  async createGlobalStatisticsMessage (): Promise<string> {
    const statisticRequester = CovidStatisticsRequester
    const statisticRequest = new RequestMaker<StatisticsSchema>(statisticRequester, '/statistics')
    await statisticRequest.makeRequest()
    const payload = statisticRequest.getResponseData()

    const statisticData = new StatisticsService(payload).getStatisticData()

    const message = MessageService.createStatisticsMessage(statisticData)

    return message
  }

  async createTopFiveCountryMessage (): Promise<string> {
    const statisticRequester = CovidStatisticsRequester
    const statisticRequest = new RequestMaker<StatisticsSchema>(statisticRequester, '/statistics')
    await statisticRequest.makeRequest()
    const payload = statisticRequest.getResponseData()

    const statisticData = new StatisticsService(payload).getTopFive()

    const message = MessageService.createCountriesMessage(statisticData)

    return message
  }

  async createNewsButtons (): Promise<InlineKeyboardButton[][]> {
    const newsRequester = NewsRequester
    const newsRequest = new RequestMaker<NewsSchema>(newsRequester, '/top-headlines', { sources: 'google-news', q: 'coronavirus' })
    await newsRequest.makeRequest()
    const payload = newsRequest.getResponseData()

    const newsData = new NewsService(payload).getTopNews(3)

    const buttons = TelegramButtonsService.createTelegramNewsButtons(newsData)

    return buttons
  }
}

export default TelegramMessageService
