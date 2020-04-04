import { CountrySchema } from '../../Schemas'

class MessageService {
  static createStatisticsMessage (statisticData: CountrySchema): string {
    const dateTime = new Date(statisticData.time).toLocaleString('us-en', { timeZoneName: 'short' })
    return `
*COVID-19 - Hourly Update*

*Total Cases:* ${statisticData.cases.total}
*Active Cases:* ${statisticData.cases.active}
*Recovered Cases:* ${statisticData.cases.recovered}
*Critical Cases:* ${statisticData.cases.critical}
*Deaths:* ${statisticData.deaths.total}

*Updated @* ${dateTime}
    `
  }
}

export default MessageService
