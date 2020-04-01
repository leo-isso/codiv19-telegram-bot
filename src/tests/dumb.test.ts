import { expect } from 'chai'
import 'mocha'

function sum (a: number, b: number):number {
  return a + b
}

describe('sum test', () => {
  it('Should return sum', () => {
    const result = sum(1, 9)
    expect(result).to.equal(10)
  })
})
