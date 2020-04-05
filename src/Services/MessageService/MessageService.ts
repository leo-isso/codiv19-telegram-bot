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

  static createTopFiveMessage (statisticData: CountrySchema[]): string {
    const messageFormater = new MessageFormater()
    const dateTime = new Date(statisticData[0].time).toLocaleString('us-en', { timeZoneName: 'short' })

    const messageBody = statisticData.map(countryData => {
      return `
*Total Cases:* ${messageFormater.addSpaceToBigStringNumber(countryData.cases.total.toString())}
*Active Cases:* ${messageFormater.addSpaceToBigStringNumber(countryData.cases.active.toString())}
*Recovered Cases:* ${messageFormater.addSpaceToBigStringNumber(countryData.cases.recovered.toString())}
*Critical Cases:* ${messageFormater.addSpaceToBigStringNumber(countryData.cases.critical.toString())}
*Deaths:* ${messageFormater.addSpaceToBigStringNumber(countryData.deaths.total.toString())}
      `
    }).join('\n\n')

    return `
*COVID-19 - TOP 5 most affected countries*

${messageBody}
*Updated @* ${dateTime}
    `
  }
}

export default MessageService
