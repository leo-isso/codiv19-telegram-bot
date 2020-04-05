import { StatisticsSchema, CountrySchema } from '../../Schemas'

class StatisticsService {
  payload: StatisticsSchema

  constructor (payload: StatisticsSchema) {
    this.payload = payload
  }

  getStatisticData (): CountrySchema {
    return this.payload.response.find(country => country.country === 'All')
  }

  getTopFive (): CountrySchema[] {
    return this.payload.response.splice(0, 4)
  }
}

export default StatisticsService
