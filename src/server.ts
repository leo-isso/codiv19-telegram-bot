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

handleStatistic().then(a => {
  console.log(a)
})
