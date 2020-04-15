import { StatisticsSchema, CountrySchema } from '../../Schemas'

import { continents } from '../../utils/globals'

class StatisticsService {
  payload: StatisticsSchema

  constructor (payload: StatisticsSchema) {
    this.payload = payload
  }

  getStatisticData (): CountrySchema {
    const continents = this.payload.response.filter(country => (
      continents.includes(country.country)
    ))

    const world = continents.reduce((world, country, index, continents) => {
      const newCases = (): number => {
        return parseInt(world.cases.new) + parseInt(country.cases.new)
      }
      const newDeaths = (): number => {
        return parseInt(world.cases.new) + parseInt(country.cases.new)
      }

      return {
        country: 'World',
        cases: {
          new: `+${newCases()}`,
          active: world.cases.active + country.cases.active,
          critical: world.cases.critical + country.cases.critical,
          recovered: world.cases.recovered + country.cases.recovered,
          total: world.cases.total + country.cases.total
        },
        deaths: {
          new: `+${newDeaths()}`,
          total: world.deaths.total + country.deaths.total
        },
        time: continents[0].time
      }
    })

    return world
  }

  getTopFive (): CountrySchema[] {
    return this.payload.response
      .filter(country => (!continents.includes(country.country)))
      .filter(country => country.country !== 'All' && country.country !== 'World')
      .sort((countryA: CountrySchema, countryB: CountrySchema) => (countryA.cases.total < countryB.cases.total) ? 1 : -1)
      .slice(0, 5)
  }
}

export default StatisticsService
