import { expect } from 'chai'
import 'mocha'

import Requester from './../../Requests/Requester'

describe('Testing Requester', () => {
  it('Requester A and B should represent same instance', () => {
    const RequesterA = Requester.getInstance()
    const RequesterB = Requester.getInstance()

    const comparizon = (RequesterA === RequesterB)

    expect(comparizon).to.equal(true)
  })
})
