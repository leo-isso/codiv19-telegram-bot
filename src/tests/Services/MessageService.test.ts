import { expect } from 'chai'
import 'mocha'

import statisticsMock from '../mock/statistics.mock'

import MessageFormater from '../../Services/MessageService/MessageFormaterService'
import MessageService from '../../Services/MessageService/MessageService'

describe('Testing MessageFormater methods', () => {
  const messageFormater = new MessageFormater()

  it('MessageFormater should return a spaced big number as string', () => {
    const number = '1000000'
    const expectedNumber = '1 000 000'

    const formatedNumber = messageFormater.addSpaceToBigStringNumber(number)

    expect(formatedNumber).to.equal(expectedNumber)
  })

  it('MessageFormater should return an array of spaced big number as string', () => {
    const numbers = ['1000000', '500000', '7542']
    const expectedNumbers = ['1 000 000', '500 000', '7 542']

    const formatedNumbers = messageFormater.addSpaceToMultipleBigStringNumber(numbers)

    expect(formatedNumbers).to.eql(expectedNumbers)
  })
})

describe('Testing MessageService methods', () => {
  it('MessageService should return global statistics message string', () => {
    const country = statisticsMock[0]

    const expectedMessage = (
`*COVID-19 - Hourly Update*

*Total Cases:* 10 000
*Active Cases:* 10 000
*Recovered Cases:* 500
*Critical Cases:* 1 000
*Deaths:* 15 000

*Updated @* 4/13/2020, 8:58:20 AM GMT-3`
    )

    const formatedMessage = MessageService.createStatisticsMessage(country)

    expect(formatedMessage).to.equal(expectedMessage)
  })

  it('MessageService should return top five most affected country statistics message string', () => {
    const countries = statisticsMock

    const expectedMessage = (
`*COVID-19 - TOP 5 most affected countries*

*Brazil*
*Total Cases:* 10 000
*Active Cases:* 10 000
*Recovered Cases:* 500
*Critical Cases:* 1 000
*Deaths:* 15 000

*China*
*Total Cases:* 81 669
*Active Cases:* 1 376
*Recovered Cases:* 76 964
*Critical Cases:* 295
*Deaths:* 3 329

*Italy*
*Total Cases:* 124 632
*Active Cases:* 88 274
*Recovered Cases:* 20 996
*Critical Cases:* 3 994
*Deaths:* 15 362

*Spain*
*Total Cases:* 126 168
*Active Cases:* 80 002
*Recovered Cases:* 34 219
*Critical Cases:* 6 532
*Deaths:* 11 947

*USA*
*Total Cases:* 311 637
*Active Cases:* 288 355
*Recovered Cases:* 14 828
*Critical Cases:* 8 206
*Deaths:* 8 454

*Germany*
*Total Cases:* 96 092
*Active Cases:* 68 248
*Recovered Cases:* 26 400
*Critical Cases:* 3 936
*Deaths:* 1 444

*Iran*
*Total Cases:* 55 743
*Active Cases:* 32 555
*Recovered Cases:* 19 736
*Critical Cases:* 4 103
*Deaths:* 3 452

*France*
*Total Cases:* 89 953
*Active Cases:* 66 955
*Recovered Cases:* 15 438
*Critical Cases:* 6 838
*Deaths:* 7 560

*S.-Korea*
*Total Cases:* 10 237
*Active Cases:* 3 591
*Recovered Cases:* 6 463
*Critical Cases:* 55
*Deaths:* 183

*Updated @* 4/13/2020, 8:58:20 AM GMT-3`
    )

    const formatedMessage = MessageService.createTopFiveMessage(countries)

    expect(formatedMessage).to.equal(expectedMessage)
  })

  it('MessageService should return country statistics string', () => {
    const country = statisticsMock[0]

    const expectedMessageWithoutCountryName = (
`
*Total Cases:* 10 000
*Active Cases:* 10 000
*Recovered Cases:* 500
*Critical Cases:* 1 000
*Deaths:* 15 000
`
    )
    const expectedMessageWithCountryName = (
`
*Brazil*
*Total Cases:* 10 000
*Active Cases:* 10 000
*Recovered Cases:* 500
*Critical Cases:* 1 000
*Deaths:* 15 000
`
    )

    const formatedMessageWithoutCountryName = MessageService.createCountryData(country, false)
    expect(formatedMessageWithoutCountryName).to.equal(expectedMessageWithoutCountryName)

    const formatedMessageWithCountryName = MessageService.createCountryData(country, true)
    expect(formatedMessageWithCountryName).to.equal(expectedMessageWithCountryName)
  })
})
