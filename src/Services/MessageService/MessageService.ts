import { CountrySchema } from '../../Schemas'
import MessageFormater from './MessageFormaterService'

class MessageService {
  static createStatisticsMessage (statisticData: CountrySchema): string {
    const messageFormater = new MessageFormater()
    const dateTime = new Date(statisticData.time).toLocaleString('us-en', { timeZoneName: 'short' })
    return `
*COVID-19 - Hourly Update*

*Total Cases:* ${messageFormater.addSpaceToBigStringNumber(statisticData.cases.total.toString())}
*Active Cases:* ${messageFormater.addSpaceToBigStringNumber(statisticData.cases.active.toString())}
*Recovered Cases:* ${messageFormater.addSpaceToBigStringNumber(statisticData.cases.recovered.toString())}
*Critical Cases:* ${messageFormater.addSpaceToBigStringNumber(statisticData.cases.critical.toString())}
*Deaths:* ${messageFormater.addSpaceToBigStringNumber(statisticData.deaths.total.toString())}

*Updated @* ${dateTime}
    `
  }
}

export default MessageService
