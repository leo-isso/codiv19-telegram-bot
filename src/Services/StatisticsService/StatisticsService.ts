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
    return this.payload.response
      .filter(country => country.country !== 'All' && country.country !== 'World')
      .sort((countryA: CountrySchema, countryB: CountrySchema) => (countryA.cases.total < countryB.cases.total) ? 1 : -1)
      .slice(0, 5)
  }
}

export default StatisticsService
