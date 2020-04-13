import { expect } from 'chai'
import 'mocha'

import MessageFormater from '../../Services/MessageService/MessageFormaterService'

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
