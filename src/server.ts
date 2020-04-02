import TelegramBot from 'node-telegram-bot-api'

import './utils/env'
import { StatisticsRequestMaker } from './Requests/RequestMakers'
import StatisticsService from './Services/StatisticsService'
import MessageService from './Services/MessageService/MessageService'

const handleStatistic = async ():Promise<string> => {
  const statisticRequest = new StatisticsRequestMaker()
  await statisticRequest.makeRequest()
  const payload = statisticRequest.getResponseData()
  const statisticsService = new StatisticsService(payload)
  const statisticData = statisticsService.getStatisticData()
  return MessageService.createStatisticsMessage(statisticData)
}

const token = process.env.TELEGRAM_BOT_TOKEN
const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/global/, async (msg) => {
  const chatId = msg.chat.id
  const response = await handleStatistic()
  bot.sendMessage(chatId, response)
})
