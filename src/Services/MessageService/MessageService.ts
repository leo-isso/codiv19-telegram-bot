import { CountrySchema } from '../../Schemas'

class MessageService {
  static createStatisticsMessage (statisticData: CountrySchema): string {
    return `
    Last Updated: ${statisticData.time}

    Total Cases: ${statisticData.cases.total}
    Active Cases: ${statisticData.cases.active}
    Recovered Cases: ${statisticData.cases.recovered}
    Critical Cases: ${statisticData.cases.critical}

    Deaths: ${statisticData.deaths.total}
    `
  }
}

export default MessageService
