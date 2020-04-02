import './utils/env'
import { StatisticsRequestMaker } from './Requests/RequestMakers'

const request = async (): Promise<object> => {
  const statisticRequest = new StatisticsRequestMaker()
  await statisticRequest.makeRequest()
  return statisticRequest.getResponseData()
}

const extractAll = async () => {
  const response = await request()
  const allData = response.response.find(data => data.country === 'All')
  return allData
}

const createMessage = async () => {
  const data = await extractAll()
  return `
  Last Update: ${data.time}
  Total Cases: ${data.cases.total}
  Active Cases: ${data.cases.active}
  Recovered Cases: ${data.cases.recovered}
  Critical Cases: ${data.cases.critical}
  Deaths: ${data.deaths.total}
  `
}

createMessage().then(a => {
  console.log(a)
})
