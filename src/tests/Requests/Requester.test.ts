import { expect } from 'chai'
import 'mocha'

import { CovidStatisticsRequester, NewsRequester } from './../../Requests/Requester'

describe('Testing Requester single instances', () => {
  it('CovidStatisticsRequester A and B should represent same instance', () => {
    const RequesterA = CovidStatisticsRequester.getInstance()
    const RequesterB = CovidStatisticsRequester.getInstance()

    const comparizon = (RequesterA === RequesterB)

    expect(comparizon).to.equal(true)
  })

  it('NewsRequester A and B should represent same instance', () => {
    const RequesterA = NewsRequester.getInstance()
    const RequesterB = NewsRequester.getInstance()

    const comparizon = (RequesterA === RequesterB)

    expect(comparizon).to.equal(true)
  })
})
