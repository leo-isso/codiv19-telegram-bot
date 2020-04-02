import { StatisticsSchema, CountrySchema } from '../../Schemas'

class StatisticsService {
  payload: StatisticsSchema

  constructor (payload: StatisticsSchema) {
    this.payload = payload
  }

  getStatisticData (): CountrySchema {
    return this.payload.response.find(country => country.country === 'All')
  }
}

export default StatisticsService
