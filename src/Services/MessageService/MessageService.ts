import { CountrySchema } from '../../Schemas'
import MessageFormater from './MessageFormaterService'

class MessageService {
  static createStatisticsMessage (statisticData: CountrySchema): string {
    const messageBody = this.createCountryData(statisticData, false)
    const dateTime = new Date(statisticData.time).toLocaleString('us-en', { timeZoneName: 'short' })
    return (
`*COVID-19 - Hourly Update*
${messageBody}
*Updated @* ${dateTime}`
    )
  }

  static createTopFiveMessage (statisticData: CountrySchema[]): string {
    const dateTime = new Date(statisticData[0].time).toLocaleString('us-en', { timeZoneName: 'short' })
    const messageBody = statisticData.map(countryData => {
      return this.createCountryData(countryData, true)
    }).join('')

    return (
`*COVID-19 - TOP 5 most affected countries*
${messageBody}
*Updated @* ${dateTime}`
    )
  }

  static createCountryData (statisticData: CountrySchema, hasCountryName: boolean): string {
    const messageFormater = new MessageFormater()
    return (
`${hasCountryName ? `\n*${statisticData.country}*` : ''}
*Total Cases:* ${messageFormater.addSpaceToBigStringNumber(statisticData.cases.total.toString())}
*Active Cases:* ${messageFormater.addSpaceToBigStringNumber(statisticData.cases.active.toString())}
*Recovered Cases:* ${messageFormater.addSpaceToBigStringNumber(statisticData.cases.recovered.toString())}
*Critical Cases:* ${messageFormater.addSpaceToBigStringNumber(statisticData.cases.critical.toString())}
*Deaths:* ${messageFormater.addSpaceToBigStringNumber(statisticData.deaths.total.toString())}\n`
    )
  }
}

export default MessageService
