const chai = require('chai')
const expect = chai.expect
const jwt = require('../../src/helpers/jwt')

describe('JWT', () => {
  it('sign() should return not null', () => {
    const secret = 'test'
    const data = 'testtest'
    const exp = 60
    const actualValue = jwt.sign({ secret, data, exp })
    expect(actualValue).to.not.equal(null)
  })
})