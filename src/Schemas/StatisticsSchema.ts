import CountrySchema from './CountrySchema'

export default interface StatisticsSchema{
  get: string
  parameters: object
  errors: object[]
  results: number
  response: CountrySchema[]
}
