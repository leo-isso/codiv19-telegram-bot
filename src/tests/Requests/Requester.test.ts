import { expect } from 'chai'
import 'mocha'

import { CovidStatisticsRequester } from './../../Requests/Requester'

describe('Testing CovidStatisticsRequester', () => {
  it('CovidStatisticsRequester A and B should represent same instance', () => {
    const RequesterA = CovidStatisticsRequester.getInstance()
    const RequesterB = CovidStatisticsRequester.getInstance()

    const comparizon = (RequesterA === RequesterB)

    expect(comparizon).to.equal(true)
  })
})
