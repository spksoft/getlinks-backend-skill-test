const chai = require('chai')
const expect = chai.expect
const hash = require('../../src/helpers/hash')

describe('Hash', () => {
  it('passwordHash() should return 74eec50d0011a0442083ff01c642c0f4075918cebf4b397155be6de60efabc77 if secret is test and value is testtest', () => {
    const secret = 'test'
    const value = 'testtest'
    const expectedValue = '74eec50d0011a0442083ff01c642c0f4075918cebf4b397155be6de60efabc77'
    const actualValue = hash.passwordHash({ secret, value })
    expect(actualValue).to.equal(expectedValue)
  })
})