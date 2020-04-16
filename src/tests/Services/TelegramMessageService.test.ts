import { expect } from 'chai'
import 'mocha'

import './../../utils/env'
import TelegramMessageService from '../../Services/TelegramMessageService/TelegramMessageService'

describe('Testing TelegramMessageService methods', () => {
  it('createGlobalStatisticsMessage should return string', async () => {
    const telegramMessage = await new TelegramMessageService().createGlobalStatisticsMessage()
    expect(telegramMessage).to.be.an('string')
  }).timeout(10000)
  it('createTopFiveCountryMessage should return string', async () => {
    const telegramMessage = await new TelegramMessageService().createTopFiveCountryMessage()
    expect(telegramMessage).to.be.an('string')
  }).timeout(10000)
  it('createNewsButtons should return array', async () => {
    const telegramMessage = await new TelegramMessageService().createNewsButtons()
    expect(telegramMessage).to.be.an('array')
  }).timeout(10000)
})
